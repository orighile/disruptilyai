import React from 'react';
import { Card } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

const stories = [
  {
    title: 'Fintech — Deepfake Fraud Prevention',
    result: '99.2% detection rate; $2M fraud prevented',
    details: 'Deployed real-time deepfake detection across KYC processes, preventing synthetic identity fraud at scale.'
  },
  {
    title: 'Retail Chain — AI Marketing Automation',
    result: '250% increase in qualified leads',
    details: 'Multi-channel AI marketing automation with behavioral targeting and personalized content generation.'
  },
  {
    title: 'Financial Services — GRC Compliance',
    result: '100% audit compliance; 60% faster reviews',
    details: 'Comprehensive AI governance framework aligned with GDPR, NIST 800, and ISO 27001 standards.'
  }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Selected outcomes from enterprise engagements across industries.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story, i) => (
            <Card key={i}>
              <div className="text-lg font-semibold mb-2">{story.title}</div>
              <div className="text-brand-400 mb-3">{story.result}</div>
              <p className="text-sm text-muted-foreground">{story.details}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Client Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <blockquote className="text-lg mb-4">
                "Vibe Intelligence's deepfake detection saved us from a multi-million dollar fraud attempt. Their technology is world-class."
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                — CISO, Global Financial Institution
              </footer>
            </Card>
            <Card>
              <blockquote className="text-lg mb-4">
                "Their AI marketing platform tripled our qualified leads within the first quarter. Incredible ROI."
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                — CMO, Enterprise Retail Company
              </footer>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessStories;
