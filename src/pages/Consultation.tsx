import React, { useState } from 'react';
import { Card, Button } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Consultation = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    type: 'free', 
    city: '', 
    message: '' 
  });
  const [fileName, setFileName] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Form ready for integration. Collected data: ' + JSON.stringify(form, null, 2));
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Consultation</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Book a session — virtual or in-person (Lagos, Abuja, Port Harcourt).
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="grid gap-1 text-sm">
                <span>Full Name</span>
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  required 
                  className="bg-input rounded-xl px-3 py-2 border border-border" 
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span>Email</span>
                  <input 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                    className="bg-input rounded-xl px-3 py-2 border border-border" 
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  <span>Phone</span>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    className="bg-input rounded-xl px-3 py-2 border border-border" 
                  />
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
                    <option value="free">Free 30-minute AI Strategy Session</option>
                    <option value="audit">Comprehensive AI Audit (Paid)</option>
                    <option value="quote">Custom AI Development Quote</option>
                    <option value="training">Training Program Consultation</option>
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
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                    <option value="Virtual">Virtual</option>
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
                  className="bg-input rounded-xl px-3 py-2 border border-border" 
                />
              </label>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Card>

          <Card>
            <div className="font-semibold mb-4">Pre-Consultation Questionnaire</div>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-2 mb-4">
              <li>Top 3 business outcomes you want from AI?</li>
              <li>Data sources available (CRM, ERP, website, spreadsheets)?</li>
              <li>Channels to automate (WhatsApp, email, web, POS)?</li>
              <li>Compliance constraints (NITDA/CBN)?</li>
              <li>Timeline and budget window?</li>
            </ul>
            <a className="text-sm text-accent-500 hover:text-accent-400 transition" href="#">
              Download template →
            </a>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Consultation;