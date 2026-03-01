import React from 'react';
import { Card } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

const stories = [
  {
    title: 'Fintech SME — WhatsApp Sales Agent',
    result: '45% conversion increase; 60% faster response',
    details: 'Deployed multilingual agent integrated with payment and CRM; auto-nurture sequences reduced churn.'
  },
  {
    title: 'Retail Chain — Demand Forecasting',
    result: '12% inventory cost reduction; 18% stockout decrease',
    details: 'Time-series forecasting + promo calendar features, surfaced to buyers in a weekly planning dashboard.'
  },
  {
    title: 'Bank — Complaints Triage',
    result: '22% faster resolution; CSAT +9pts',
    details: 'NLP triage + agent assistance for call center; PII redaction and secure audit trail for compliance.'
  }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Selected outcomes from programs across startups, SMEs, and enterprises.
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
                "Vibe Intelligence transformed our customer service with AI agents that understand our Nigerian customers perfectly."
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                — CEO, Leading Fintech Company
              </footer>
            </Card>
            <Card>
              <blockquote className="text-lg mb-4">
                "The AI forecasting system saved us millions in inventory costs within the first quarter."
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                — Operations Director, Retail Chain
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