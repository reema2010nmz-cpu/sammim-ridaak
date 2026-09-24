# صمم رداءك — Norjan — نسخة Render

هذه النسخة تعمل كـ Node Web Service على Render، وتستخدم خادمًا خلفيًا لإرسال طلب توليد الصورة إلى OpenAI بدون كشف المفتاح في المتصفح.

## إعداد Render
- Runtime: Node
- Build Command: `npm install`
- Start Command: `npm start`
- Branch: `main`
- Environment Variable: `OPENAI_API_KEY` (Secret)

بعد إضافة المتغير أو تغييره، اعمل Deploy جديد.

## ملاحظة
لا تضع مفتاح OpenAI داخل `app.js` أو `index.html` أو أي ملف GitHub.
