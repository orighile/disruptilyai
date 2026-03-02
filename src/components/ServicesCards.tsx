import React from 'react';
import { Card, Button } from './ui';
import { ShieldCheck, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    icon: ShieldCheck,
    title: 'Deepfake Detection',
    desc: 'Protect your organization from AI-generated synthetic media threats with enterprise-grade detection.',
    features: [
      'Real-time deepfake detection',
      'Video & image authentication',
      'Voice clone detection',
      'API integration & monitoring'
    ],
    result: '99.2% detection accuracy',
    cta: 'Protect Your Organization',
    link: '/deepfake-detection'
  },
  {
    icon: ShieldCheck,
    title: 'AI Governance, Risk & Compliance',
    desc: 'Ensure responsible AI implementation aligned with global regulatory standards.',
    features: [
      'GDPR & data privacy compliance',
      'NIST 800 & ISO 27001 frameworks',
      'Risk assessment & mitigation',
      'Policy development & auditing'
    ],
    result: '100% regulatory compliance',
    cta: 'Ensure AI Compliance',
    link: '/consultation'
  },
  {
    icon: Megaphone,
    title: 'AI Marketing Automation',
    desc: 'Deploy AI-powered campaigns that understand customer behavior and scale personalization.',
    features: [
      'Multi-channel orchestration',
      'Behavior analysis',
      'Content generation',
      'Performance optimization'
    ],
    result: '250% increase in qualified leads',
    cta: 'Automate Your Marketing',
    link: '/consultation'
  },
];

const ServicesCards = () => {
  return (
    <section className="container py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <Card key={i} className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <card.icon className="w-6 h-6 text-accent-600 flex-shrink-0" />
              <div className="font-semibold">{card.title}</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
            <ul className="text-sm list-disc list-inside text-muted-foreground space-y-1 mb-4">
              {card.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="text-xs text-muted-foreground mb-4">{card.result}</div>
            <div className="mt-auto">
              <Button as={Link} to={card.link} size="sm">
                {card.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
