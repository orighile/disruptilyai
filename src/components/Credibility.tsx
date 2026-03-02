import React from 'react';
import { Card } from './ui';
import { ShieldCheck, Shield, Megaphone } from 'lucide-react';

const items = [
  { 
    icon: Shield, 
    title: 'Deepfake Detection', 
    desc: 'Enterprise-grade synthetic media threat protection with 99.2% accuracy' 
  },
  { 
    icon: ShieldCheck, 
    title: 'AI Governance, Risk & Compliance', 
    desc: 'GDPR, NIST 800, ISO 27001 and global regulatory frameworks' 
  },
  { 
    icon: Megaphone, 
    title: 'AI Marketing Automation', 
    desc: 'Intelligent campaigns that scale personalization and drive ROI' 
  },
];

const Credibility = () => {
  return (
    <section className="container py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">What We Do</h2>
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