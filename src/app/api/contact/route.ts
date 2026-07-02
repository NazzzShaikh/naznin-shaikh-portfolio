import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const emailPass = process.env.EMAIL_PASS;
    const emailUser = process.env.EMAIL_USER;

    if (!emailPass) {
      console.error("EMAIL_PASS is missing");

      return NextResponse.json(
        {
          message: "Server misconfiguration",
          error: "EMAIL_PASS environment variable is missing",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: "nazshaikh2529@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);

    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}