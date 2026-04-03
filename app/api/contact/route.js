// Create this file at: app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, message } = body;

    console.log("USER:", process.env.EMAIL_USER);
    console.log("PASS:", process.env.EMAIL_PASS);
    console.log("HOST:", process.env.EMAIL_HOST);
console.log("PORT:", process.env.EMAIL_PORT);

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"DigitalEnclave Services" <${process.env.EMAIL_USER}>`, // ✅ FIX
      to: process.env.EMAIL_TO,
      replyTo: email, // ✅ ADD (important)
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              max-width: 600px;
              margin: 0 auto;
            }
            .email-container {
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .email-header {
              background-color: #4a6fa5;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .email-header h2 {
              margin: 0;
              font-size: 24px;
            }
            .email-body {
              padding: 20px;
              background-color: #ffffff;
            }
            .email-field {
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px solid #eeeeee;
            }
            .email-field strong {
              color: #4a6fa5;
            }
            .message-content {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 5px;
              margin-top: 5px;
              border-left: 4px solid #4a6fa5;
            }
            .email-footer {
              background-color: #f5f5f5;
              padding: 20px;
              color: #777777;
              border-top: 1px solid #e0e0e0;
            }
            .footer-details {
              margin-bottom: 15px;
            }
            .footer-contact {
              margin-bottom: 15px;
            }
            .footer-social {
              margin-top: 15px;
            }
            .footer-social a {
              display: inline-block;
              margin: 0 10px;
              color: #4a6fa5;
              text-decoration: none;
            }
            .footer-copyright {
              margin-top: 15px;
              font-size: 12px;
              text-align: center;
              color: #999999;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="email-body">
              <div class="email-field">
                <strong>Name:</strong> ${fullName}
              </div>
              <div class="email-field">
                <strong>Email:</strong> ${email}
              </div>
              <div class="email-field">
                <strong>Phone:</strong> ${phone || 'Not provided'}
              </div>
              <div class="email-field">
                <strong>Subject:</strong> ${subject}
              </div>
              <div class="email-field">
                <strong>Message:</strong>
                <div class="message-content">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="email-footer">
              <div class="footer-details">
                <strong>Submission Details</strong><br>
                Date: ${new Date().toLocaleString()}<br>
                Form: Contact Form
              </div>
              <div class="footer-contact">
                <strong>Contact Us</strong><br>
                Email: support@DigitalEnclave.com<br>
                Phone: (555) 123-4567<br>
                Hours: Monday-Friday, 9 AM - 5 PM EST
              </div>
              <div class="footer-social">
                <a href="https://facebook.com/yourcompany">Facebook</a> |
                <a href="https://twitter.com/yourcompany">Twitter</a> |
                <a href="https://linkedin.com/company/yourcompany">LinkedIn</a>
              </div>
              <div class="footer-copyright">
                &copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.<br>
                This email was automatically generated. Please do not reply directly to this message.
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}