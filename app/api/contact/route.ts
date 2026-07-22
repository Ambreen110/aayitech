import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      // Your Gmail from .env.local
      to: process.env.CONTACT_EMAIL!,

      // So replying goes directly to the visitor
      replyTo: email,

      subject: `New Portfolio Inquiry from ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;padding:30px;background:#f8fafc">

        <div style="max-width:700px;margin:auto;background:white;padding:40px;border-radius:12px">

          <h2 style="margin-top:0;color:#0891b2;">
            New Portfolio Contact
          </h2>

          <hr style="margin:25px 0"/>

          <p><strong>Name</strong></p>
          <p>${name}</p>

          <p><strong>Email</strong></p>
          <p>${email}</p>

          <p><strong>Company</strong></p>
          <p>${company || "Not Provided"}</p>

          <p><strong>Service</strong></p>
          <p>${service || "Not Selected"}</p>

          <p><strong>Project Details</strong></p>

          <div
            style="
              background:#f4f4f4;
              padding:20px;
              border-radius:8px;
              white-space:pre-wrap;
            "
          >
            ${message}
          </div>

          <hr style="margin:30px 0"/>

          <p style="font-size:13px;color:#777;">
            Sent from your portfolio contact form.
          </p>

        </div>

      </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}