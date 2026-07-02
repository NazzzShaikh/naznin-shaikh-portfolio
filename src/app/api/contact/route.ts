import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const emailPass = process.env.EMAIL_PASS;
    if (!emailPass || emailPass === "your-app-password-here") {
      console.warn("EMAIL_PASS is not configured. Email will not be sent.");
      return NextResponse.json({ message: "Server misconfiguration. Please add your Gmail App Password to .env.local" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "nazshaikh2529@gmail.com",
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "nazshaikh2529@gmail.com",
      to: "nazshaikh2529@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Nodemailer email sent successfully to:", mailOptions.to);

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing inquiry via Nodemailer:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
