import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key validation
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.warn(
    "RESEND_API_KEY environment variable is not set. Email functionality will be disabled."
  );
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, field, description, captcha } = body;

    if (!captcha) {
      return NextResponse.json(
        { error: "Please verify you are not a robot" },
        { status: 400 }
      );
    }

    // Check if Resend is properly configured
    if (!resend) {
      console.log("Email service not configured. Form submission received:", {
        name,
        email,
        company,
        field,
        description: description.substring(0, 100) + "...",
      });

      return NextResponse.json({
        success: true,
        message: "Form submitted successfully (email service not configured)",
      });
    }

    const emailHtml = `
      <h2>New Contact Form Submission - Digital Crafters</h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry/Field:</strong> ${field}</p>
      </div>
      
      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Project Description</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${description}</p>
      </div>
      
      <div style="background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          This message was sent from the Digital Crafters contact form on ${new Date().toLocaleString()}.
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Digital Crafters <noreply@digitalcrafters.dev>",
      to: ["gtzgileta@gmail.com", "luisjc140992@gmail.com"],
      subject: `New Contact Form Submission from ${name} (${company})`,
      html: emailHtml,
      replyTo: email,
    });

    // Send confirmation email to the user
    const confirmationEmailHtml = `
      <h2>Thank you for contacting Digital Crafters!</h2>
      
      <p>Hi ${name},</p>
      
      <p>We've received your message and appreciate you taking the time to reach out to us. Our team will review your project details and get back to you within 24 hours.</p>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Your Submission Summary</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${field}</p>
        <p><strong>Project:</strong> ${description.substring(0, 100)}${
      description.length > 100 ? "..." : ""
    }</p>
      </div>
      
      <p>In the meantime, feel free to check out our recent work and learn more about our services on our website.</p>
      
      <p>Best regards,<br>The Digital Crafters Team</p>
      
      <div style="background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          This is an automated confirmation email. Please do not reply to this email.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Digital Crafters <noreply@digitalcrafters.dev>",
      to: [email],
      subject: "Thank you for contacting Digital Crafters",
      html: confirmationEmailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
