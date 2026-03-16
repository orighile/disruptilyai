import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  Landmark,
  Download,
  CheckCircle2,
  Globe,
  Users,
  Lock,
  FileText,
  ArrowRight
} from 'lucide-react';

const subscriptionSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
});

type SubscriptionForm = z.infer<typeof subscriptionSchema>;

const REPORT_DOWNLOAD_URL = 'https://vibe-intelligence.lovable.app/reports/deepfake-report-2026.pdf';

const DeepfakeReport = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<SubscriptionForm>({ name: '', email: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof SubscriptionForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = subscriptionSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SubscriptionForm, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof SubscriptionForm;
        if (!fieldErrors[field]) fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('report_subscriptions')
        .insert({
          email: result.data.email,
          organization: result.data.name,
          report_type: 'deepfake-2026'
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save subscription');
      }

      const { error: notificationError } = await supabase.functions.invoke('send-subscription-notification', {
        body: {
          type: 'report_subscription',
          email: result.data.email,
          organization: result.data.name,
          reportType: 'Global State of Deepfakes 2026',
          reportDownloadUrl: REPORT_DOWNLOAD_URL,
        },
      });

      if (notificationError) {
        throw new Error(notificationError.message || 'Failed to send report email');
      }

      setIsUnlocked(true);
      toast({
        title: 'Access Granted!',
        description: 'Your report is ready and the download link was sent to your email.',
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Error',
        description: 'There was a problem processing your request. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    window.open(REPORT_DOWNLOAD_URL, '_blank');
  };

  const stats = [
    { value: "8M+", label: "Deepfake files detected globally — a 16× increase from 2023", icon: TrendingUp },
    { value: "$10.5T", label: "Projected annual cybercrime cost driven by synthetic identity fraud", icon: AlertTriangle },
    { value: "21%", label: "Of companies have mature governance models for AI agents", icon: Landmark },
  ];

  const insights = [
    "How Africa's mobile-first economy is uniquely vulnerable to voice-cloning and real-time video deepfakes.",
    "Why Nigeria's 2027 elections face critical AI disinformation risk — and what can be done now.",
    "Strategic recommendations for enterprises, banks, and government agencies to build deepfake resilience.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <Shield className="w-4 h-4" />
                2026 Strategic Intelligence Report
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight">
                The Global State of Deepfakes in 2026
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Navigating the Synthetic Frontier in Africa and Nigeria — a definitive analysis by <span className="text-foreground font-medium">Vibe Intelligence</span>.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-2">
                <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> 14 Pages</span>
                <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Global + Africa Focus</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Free Download</span>
              </div>
            </div>

            {/* Right — Report Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
                <img
                  src="/reports/deepfake-report-cover.jpg"
                  alt="The Global State of Deepfakes in 2026 — Report Cover"
                  className="relative rounded-xl shadow-2xl w-full max-w-[380px] border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container py-10">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights + Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Key Insights */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  This report arms decision-makers with the intelligence needed to defend against
                  the fastest-growing cyber threat on the continent.
                </p>
              </div>

              <div className="space-y-5">
                {insights.map((insight, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card flex items-center gap-4">
                <Lock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Trusted by security leaders, policymakers, and enterprises</span> across
                  government, banking, and critical infrastructure sectors.
                </p>
              </div>
            </div>

            {/* Right — Email Capture Form */}
            <div className="lg:sticky lg:top-28">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  {!isUnlocked ? (
                    <>
                      <div className="text-center mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Get the Full Report</h3>
                        <p className="text-muted-foreground text-sm">
                          Enter your details below to unlock the free PDF download.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={errors.name ? 'border-destructive' : ''}
                          />
                          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@organization.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={errors.email ? 'border-destructive' : ''}
                          />
                          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                        <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                          {isSubmitting ? 'Processing…' : (
                            <>Get the Report <ArrowRight className="w-4 h-4 ml-1" /></>
                          )}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground pt-1">
                          By submitting, you agree to our{' '}
                          <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                          We respect your inbox — no spam, ever.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-6 space-y-5">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground">
                          Your report is ready. Click below to download.
                        </p>
                      </div>
                      <Button onClick={handleDownload} size="lg" className="w-full h-12 text-base">
                        <Download className="w-5 h-5 mr-2" /> Download Report (PDF)
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        Thank you for your interest in our research.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-primary/5">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Deepfake Protection?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vibe Intelligence provides enterprise-grade deepfake detection and AI security
            solutions for organizations across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/deepfake-detection">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeepfakeReport;
