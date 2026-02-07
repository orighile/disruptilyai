import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { generateDeepfakeReportPDF } from '../utils/deepfakeReportPdf';
import { supabase } from '@/integrations/supabase/client';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Building2, 
  Vote, 
  Landmark, 
  Lock,
  FileText,
  Users,
  Globe
} from 'lucide-react';

// Validation schema
const subscriptionSchema = z.object({
  email: z.string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  organization: z.string()
    .trim()
    .min(1, 'Organization is required')
    .max(200, 'Organization name must be less than 200 characters'),
  role: z.string()
    .trim()
    .max(100, 'Role must be less than 100 characters')
    .optional()
});

type SubscriptionForm = z.infer<typeof subscriptionSchema>;

const DeepfakeReport = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<SubscriptionForm>({
    email: '',
    organization: '',
    role: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SubscriptionForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = subscriptionSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SubscriptionForm, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof SubscriptionForm;
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save subscription to database
      const { error: dbError } = await supabase
        .from('report_subscriptions')
        .insert({
          email: result.data.email,
          organization: result.data.organization,
          role: result.data.role || null,
          report_type: 'deepfake-2026'
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save subscription');
      }

      // Send notification email (fire and forget - don't block PDF generation)
      supabase.functions.invoke('send-subscription-notification', {
        body: {
          email: result.data.email,
          organization: result.data.organization,
          role: result.data.role,
          reportType: 'Global State of Deepfake Threats 2026'
        }
      }).then(({ error }) => {
        if (error) {
          console.error('Notification error:', error);
        } else {
          console.log('Notification sent successfully');
        }
      });

      // Generate and open PDF in new tab
      generateDeepfakeReportPDF();
      
      toast({
        title: "Report Generated!",
        description: "The Deepfake Threats Report has been opened in a new tab.",
      });
      
      setFormData({ email: '', organization: '', role: '' });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem processing your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { value: "4,500%", label: "Increase in deepfake attacks since 2022", icon: TrendingUp },
    { value: "#3", label: "Nigeria's rank in Africa for deepfake fraud", icon: AlertTriangle },
    { value: "67%", label: "Nigerian banks with synthetic identity attempts", icon: Landmark },
    { value: "2027", label: "Elections identified as high-risk for AI disinformation", icon: Vote },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">2026 Threat Intelligence Report</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Global State of<br />
              <span className="text-primary">Deepfake Threats 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              By Vibe Intelligence
            </p>
            <p className="text-lg text-primary font-medium mb-8 max-w-2xl mx-auto">
              How Vibe Intelligence Protects Nigerian Enterprises from Synthetic Media Threats
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                15,000+ words
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global coverage
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Nigeria focus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Excerpt - Shortened */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Report Overview</h2>
            
            {/* Brief Executive Summary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  The global deepfake threat landscape has evolved from a niche technological curiosity into a 
                  sophisticated weapon of mass deception. As we enter 2026, artificial intelligence-generated 
                  synthetic media poses unprecedented risks to governments, financial institutions, democratic 
                  processes, and individual citizens worldwide.
                </p>
                <p>
                  This comprehensive report by Vibe Intelligence presents the most detailed analysis of deepfake 
                  threats ever assembled for the African market, with particular emphasis on Nigeria—covering 
                  Government, Defense & Intelligence, Electoral Integrity, and Financial Services/Banking KYC. 
                  Our findings reveal a <strong>4,500% increase in deepfake attacks globally since 2022</strong>, 
                  with Nigeria facing unique challenges that demand immediate attention from all sectors.
                </p>
              </CardContent>
            </Card>

            {/* What's Included */}
            <div className="text-center py-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                The full 15,000-word report includes:
              </p>
              <ul className="text-sm text-muted-foreground mb-8 space-y-2">
                <li>• Detailed global threat landscape with regional analysis</li>
                <li>• 12 in-depth case studies from Nigeria and West Africa</li>
                <li>• Nigeria Focus: Government, Defense, Elections, Banking KYC</li>
                <li>• Technical detection methodology comparison</li>
                <li>• Implementation roadmaps for different organization sizes</li>
                <li>• 2027 threat predictions and preparation guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Access the Full Report</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Enter your details to download the complete report. The PDF will open in your browser immediately.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Your company or agency"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={errors.organization ? 'border-destructive' : ''}
                    />
                    {errors.organization && (
                      <p className="text-sm text-destructive">{errors.organization}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      type="text"
                      placeholder="e.g., CISO, Compliance Officer, Risk Manager"
                      value={formData.role || ''}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className={errors.role ? 'border-destructive' : ''}
                    />
                    {errors.role && (
                      <p className="text-sm text-destructive">{errors.role}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Generating Report...' : 'Get Full Report (PDF)'}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By subscribing, you agree to our{' '}
                    <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Deepfake Protection?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vibe Intelligence provides enterprise-grade deepfake detection and AI security 
            solutions for Nigerian organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/deepfake-detection">Learn About Our Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeepfakeReport;
