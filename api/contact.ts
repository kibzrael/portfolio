import type { VercelResponse } from "@vercel/node";
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

export async function POST(request: Request, response: VercelResponse) {
  try {
    const data = await request.json();

    const html = await fetch(new URL("/templates/contact.html", request.url));
    const htmlBody = format(await html.text(), data);

    const text = `Hello I am ${data.name}, my email is ${data.email} and phone is ${data.phone}. ${data.message}`;

    await transporter.sendMail({
      from: `"${data.name}" <${process.env.MAIL_APP_USER}>`,
      to: process.env.MAIL_APP_USER,
      subject: `RaelCode contact from ${data.name}`,
      text,
      html: htmlBody,
    });

    return Response.json(
      {
        success: true,
        message:
          "Message sent successfully. I will reach out to you as soon as possible. Thank you.",
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message || "Error sending message. Please try again.",
        error: error.code + ": " + error.toString(),
        url: request.url,
      },
      { status: 500 },
    );
  }
}
