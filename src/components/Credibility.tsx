import React from 'react';
import { Card } from './ui';
import { ShieldCheck, Globe2, Shield, Bot } from 'lucide-react';

const items = [
  { 
    icon: ShieldCheck, 
    title: 'GRC Compliance', 
    desc: 'GDPR, NIST 800, ISO 27001 plus NITDA, CBN local standards' 
  },
  { 
    icon: Shield, 
    title: 'Deepfake Detection', 
    desc: 'Enterprise-grade synthetic media threat protection' 
  },
  { 
    icon: Bot, 
    title: 'AI Consulting', 
    desc: 'Strategic AI transformation and implementation' 
  },
  { 
    icon: Globe2, 
    title: 'Business Transformation', 
    desc: 'End-to-end digital modernization with AI' 
  },
];

const Credibility = () => {
  return (
    <section className="container py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Built for Nigerian Business Reality</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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