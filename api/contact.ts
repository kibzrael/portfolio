import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import format from "string-template";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.MAIL_APP_USER,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

export async function POST(request: VercelRequest, response: VercelResponse) {
  try {
    const data = await request.body.json();

    const html = await fetch(new URL("/templates/contact.html", request.url));
    const htmlBody = format(await html.text(), data);

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`, // sender address
      to: process.env.MAIL_APP_USER, // list of receivers
      subject: `RaelCode contact from ${data.name}`, // Subject line
      text: data.message, // plain text body
      html: htmlBody, // html body
    });

    return response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    return response.json({
      success: false,
      message: error.message || "Error sending message",
      error: error.code + ": " + error.toString(),
      url: request.url,
    });
  }
}
