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

    const transportOptions = process.env.EMAIL_SERVICE
      ? { service: process.env.EMAIL_SERVICE }
      : {
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 465,
          secure: process.env.EMAIL_SECURE === 'true' || process.env.EMAIL_PORT === '465',
        };

    const transporter = nodemailer.createTransport({
      ...transportOptions,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"DigitalEnclave Services" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Social Media Package Inquiry: ${subject}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\n\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              margin: 0;
              padding: 0;
              background-color: #f4f6fb;
            }
            table {
              border-collapse: collapse;
            }
            .wrapper {
              width: 100%;
              max-width: 680px;
              margin: 0 auto;
              padding: 20px;
            }
            .content {
              background-color: #ffffff;
              border: 1px solid #d7dae0;
              border-radius: 12px;
              overflow: hidden;
            }
            .header {
              background-color: #5b3df5;
              color: #ffffff;
              padding: 28px 24px;
              text-align: center;
              font-family: Arial, sans-serif;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              letter-spacing: 0.3px;
            }
            .body {
              padding: 24px;
              font-family: Arial, sans-serif;
              color: #334155;
            }
            .section-title {
              margin: 0 0 12px 0;
              font-size: 16px;
              font-weight: 700;
              color: #1f2937;
            }
            .detail-table {
              width: 100%;
              margin-bottom: 22px;
            }
            .detail-table td {
              padding: 8px 0;
              vertical-align: top;
              font-size: 15px;
              line-height: 1.6;
            }
            .detail-label {
              width: 140px;
              font-weight: 700;
              color: #4338ca;
            }
            .detail-value {
              color: #334155;
            }
            .message-box {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 10px;
              padding: 16px;
              color: #475569;
              font-size: 15px;
              line-height: 1.7;
              white-space: pre-wrap;
            }
            .footer {
              padding: 20px 24px 24px;
              font-family: Arial, sans-serif;
              font-size: 13px;
              color: #64748b;
              line-height: 1.6;
            }
            .footer strong {
              color: #1f2937;
            }
          </style>
        </head>
        <body>
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td>
                <table class="wrapper" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td class="content">
                      <div class="header">
                        <h1>New Social Media Package Inquiry</h1>
                      </div>
                      <div class="body">
                        <p class="section-title">Inquiry Details</p>
                        <table class="detail-table" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td class="detail-label">Name:</td>
                            <td class="detail-value">${fullName}</td>
                          </tr>
                          <tr>
                            <td class="detail-label">Email:</td>
                            <td class="detail-value">${email}</td>
                          </tr>
                          <tr>
                            <td class="detail-label">Phone:</td>
                            <td class="detail-value">${phone || 'Not provided'}</td>
                          </tr>
                          <tr>
                            <td class="detail-label">Subject:</td>
                            <td class="detail-value">${subject}</td>
                          </tr>
                        </table>

                        <p class="section-title">Message</p>
                        <div class="message-box">${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}</div>
                      </div>
                      <div class="footer">
                        <p><strong>Submission Details</strong></p>
                        <p>Date: ${new Date().toLocaleString()}</p>
                        <p>Form: Social Media Package Inquiry</p>
                        <p>This email was automatically generated. Do not reply directly to this message.</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
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