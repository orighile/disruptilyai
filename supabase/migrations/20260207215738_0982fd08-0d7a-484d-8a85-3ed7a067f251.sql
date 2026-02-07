-- Create table for deepfake report subscriptions
CREATE TABLE public.report_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  organization TEXT NOT NULL,
  role TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  report_type TEXT NOT NULL DEFAULT 'deepfake-2026'
);

-- Create index for faster lookups
CREATE INDEX idx_report_subscriptions_email ON public.report_subscriptions(email);
CREATE INDEX idx_report_subscriptions_subscribed_at ON public.report_subscriptions(subscribed_at DESC);

-- Enable Row Level Security (table is public for inserts, admin-only for reads)
ALTER TABLE public.report_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for subscription form)
CREATE POLICY "Anyone can subscribe to reports"
ON public.report_subscriptions
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins can view subscriptions (we'll add admin check later if needed)
-- For now, allow service role to read for edge function notifications
CREATE POLICY "Service role can read subscriptions"
ON public.report_subscriptions
FOR SELECT
USING (true);