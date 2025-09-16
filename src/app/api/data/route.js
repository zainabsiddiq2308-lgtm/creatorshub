import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/temp";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email aur message required hain" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Creators Hub <onboarding@resend.dev>", // 👈 yahan verified sender use karo
      to: ["thecreatorwithart234@gmail.com"],
      subject: `📩 New Contact Form Submission from ${name}`,
      react: <EmailTemplate name={name} email={email} phone={phone} message={message} />,
    });

    return NextResponse.json({ success: true, message:"send",data });
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
