import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/temp"; // 👈 apne component ka sahi naam aur path use karo

// Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  let body;

  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Invalid or empty JSON in request body" },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = body;
console.log(body)
  // Safety check: required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Name, email aur message required hain" },
      { status: 400 }
    );
  }

  try {
    // Email bhejna
    const data = await resend.emails.send({
      from: "Acme <thecreatorwithart234@gmail.com>", // 👈 yahan apna verified sender daalo
      to: ["zainabsiddiq2308@gmail.com"],          // 👈 yahan apna original email daalo
      subject: `📩 New Contact Form Submission from ${name}`,
        react: EmailTemplate({ name, email, phone, message }), 
    });

  

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
