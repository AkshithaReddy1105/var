/**
 * POST /api/contact
 *
 * TEST EMAIL  : akshitareddybanala@gmail.com  (set in nuxt.config.ts + .env)
 * LIVE EMAIL  : switch CONTACT_EMAIL in .env to mail@ahaladaroassociates.com
 *
 * Requires SMTP_USER + SMTP_PASS in .env (see .env.example for Gmail setup).
 * If SMTP credentials are missing the form still returns success but logs to console.
 */

import nodemailer from 'nodemailer'

interface ContactBody {
  name:    string
  email:   string
  phone?:  string
  subject: string
  message: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)

  // ── Validation ──────────────────────────────────────────────────────────────
  const required: (keyof ContactBody)[] = ['name', 'email', 'subject', 'message']
  for (const field of required) {
    if (!body[field]?.toString().trim()) {
      throw createError({ statusCode: 400, message: `Field "${field}" is required.` })
    }
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRx.test(body.email)) {
    throw createError({ statusCode: 400, message: 'Please provide a valid email address.' })
  }

  // ── Sanitise ────────────────────────────────────────────────────────────────
  const clean = (str: string) => str.replace(/[<>]/g, '')
  const safe: ContactBody = {
    name:    clean(body.name.trim()),
    email:   body.email.trim().toLowerCase(),
    phone:   body.phone?.trim() ?? '',
    subject: clean(body.subject.trim()),
    message: clean(body.message.trim()),
  }

  const config = useRuntimeConfig()

  // ── Email via Gmail SMTP ────────────────────────────────────────────────────
  if (config.smtpUser && config.smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: config.smtpHost || 'smtp.gmail.com',
        port: Number(config.smtpPort) || 587,
        secure: false,
        auth: {
          user: config.smtpUser,
          pass: config.smtpPass,
        },
      })

      await transporter.sendMail({
        from:    `"Ahaladar Rao & Associates Website" <${config.smtpUser}>`,
        to:      config.contactEmail,       // → akshitareddybanala@gmail.com (test) or official email
        replyTo: safe.email,
        subject: `[Website Enquiry] ${safe.subject}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#0d2137;padding:24px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">New Website Enquiry</h2>
              <p style="color:#93c5fd;margin:4px 0 0;font-size:13px">Ahaladar Rao & Associates — Contact Form</p>
            </div>
            <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-top:none">
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151;width:120px">Name</td><td style="padding:8px 12px;color:#1f2937">${safe.name}</td></tr>
                <tr style="background:#fff"><td style="padding:8px 12px;font-weight:600;color:#374151">Email</td><td style="padding:8px 12px;color:#1f2937">${safe.email}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151">Phone</td><td style="padding:8px 12px;color:#1f2937">${safe.phone || 'Not provided'}</td></tr>
                <tr style="background:#fff"><td style="padding:8px 12px;font-weight:600;color:#374151">Subject</td><td style="padding:8px 12px;color:#1f2937">${safe.subject}</td></tr>
              </table>
              <div style="margin-top:16px;padding:16px;background:#fff;border:1px solid #e2e8f0;border-radius:6px">
                <p style="font-weight:600;color:#374151;margin:0 0 8px;font-size:13px">MESSAGE</p>
                <p style="color:#374151;line-height:1.6;margin:0;white-space:pre-wrap">${safe.message}</p>
              </div>
              <p style="margin-top:16px;font-size:12px;color:#9ca3af">
                To reply, simply reply to this email — it will go directly to ${safe.email}
              </p>
            </div>
          </div>
        `,
      })
    } catch (err) {
      console.error('[Contact Form] Email send failed:', err)
      // Do not throw — still acknowledge the user
    }
  } else {
    console.warn('[Contact Form] SMTP not configured — email not sent. Set SMTP_USER and SMTP_PASS in .env')
  }

  // ── Console log (always) ─────────────────────────────────────────────────────
  console.info('[Contact Form]', {
    timestamp: new Date().toISOString(),
    to:      config.contactEmail,
    name:    safe.name,
    email:   safe.email,
    subject: safe.subject,
  })

  return { success: true, message: 'Your message has been received. We will contact you shortly.' }
})
