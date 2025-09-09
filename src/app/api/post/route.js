"use server";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "",
      },
    });

    const mailOptions = {
      from: `Website Form <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: "thecreator234@gmail.com",
      subject: "Contact Us Form",
      text: `
        Message: ${message}
        Name: ${name} 
        Email: ${email}
        Phone: ${phone}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us! We will get back to you shortly.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Error sending your message. Please try again later.",
    });
  }
}
