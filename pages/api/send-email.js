// pages/api/send-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log("let me SiKnowledgebase..", process.env.RESEND_API_KEY);
  if (req.method === "POST") {
    console.log("req.method::", req.method);

    try {
      const { to, subject, text } = req.body;
      console.log("req.body::", req.body);
      const emailResponse = await resend.emails.send({
        from: "you@example.com",
        to,
        subject,
        html: text,
      });
      console.log("emailResponse::", emailResponse);
      res.status(200).json({ success: true, emailResponse });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
