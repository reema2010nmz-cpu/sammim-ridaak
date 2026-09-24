const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json({ limit: "64kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/generate-image", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "لم يتم إعداد OPENAI_API_KEY في Render بعد."
      });
    }

    const prompt = typeof req.body?.prompt === "string" ? req.body.prompt.trim() : "";
    if (!prompt) {
      return res.status(400).json({ error: "لم تصل مواصفات التصميم." });
    }
    if (prompt.length > 12000) {
      return res.status(400).json({ error: "مواصفات التصميم طويلة جدًا." });
    }

    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt,
        size: "1024x1536",
        quality: "medium",
        output_format: "png",
        n: 1
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message =
        data?.error?.message ||
        data?.error ||
        "تعذر إنشاء الصورة من خدمة الذكاء الاصطناعي.";
      return res.status(response.status >= 400 && response.status < 600 ? response.status : 502)
        .json({ error: String(message) });
    }

    const b64 = data?.data?.[0]?.b64_json;
    if (!b64) {
      return res.status(502).json({ error: "لم تصل الصورة من خدمة الذكاء الاصطناعي." });
    }

    return res.json({ image: `data:image/png;base64,${b64}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "حدث خطأ في الخادم أثناء إنشاء التصميم."
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`صمم رداءك يعمل على المنفذ ${PORT}`);
});
