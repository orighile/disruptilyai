import React from 'react';
import { Card } from './ui';
import { ShieldCheck, Shield, ScanSearch } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'African & Nigerian Compliance',
    desc: 'NDPR, GDPR, NIST 800, and ISO 27001-aligned governance for cross-border AI operations.',
  },
  {
    icon: Shield,
    title: 'KYC/AML & Bad-Actor Defense',
    desc: 'Controls for synthetic identity fraud, impersonation attempts, and high-risk bad-actor behavior across customer journeys.',
  },
  {
    icon: ScanSearch,
    title: 'Synthetic Media & Brand Safety',
    desc: 'Trust infrastructure that protects reputation, verifies digital authenticity, and reduces deepfake-driven brand risk.',
  },
];

const Credibility = () => {
  return (
    <section className="container py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
        We build practical trust infrastructure for organizations operating in Africa and globally—combining compliance, fraud controls, and synthetic media resilience in one operating model.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <Card key={i} className="h-full">
            <div className="flex items-start gap-3">
              <item.icon className="w-6 h-6 text-accent-600 flex-shrink-0" />
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Credibility;