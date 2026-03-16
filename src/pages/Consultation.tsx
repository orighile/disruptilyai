import React, { useState } from 'react';
import { z } from 'zod';
import { Card, Button } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Validation schema
const consultationSchema = z.object({
  name: z.string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z.string()
    .trim()
    .max(20, 'Phone must be less than 20 characters')
    .optional()
    .transform(val => val || ''),
  type: z.enum(['free', 'audit', 'quote', 'training']),
  city: z.string()
    .trim()
    .max(50, 'City must be less than 50 characters')
    .optional()
    .transform(val => val || ''),
  message: z.string()
    .trim()
    .max(2000, 'Message must be less than 2000 characters')
    .optional()
    .transform(val => val || '')
});

type ConsultationForm = z.infer<typeof consultationSchema>;

const Consultation = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ConsultationForm>({ 
    name: '', 
    email: '', 
    phone: '', 
    type: 'free', 
    city: '', 
    message: '' 
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationForm, string>>>({});
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ConsultationForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const result = consultationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ConsultationForm, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ConsultationForm;
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-subscription-notification', {
        body: {
          type: 'consultation_request',
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          consultationType: result.data.type,
          city: result.data.city,
          message: result.data.message,
          attachmentName: fileName || null,
        },
      });

      if (error) {
        throw new Error(error.message || 'Failed to send consultation emails');
      }

      toast({
        title: 'Request Submitted!',
        description: "We've emailed your confirmation and our team has been notified.",
      });

      setForm({ name: '', email: '', phone: '', type: 'free', city: '', message: '' });
      setFileName('');
    } catch (error) {
      console.error('Consultation submission failed:', error);
      toast({
        title: 'Submission Failed',
        description: 'We could not send your request right now. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleDownloadTemplate() {
    // Create a simple template content
    const templateContent = `PRE-CONSULTATION QUESTIONNAIRE
================================

Company Name: ____________________
Contact Person: ____________________
Email: ____________________
Phone: ____________________

1. Which service are you most interested in?
   [ ] Deepfake Detection
   [ ] AI Governance, Risk & Compliance (GRC)
   [ ] AI Marketing Automation

2. Top 3 business outcomes you want from AI:
   a) ____________________
   b) ____________________
   c) ____________________

3. Data sources available (check all that apply):
   [ ] CRM System
   [ ] ERP System
   [ ] Website Analytics
   [ ] Spreadsheets/Excel
   [ ] Other: ____________________

4. Compliance requirements (check all that apply):
   [ ] SOC 2
   [ ] GDPR
   [ ] ISO 27001
   [ ] Other: ____________________

5. Timeline: ____________________

6. Budget range: ____________________

7. Additional notes:
____________________
____________________
____________________
`;

    const blob = new Blob([templateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vibe-intelligence-consultation-template.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Book a Consultation</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Schedule a virtual session or meet us in person at our Austin, TX or Lagos offices. Let's explore how AI can transform your business.
        </p>

        <div className="max-w-xl mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="grid gap-1 text-sm">
                <span>Full Name *</span>
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  className={`bg-input rounded-xl px-3 py-2 border ${errors.name ? 'border-destructive' : 'border-border'}`} 
                />
                {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span>Email *</span>
                  <input 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    className={`bg-input rounded-xl px-3 py-2 border ${errors.email ? 'border-destructive' : 'border-border'}`} 
                  />
                  {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                </label>
                <label className="grid gap-1 text-sm">
                  <span>Phone</span>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    className={`bg-input rounded-xl px-3 py-2 border ${errors.phone ? 'border-destructive' : 'border-border'}`} 
                  />
                  {errors.phone && <span className="text-xs text-destructive">{errors.phone}</span>}
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span>Consultation Type</span>
                  <select 
                    name="type" 
                    value={form.type} 
                    onChange={handleChange} 
                    className="bg-input rounded-xl px-3 py-2 border border-border"
                  >
                    <option value="free">Free 30-min AI Strategy Session</option>
                    <option value="audit">Deepfake Detection Assessment</option>
                    <option value="quote">AI GRC Program Consultation</option>
                    <option value="training">Marketing Automation Consultation</option>
                  </select>
                </label>
                <label className="grid gap-1 text-sm">
                  <span>City</span>
                  <select 
                    name="city" 
                    value={form.city} 
                    onChange={handleChange} 
                    className="bg-input rounded-xl px-3 py-2 border border-border"
                  >
                    <option value="">Select...</option>
                    <option value="Virtual">Virtual</option>
                    <option value="Austin">Austin, TX</option>
                    <option value="Lagos">Lagos</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-1 text-sm">
                <span>Project Brief (optional)</span>
                <input 
                  type="file" 
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} 
                  className="bg-input rounded-xl px-3 py-2 border border-border" 
                />
                {fileName && <span className="text-xs text-muted-foreground">Attached: {fileName}</span>}
              </label>
              <label className="grid gap-1 text-sm">
                <span>Message</span>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={4} 
                  className={`bg-input rounded-xl px-3 py-2 border ${errors.message ? 'border-destructive' : 'border-border'}`} 
                />
                {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
              </label>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </Card>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Consultation;
