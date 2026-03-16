import { createClient } from 'npm:@supabase/supabase-js@2'

type NotificationType = 'report_subscription' | 'consultation_request'

type ReportSubscriptionRequest = {
  type?: NotificationType
  runId?: string
  email: string
  organization: string
  role?: string
  reportType?: string
  reportDownloadUrl?: string
}

type ConsultationRequest = {
  type: NotificationType
  runId?: string
  name: string
  email: string
  phone?: string
  consultationType?: string
  city?: string
  message?: string
  attachmentName?: string | null
}

type RequestPayload = ReportSubscriptionRequest | ConsultationRequest

type QueuedEmail = {
  to: string
  subject: string
  html: string
  text: string
  label: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type, x-lovable-run-id, x-request-id, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const SENDER_DOMAIN = 'notify.vibeintell.com'
const FROM_ADDRESS = 'Vibe Intelligence <notify@vibeintell.com>'
const ADMIN_EMAIL = 'team@vibe-intelligence.com'
const DEFAULT_SITE_URL = 'https://vibe-intelligence.lovable.app'
const DEFAULT_REPORT_DOWNLOAD_URL = `${DEFAULT_SITE_URL}/reports/deepfake-report-2026.pdf`

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function isValidHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function normalizeRunId(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

function resolveRunId(req: Request, payload: RequestPayload): string | null {
  return (
    normalizeRunId(payload.runId) ||
    normalizeRunId(req.headers.get('x-lovable-run-id')) ||
    normalizeRunId(req.headers.get('x-request-id'))
  )
}

/** True when the run ID came from a real source (not a fallback UUID). */
function isRealRunId(req: Request, payload: RequestPayload): boolean {
  return resolveRunId(req, payload) !== null
}

async function enqueueTransactionalEmail(
  supabase: ReturnType<typeof createClient>,
  email: QueuedEmail,
  runId: string
): Promise<void> {
  const messageId = crypto.randomUUID()

  await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: email.label,
    recipient_email: email.to,
    status: 'pending',
    metadata: { run_id: runId },
  })

  const { error: enqueueError } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      run_id: runId,
      message_id: messageId,
      to: email.to,
      from: FROM_ADDRESS,
      sender_domain: SENDER_DOMAIN,
      subject: email.subject,
      html: email.html,
      text: email.text,
      purpose: 'transactional',
      label: email.label,
      queued_at: new Date().toISOString(),
    },
  })

  if (enqueueError) {
    console.error('Failed to enqueue transactional email', {
      label: email.label,
      recipient: email.to,
      error: enqueueError,
    })

    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: email.label,
      recipient_email: email.to,
      status: 'failed',
      error_message: 'Failed to enqueue email',
      metadata: { run_id: runId },
    })

    throw new Error('Failed to enqueue transactional email')
  }
}

function buildReportEmails(payload: ReportSubscriptionRequest): QueuedEmail[] {
  const reportType = payload.reportType?.trim() || 'The Global State of Deepfakes in 2026'
  const organization = payload.organization.trim()
  const downloadUrl =
    payload.reportDownloadUrl && isValidHttpUrl(payload.reportDownloadUrl)
      ? payload.reportDownloadUrl
      : DEFAULT_REPORT_DOWNLOAD_URL

  const safeOrganization = escapeHtml(organization)
  const safeReportType = escapeHtml(reportType)
  const safeRole = payload.role?.trim() ? escapeHtml(payload.role.trim()) : ''
  const safeEmail = escapeHtml(payload.email.trim())

  const subscriberHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0f172a;">
      <h1 style="font-size: 24px; margin-bottom: 12px;">Your report is ready</h1>
      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px;">
        Thanks for requesting <strong>${safeReportType}</strong>. Use the secure link below to download your PDF.
      </p>
      <p style="margin: 24px 0;">
        <a href="${downloadUrl}" style="display: inline-block; background: #4a4fbf; color: #ffffff; text-decoration: none; padding: 12px 18px; border-radius: 8px; font-weight: 600;">
          Download the Report
        </a>
      </p>
      <p style="font-size: 14px; color: #475569; line-height: 1.6;">
        If the button does not open, copy and paste this URL into your browser:<br />
        <a href="${downloadUrl}" style="color: #4a4fbf;">${downloadUrl}</a>
      </p>
      <p style="font-size: 13px; color: #64748b; margin-top: 24px;">— Vibe Intelligence</p>
    </div>
  `

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0f172a;">
      <h1 style="font-size: 22px; margin-bottom: 16px;">New report subscription</h1>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;">${safeEmail}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Organization</td><td style="padding: 8px 0;">${safeOrganization}</td></tr>
        ${safeRole ? `<tr><td style="padding: 8px 0; font-weight: 600;">Role</td><td style="padding: 8px 0;">${safeRole}</td></tr>` : ''}
        <tr><td style="padding: 8px 0; font-weight: 600;">Report</td><td style="padding: 8px 0;">${safeReportType}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Subscribed at</td><td style="padding: 8px 0;">${new Date().toISOString()}</td></tr>
      </table>
    </div>
  `

  return [
    {
      to: payload.email.trim(),
      subject: `Your download link: ${reportType}`,
      html: subscriberHtml,
      text: `Thanks for requesting ${reportType}. Download your report here: ${downloadUrl}`,
      label: 'report-subscriber-confirmation',
    },
    {
      to: ADMIN_EMAIL,
      subject: `New report subscription: ${reportType}`,
      html: adminHtml,
      text: `New report subscription\nEmail: ${payload.email.trim()}\nOrganization: ${organization}${payload.role?.trim() ? `\nRole: ${payload.role.trim()}` : ''}\nReport: ${reportType}`,
      label: 'report-admin-notification',
    },
  ]
}

function buildConsultationEmails(payload: ConsultationRequest): QueuedEmail[] {
  const name = payload.name.trim()
  const email = payload.email.trim()
  const consultationType = payload.consultationType?.trim() || 'General consultation request'
  const phone = payload.phone?.trim() || 'Not provided'
  const city = payload.city?.trim() || 'Not provided'
  const message = payload.message?.trim() || 'No message provided'
  const attachmentName = payload.attachmentName?.trim() || 'None'

  const safeName = escapeHtml(name)
  const safeConsultationType = escapeHtml(consultationType)
  const safePhone = escapeHtml(phone)
  const safeCity = escapeHtml(city)
  const safeMessage = escapeHtml(message)
  const safeAttachmentName = escapeHtml(attachmentName)
  const safeEmail = escapeHtml(email)

  const requesterHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0f172a;">
      <h1 style="font-size: 24px; margin-bottom: 12px;">Consultation request received</h1>
      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px;">
        Hi ${safeName}, thanks for booking a consultation with Vibe Intelligence.
      </p>
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 8px;"><strong>Request type:</strong> ${safeConsultationType}</p>
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 8px;"><strong>City:</strong> ${safeCity}</p>
      <p style="font-size: 15px; line-height: 1.6; margin: 0;">Our team will contact you within 24 hours.</p>
    </div>
  `

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0f172a;">
      <h1 style="font-size: 22px; margin-bottom: 16px;">New consultation request</h1>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: 600;">Name</td><td style="padding: 8px 0;">${safeName}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;">${safeEmail}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Phone</td><td style="padding: 8px 0;">${safePhone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Consultation type</td><td style="padding: 8px 0;">${safeConsultationType}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">City</td><td style="padding: 8px 0;">${safeCity}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Attachment</td><td style="padding: 8px 0;">${safeAttachmentName}</td></tr>
      </table>
      <p style="margin-top: 18px; font-weight: 600;">Message</p>
      <p style="margin-top: 8px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
    </div>
  `

  return [
    {
      to: email,
      subject: 'Consultation request received',
      html: requesterHtml,
      text: `Hi ${name}, your consultation request was received. Request type: ${consultationType}. We will contact you within 24 hours.`,
      label: 'consultation-requester-confirmation',
    },
    {
      to: ADMIN_EMAIL,
      subject: `New consultation request: ${name}`,
      html: adminHtml,
      text: `New consultation request\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nConsultation type: ${consultationType}\nCity: ${city}\nAttachment: ${attachmentName}\nMessage: ${message}`,
      label: 'consultation-admin-notification',
    },
  ]
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!supabaseUrl || !serviceRoleKey) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }

  try {
    const payload = (await req.json()) as RequestPayload
    const type = payload.type ?? 'report_subscription'
    const runId = resolveRunId(req, payload) || crypto.randomUUID()

    let emailsToSend: QueuedEmail[]

    if (type === 'consultation_request') {
      const consultationPayload = payload as ConsultationRequest
      if (!consultationPayload.name?.trim() || !consultationPayload.email?.trim()) {
        return new Response(JSON.stringify({ error: 'Missing required fields for consultation request' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        })
      }
      emailsToSend = buildConsultationEmails(consultationPayload)
    } else {
      const reportPayload = payload as ReportSubscriptionRequest
      if (!reportPayload.email?.trim() || !reportPayload.organization?.trim()) {
        return new Response(JSON.stringify({ error: 'Missing required fields for report subscription' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        })
      }
      emailsToSend = buildReportEmails(reportPayload)
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey)

    for (const email of emailsToSend) {
      await enqueueTransactionalEmail(supabase, email, runId)
    }

    return new Response(JSON.stringify({ success: true, queued: emailsToSend.length, type }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    console.error('send-subscription-notification failed', message)

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }
})