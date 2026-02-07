import React from 'react';
import { Card, Button } from './ui';
import { Building2, Rocket, FlaskConical, Megaphone, Bot, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    icon: ShieldCheck,
    title: 'Deepfake Detection',
    desc: 'Protect your organization from AI-generated synthetic media threats with enterprise-grade detection powered by Reality Defender & Sensity.',
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
    icon: Building2,
    title: 'Enterprise AI Transformation',
    desc: 'Modernize your established business with AI solutions that integrate seamlessly with operations and drive growth.',
    features: [
      'Legacy system AI integration',
      'Process optimization & automation',
      'Decision support systems',
      'Change management & training'
    ],
    result: 'Avg. 40% efficiency increase',
    cta: 'Transform Your Enterprise'
  },
  {
    icon: Rocket,
    title: 'Startup AI Acceleration',
    desc: 'Give your startup the AI advantage from day one with scalable systems that grow with you.',
    features: [
      'Rapid AI prototypes',
      'Scalable architecture',
      'Cost-effective implementation',
      'Market validation via AI insights'
    ],
    result: '3x faster market entry',
    cta: 'Accelerate Your Startup'
  },
  {
    icon: FlaskConical,
    title: 'AI Proof of Concept',
    desc: 'Validate AI ideas with minimal risk via comprehensive PoCs that prove feasibility and ROI.',
    features: [
      'Rapid prototyping',
      'ROI & business case',
      'Feasibility assessment',
      'Risk mitigation'
    ],
    result: '90% PoC → production',
    cta: 'Validate Your AI Idea'
  },
  {
    icon: Megaphone,
    title: 'AI Marketing Automation',
    desc: 'Deploy AI-powered campaigns that understand Nigerian customer behavior and scale personalization.',
    features: [
      'Multi-channel orchestration',
      'Behavior analysis',
      'Content generation',
      'Performance optimization'
    ],
    result: '250% increase in qualified leads',
    cta: 'Automate Your Marketing'
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    desc: 'Build intelligent agents for support, sales, and ops with Nigerian cultural awareness.',
    features: [
      'Conversational AI',
      'English & Pidgin',
      'Systems integration',
      'Continuous learning'
    ],
    result: '24/7 ops, 95% CSAT',
    cta: 'Deploy AI Agents'
  },
  {
    icon: ShieldCheck,
    title: 'AI Governance, Risk & Compliance',
    desc: 'Ensure responsible AI implementation aligned with global and Nigerian regulatory standards.',
    features: [
      'GDPR & data privacy compliance',
      'NIST 800 & ISO 27001 frameworks',
      'CBN & NITDA compliance',
      'Risk assessment & mitigation'
    ],
    result: '100% regulatory compliance',
    cta: 'Ensure AI Compliance',
    link: '/consultation'
  },
];

const ServicesCards = () => {
  return (
    <section className="container py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <Button as={Link} to={(card as any).link || "/consultation"} size="sm">
                {card.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="font-semibold mb-2">AI Outsourcing</div>
          <p className="text-sm text-muted-foreground">
            End-to-end AI operations management so your team can focus on growth.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ServicesCards;