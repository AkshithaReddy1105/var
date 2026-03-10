/**
 * POST /api/appointment
 *
 * TEST EMAIL  : akshitareddybanala@gmail.com  (set in nuxt.config.ts + .env)
 * LIVE EMAIL  : switch CONTACT_EMAIL in .env to mail@ahaladaroassociates.com
 *
 * Sends two emails when SMTP is configured:
 *   1. Notification to CONTACT_EMAIL (the firm)
 *   2. Auto-acknowledgement to the client
 *
 * Requires SMTP_USER + SMTP_PASS in .env (see .env.example for Gmail setup).
 */

import nodemailer from 'nodemailer'

interface AppointmentBody {
  name:     string
  email:    string
  phone:    string
  company?: string
  service:  string
  date:     string
  time:     string
  message?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<AppointmentBody>(event)

  // ── Validation ──────────────────────────────────────────────────────────────
  const required: (keyof AppointmentBody)[] = ['name', 'email', 'phone', 'service', 'date', 'time']
  for (const field of required) {
    if (!body[field]?.toString().trim()) {
      throw createError({ statusCode: 400, message: `Field "${field}" is required.` })
    }
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRx.test(body.email)) {
    throw createError({ statusCode: 400, message: 'Please provide a valid email address.' })
  }

  const requestedDate = new Date(body.date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (requestedDate <= today) {
    throw createError({ statusCode: 400, message: 'Please select a future date for your appointment.' })
  }

  // ── Sanitise ────────────────────────────────────────────────────────────────
  const clean = (str: string) => str.replace(/[<>]/g, '')
  const safe: AppointmentBody = {
    name:    clean(body.name.trim()),
    email:   body.email.trim().toLowerCase(),
    phone:   clean(body.phone.trim()),
    company: clean(body.company?.trim() ?? ''),
    service: clean(body.service.trim()),
    date:    body.date.trim(),
    time:    body.time.trim(),
    message: clean(body.message?.trim() ?? ''),
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

      // 1. Notify the firm ───────────────────────────────────────────────────
      await transporter.sendMail({
        from:    `"Appointment System" <${config.smtpUser}>`,
        to:      config.contactEmail,       // → akshitareddybanala@gmail.com (test)
        replyTo: safe.email,
        subject: `[Appointment] ${safe.service} – ${safe.date} at ${safe.time}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#0d2137;padding:24px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">New Appointment Request</h2>
              <p style="color:#93c5fd;margin:4px 0 0;font-size:13px">Ahaladar Rao & Associates — Booking System</p>
            </div>
            <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-top:none">
              <div style="background:#dbeafe;border-left:4px solid #1d4ed8;padding:12px 16px;margin-bottom:20px;border-radius:0 6px 6px 0">
                <p style="margin:0;font-weight:600;color:#1e40af;font-size:15px">${safe.date} at ${safe.time}</p>
                <p style="margin:4px 0 0;color:#1e40af;font-size:13px">${safe.service}</p>
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151;width:130px">Name</td><td style="padding:8px 12px;color:#1f2937">${safe.name}</td></tr>
                <tr style="background:#fff"><td style="padding:8px 12px;font-weight:600;color:#374151">Email</td><td style="padding:8px 12px;color:#1f2937">${safe.email}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151">Phone</td><td style="padding:8px 12px;color:#1f2937">${safe.phone}</td></tr>
                <tr style="background:#fff"><td style="padding:8px 12px;font-weight:600;color:#374151">Company</td><td style="padding:8px 12px;color:#1f2937">${safe.company || 'Not provided'}</td></tr>
              </table>
              ${safe.message ? `
              <div style="margin-top:16px;padding:16px;background:#fff;border:1px solid #e2e8f0;border-radius:6px">
                <p style="font-weight:600;color:#374151;margin:0 0 8px;font-size:13px">ADDITIONAL NOTES</p>
                <p style="color:#374151;line-height:1.6;margin:0;white-space:pre-wrap">${safe.message}</p>
              </div>` : ''}
            </div>
          </div>
        `,
      })

      // 2. Acknowledge to client ────────────────────────────────────────────
      await transporter.sendMail({
        from:    `"Ahaladar Rao & Associates" <${config.smtpUser}>`,
        to:      safe.email,
        subject: 'Appointment Request Received – Ahaladar Rao & Associates',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#0d2137;padding:24px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">Appointment Request Received</h2>
              <p style="color:#93c5fd;margin:4px 0 0;font-size:13px">Ahaladar Rao & Associates — Company Secretaries</p>
            </div>
            <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-top:none">
              <p style="color:#374151;font-size:15px">Dear <strong>${safe.name}</strong>,</p>
              <p style="color:#374151;line-height:1.6">
                Thank you for requesting an appointment with <strong>Ahaladar Rao & Associates</strong>.
                We have received your booking request and our team will confirm it within <strong>2 business hours</strong>.
              </p>
              <div style="background:#dbeafe;border-radius:8px;padding:16px 20px;margin:20px 0">
                <p style="margin:0;font-size:13px;color:#1e40af;font-weight:600;text-transform:uppercase;letter-spacing:.5px">Your Appointment Details</p>
                <p style="margin:8px 0 0;color:#1e40af;font-size:15px;font-weight:600">${safe.date} at ${safe.time}</p>
                <p style="margin:4px 0 0;color:#1d4ed8;font-size:14px">${safe.service}</p>
              </div>
              <p style="color:#374151;line-height:1.6">
                For urgent matters, please call us at <a href="tel:04027623101" style="color:#1d4ed8;font-weight:600">040-27623101</a>
                or WhatsApp <a href="https://wa.me/917075927041" style="color:#1d4ed8;font-weight:600">+91 70759 27041</a>.
              </p>
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0">
              <p style="color:#374151;margin:0">Warm regards,</p>
              <p style="color:#0d2137;font-weight:600;margin:4px 0 0">Ahaladar Rao & Associates</p>
              <p style="color:#6b7280;font-size:13px;margin:2px 0">Company Secretaries, Hyderabad</p>
            </div>
          </div>
        `,
      })

    } catch (err) {
      console.error('[Appointment] Email send failed:', err)
      // Do not throw — still acknowledge the user
    }
  } else {
    console.warn('[Appointment] SMTP not configured — email not sent. Set SMTP_USER and SMTP_PASS in .env')
  }

  // ── Console log (always) ─────────────────────────────────────────────────────
  console.info('[Appointment Request]', {
    timestamp: new Date().toISOString(),
    to:      config.contactEmail,
    name:    safe.name,
    service: safe.service,
    date:    safe.date,
    time:    safe.time,
  })

  return {
    success: true,
    message: 'Your appointment request has been received. We will confirm it within 2 business hours.',
  }
})
