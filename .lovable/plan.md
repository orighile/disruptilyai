

## Issues Found

### 1. Emails failing with "run_not_found" (all going to dead-letter queue)
Every email attempt fails with: `Email API error: 404 {"type":"run_not_found","message":"Run not found or expired"}`. All 20 emails in the log are in `dlq` status.

**Root cause:** `send-subscription-notification` generates a random UUID as a fallback `run_id` and always includes it in the queued email payload. When `process-email-queue` sends via the email API, this fake `run_id` is rejected because it's not a valid Lovable run ID. The email API requires either a real run ID or none at all.

**Fix:** In `send-subscription-notification`, only include `run_id` in the enqueued payload when a real one was resolved from request headers. When the fallback UUID is used, omit `run_id` from the payload entirely so `process-email-queue` sends without it.

### 2. Report link not discoverable
The Deepfake Report page (`/deepfake-report`) is only linked from the homepage banner. Users on other pages cannot find it.

**Fix:** 
- Add a "Report" link to the Header navigation (desktop and mobile)
- Add report CTAs on service pages (DeepfakeDetection, AIGrc, AIMarketing)

---

## Plan

### Step 1: Fix email delivery
Edit `supabase/functions/send-subscription-notification/index.ts`:
- Track whether `runId` came from a real source vs. the fallback
- Only include `run_id` in the enqueued email payload when it's a real Lovable run ID
- Keep the generated UUID for `email_send_log` metadata (for correlation) but not in the queue payload

Redeploy the `send-subscription-notification` edge function.

### Step 2: Add Report link to Header
Edit `src/components/Header.tsx`:
- Add a "Report" nav link pointing to `/deepfake-report` in both desktop and mobile menus

### Step 3: Add Report CTAs on service pages
Edit `src/pages/DeepfakeDetection.tsx`, `src/pages/AIGrc.tsx`, `src/pages/AIMarketing.tsx`:
- Add a brief callout/banner linking to `/deepfake-report` (similar to the homepage ReportBanner but compact)

### Step 4: Verify
- Confirm the edge function deploys successfully
- The next form submission should result in emails with status `sent` instead of `dlq`

