import React from 'react';
import { Card, Button } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck, Scale, Lock, ClipboardCheck, Globe } from 'lucide-react';

const frameworks = [
  { icon: FileCheck, title: 'NIST AI RMF', desc: 'Full alignment with the NIST AI Risk Management Framework for systematic identification and mitigation of AI risks.' },
  { icon: Scale, title: 'ISO 42001', desc: 'Implementation of the international standard for AI management systems, ensuring responsible AI development and deployment.' },
  { icon: Lock, title: 'GDPR & Data Privacy', desc: 'Comprehensive data privacy compliance for AI systems processing personal data across jurisdictions.' },
  { icon: ClipboardCheck, title: 'SOC 2 for AI', desc: 'Controls and audit readiness for AI systems handling sensitive data, aligned with SOC 2 trust principles.' },
  { icon: Globe, title: 'EU AI Act', desc: 'Readiness assessment and compliance planning for the European Union\'s AI regulatory framework.' },
  { icon: ShieldCheck, title: 'ISO 27001', desc: 'Information security management integration for AI systems, ensuring data protection and operational integrity.' },
];

const services = [
  {
    title: 'AI Risk Assessment',
    desc: 'Identify, evaluate, and prioritize risks across your AI portfolio with structured assessments aligned to global standards.',
    items: ['Model risk profiling', 'Bias & fairness audits', 'Data lineage review', 'Third-party AI risk evaluation'],
  },
  {
    title: 'Policy & Governance Design',
    desc: 'Develop comprehensive AI governance frameworks, policies, and procedures tailored to your organization.',
    items: ['AI ethics policy development', 'Responsible AI guidelines', 'Model lifecycle governance', 'Board-level AI oversight structures'],
  },
  {
    title: 'Compliance Implementation',
    desc: 'Operationalize compliance requirements with practical controls, monitoring, and reporting mechanisms.',
    items: ['Control mapping & implementation', 'Automated compliance monitoring', 'Audit trail & documentation', 'Regulatory reporting dashboards'],
  },
  {
    title: 'Continuous Monitoring',
    desc: 'Ongoing oversight of AI systems to ensure sustained compliance and early detection of emerging risks.',
    items: ['Real-time drift detection', 'Performance degradation alerts', 'Regulatory change tracking', 'Quarterly compliance reviews'],
  },
];

const AIGrc = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-accent-400 mb-4">
            AI Governance, Risk & Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Govern AI with <span className="text-gradient">Confidence</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Navigate the complex landscape of AI regulation with enterprise-grade governance frameworks. We help organizations implement responsible AI practices aligned with NIST, ISO, GDPR, and emerging global standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button as={Link} to="/consultation" size="lg">
              Schedule GRC Assessment
            </Button>
            <Button as={Link} to="/services" variant="ghost" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Frameworks We Support</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Our team brings deep expertise across the major regulatory and standards frameworks governing AI systems worldwide.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((fw, i) => (
            <Card key={i} className="flex items-start gap-4">
              <fw.icon className="w-8 h-8 text-accent-500 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">{fw.title}</div>
                <p className="text-sm text-muted-foreground">{fw.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Deliver</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          End-to-end AI governance services from initial risk assessment through ongoing compliance monitoring.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc, i) => (
            <Card key={i}>
              <div className="font-semibold text-lg mb-2">{svc.title}</div>
              <p className="text-sm text-muted-foreground mb-4">{svc.desc}</p>
              <ul className="text-sm list-disc list-inside text-muted-foreground space-y-1">
                {svc.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Report CTA */}
      <section className="container py-12">
        <Card className="p-8 flex flex-col md:flex-row items-center gap-6 bg-primary/10 border-accent-500/20">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">AI Threat Intelligence Report</h3>
            <p className="text-sm text-muted-foreground">Understand the deepfake landscape shaping AI governance — download our 2026 research report.</p>
          </div>
          <Button as={Link} to="/deepfake-report">
            Download Report
          </Button>
        </Card>
      </section>

      <CTASection />
      <Footer />
};

export default AIGrc;
