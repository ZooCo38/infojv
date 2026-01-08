import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Contact form request interface
 */
interface ContactRequest {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

/**
 * API response interface
 */
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate contact request data
 */
function validateRequest(data: ContactRequest): { valid: boolean; error?: string } {
  if (!data.name || !data.name.trim()) {
    return { valid: false, error: 'Le nom est requis' };
  }

  if (!data.email || !data.email.trim()) {
    return { valid: false, error: 'L\'email est requis' };
  }

  if (!EMAIL_REGEX.test(data.email)) {
    return { valid: false, error: 'Format d\'email invalide' };
  }

  if (!data.message || !data.message.trim()) {
    return { valid: false, error: 'Le message est requis' };
  }

  return { valid: true };
}

/**
 * Create nodemailer transporter
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body: ContactRequest = await request.json();

    // Check honeypot first (NFR7 - anti-spam)
    // If honeypot is filled, it's likely a bot - return success silently
    if (body.honeypot && body.honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Message envoyé' });
    }

    // Validate request data
    const validation = validateRequest(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    // Check SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing');
      return NextResponse.json(
        { success: false, error: 'Configuration serveur manquante' },
        { status: 500 }
      );
    }

    // Create transporter and send email
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'contact@infojv.net',
      replyTo: body.email,
      subject: `[Info JV] Nouveau message de ${body.name}`,
      text: `
Nouveau message de contact depuis infojv.net

Nom: ${body.name}
Email: ${body.email}

Message:
${body.message}

---
Ce message a été envoyé via le formulaire de contact du site infojv.net
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0C0C0C; color: #fff; padding: 20px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #FFF4F3; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: 600; color: #555; }
    .value { margin-top: 5px; }
    .message { background: #fff; padding: 15px; border-radius: 8px; border: 1px solid #E5E5E5; }
    .footer { margin-top: 20px; font-size: 12px; color: #888; }
    .accent { color: #53E1A1; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nouveau message de contact</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nom</div>
        <div class="value">${body.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${body.email}" class="accent">${body.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message">${body.message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        Ce message a été envoyé via le formulaire de contact du site <strong>infojv.net</strong>
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message envoyé' });
  } catch (error) {
    console.error('Contact API error:', error);

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides' },
        { status: 400 }
      );
    }

    // Handle SMTP errors
    return NextResponse.json(
      { success: false, error: 'Erreur d\'envoi' },
      { status: 500 }
    );
  }
}
