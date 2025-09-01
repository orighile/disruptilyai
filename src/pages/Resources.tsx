import React, { useState } from 'react';
import { Card } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ROI() {
  const [revenue, setRevenue] = useState(5000000);
  const [leadGain, setLeadGain] = useState(25); // %
  const [cost, setCost] = useState(2000000);

  const added = revenue * (leadGain/100);
  const roi = cost ? ((added - cost) / cost) * 100 : 0;

  return (
    <Card>
      <div className="font-semibold mb-4">AI ROI Calculator (Nigeria)</div>
      <div className="grid gap-3 sm:grid-cols-3 mb-4">
        <label className="grid gap-1 text-sm">
          <span>Monthly Revenue (₦)</span>
          <input 
            type="number" 
            value={revenue} 
            onChange={e => setRevenue(+e.target.value)} 
            className="bg-input rounded-xl px-3 py-2 border border-border" 
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Expected Lead Gain (%)</span>
          <input 
            type="number" 
            value={leadGain} 
            onChange={e => setLeadGain(+e.target.value)} 
            className="bg-input rounded-xl px-3 py-2 border border-border" 
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Implementation Cost (₦)</span>
          <input 
            type="number" 
            value={cost} 
            onChange={e => setCost(+e.target.value)} 
            className="bg-input rounded-xl px-3 py-2 border border-border" 
          />
        </label>
      </div>
      <div className="text-sm text-muted-foreground mb-2">
        Estimated Added Revenue: <span className="text-foreground font-semibold">₦{added.toLocaleString()}</span>
      </div>
      <div className="text-sm text-muted-foreground">
        Estimated ROI: <span className="text-foreground font-semibold">{roi.toFixed(1)}%</span>
      </div>
    </Card>
  );
}

function TimelineEstimator() {
  const [complexity, setComplexity] = useState(2);
  const [integrations, setIntegrations] = useState(2);
  const weeks = 2 + complexity * 2 + integrations;

  return (
    <Card>
      <div className="font-semibold mb-4">Implementation Timeline Estimator</div>
      <div className="grid gap-3 sm:grid-cols-2 mb-4">
        <label className="grid gap-1 text-sm">
          <span>Solution Complexity</span>
          <input 
            type="range" 
            min="1" 
            max="4" 
            value={complexity} 
            onChange={e => setComplexity(+e.target.value)} 
            className="w-full"
          />
          <span className="text-xs text-muted-foreground">Level {complexity}</span>
        </label>
        <label className="grid gap-1 text-sm">
          <span># of Integrations</span>
          <input 
            type="range" 
            min="0" 
            max="6" 
            value={integrations} 
            onChange={e => setIntegrations(+e.target.value)} 
            className="w-full"
          />
          <span className="text-xs text-muted-foreground">{integrations} systems</span>
        </label>
      </div>
      <div className="text-sm text-muted-foreground">
        Estimated Timeline: <span className="text-foreground font-semibold">{weeks} weeks</span>
      </div>
    </Card>
  );
}

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Tools, templates, and insights for Nigerian businesses investing in AI.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ROI />
          <TimelineEstimator />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['AI User Guide', 'Complete guide for Nigerian businesses to adopt and scale AI solutions.'],
            ['Preconsultation Templates', 'Templates to help prepare for your AI consultation session.'],
            ['State of AI in Nigeria (Annual Report)', 'Download the latest insights and adoption trends in Nigeria.'],
            ['Automation Opportunity Assessment', 'Self-service audit to locate automation quick wins.'],
            ['Industry Guides', 'Banking, E-commerce, Manufacturing, Healthcare.']
          ].map(([title, desc], i) => (
            <Card key={i}>
              <div className="font-semibold mb-2">{title}</div>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <a className="text-sm text-accent-500 hover:text-accent-400 transition" href="#">
                Download →
              </a>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;