const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json({ limit: "64kb" }));

// تشغيل ملفات الموقع الموجودة في المجلد الرئيسي
app.use(express.static(__dirname));

// إنشاء التصميم بالذكاء الاصطناعي
app.post("/api/generate-image", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "لم يتم إعداد OPENAI_API_KEY في Render بعد."
      });
    }

    const prompt =
      typeof req.body?.prompt === "string"
        ? req.body.prompt.trim()
        : "";

    if (!prompt) {
      return res.status(400).json({
        error: "لم تصل مواصفات التصميم."
      });
    }

    if (prompt.length > 12000) {
      return res.status(400).json({
        error: "مواصفات التصميم طويلة جدًا."
      });
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-image-2",
          prompt: prompt,
          size: "1024x1536",
          quality: "medium",
          output_format: "png",
          n: 1
        })
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message =
        data?.error?.message ||
        data?.error ||
        "تعذر إنشاء الصورة من خدمة الذكاء الاصطناعي.";

      return res.status(response.status).json({
        error: String(message)
      });
    }

    const imageData = data?.data?.[0];

    if (!imageData) {
      return res.status(502).json({
        error: "لم تصل الصورة من خدمة الذكاء الاصطناعي."
      });
    }

    if (imageData.b64_json) {
      return res.json({
        image: `data:image/png;base64,${imageData.b64_json}`
      });
    }

    if (imageData.url) {
      return res.json({
        image: imageData.url
      });
    }

    return res.status(502).json({
      error: "لم تصل بيانات الصورة."
    });

  } catch (error) {
    console.error("Generate image error:", error);

    return res.status(500).json({
      error: "حدث خطأ في الخادم أثناء إنشاء التصميم."
    });
  }
});

// فتح الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`صمم رداءك يعمل على المنفذ ${PORT}`);
});
