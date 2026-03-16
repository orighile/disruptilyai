import React from 'react';
import { Card, Button } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { Megaphone, BarChart3, Users, Zap, Mail, Target } from 'lucide-react';

const capabilities = [
  { icon: Target, title: 'Audience Intelligence', desc: 'AI-driven segmentation and behavioral analysis to identify and engage your highest-value prospects.' },
  { icon: Mail, title: 'Multi-Channel Orchestration', desc: 'Coordinate campaigns across email, social, paid media, and web with unified AI-powered workflows.' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'Forecast campaign performance, customer lifetime value, and churn risk with machine learning models.' },
  { icon: Users, title: 'Personalization at Scale', desc: 'Deliver hyper-personalized content and offers to millions of contacts without manual intervention.' },
  { icon: Zap, title: 'Content Generation', desc: 'AI-assisted creation of ad copy, email sequences, landing pages, and social posts aligned to your brand.' },
  { icon: Megaphone, title: 'Performance Optimization', desc: 'Continuous A/B testing, bid optimization, and budget allocation powered by reinforcement learning.' },
];

const process = [
  { step: '01', title: 'Audit & Strategy', desc: 'We analyze your current marketing stack, data sources, and KPIs to design an AI-powered growth strategy.' },
  { step: '02', title: 'Data Integration', desc: 'Connect your CRM, analytics, and ad platforms into a unified data layer for AI-driven insights.' },
  { step: '03', title: 'Campaign Automation', desc: 'Deploy intelligent workflows that trigger, personalize, and optimize campaigns in real time.' },
  { step: '04', title: 'Scale & Optimize', desc: 'Continuously improve performance with AI learning loops, expanding what works and cutting what doesn\'t.' },
];

const AIMarketing = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-accent-400 mb-4">
            AI Marketing Automation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing That <span className="text-gradient">Thinks</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Deploy AI-powered campaigns that understand customer behavior, predict intent, and scale personalization across every channel. Turn data into pipeline with intelligent automation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button as={Link} to="/consultation" size="lg">
              Get a Marketing Assessment
            </Button>
            <Button as={Link} to="/services" variant="ghost" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Core Capabilities</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Enterprise marketing automation powered by the latest advances in machine learning and generative AI.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Card key={i} className="flex items-start gap-4">
              <cap.icon className="w-8 h-8 text-accent-500 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">{cap.title}</div>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Process</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          A proven methodology to take you from manual marketing to AI-driven growth.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Card key={i}>
              <div className="text-3xl font-bold text-accent-500 mb-2">{step.step}</div>
              <div className="font-semibold mb-2">{step.title}</div>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Report CTA */}
      <section className="container py-12">
        <Card className="p-8 flex flex-col md:flex-row items-center gap-6 bg-primary/10 border-accent-500/20">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">AI Threat Intelligence Report</h3>
            <p className="text-sm text-muted-foreground">Stay ahead of synthetic media risks — download our 2026 Deepfake Report to inform your marketing security strategy.</p>
          </div>
          <Button as={Link} to="/deepfake-report">
            Download Report
          </Button>
        </Card>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default AIMarketing;
