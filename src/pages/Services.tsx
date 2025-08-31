import React from 'react';
import { Card } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const tiers = [
  { 
    name: 'Startup', 
    price: '₦350k - ₦1.2m', 
    features: [
      'AI roadmap (4 weeks)',
      'MVP automations',
      'Basic analytics',
      '1 agent use-case'
    ] 
  },
  { 
    name: 'SME', 
    price: '₦1.5m - ₦4.5m', 
    features: [
      'AI roadmap (6 weeks)',
      'Multi-channel automation',
      'Dashboards & reporting',
      '2-3 agent use-cases'
    ] 
  },
  { 
    name: 'Enterprise', 
    price: 'Custom', 
    features: [
      'Full transformation program',
      'Legacy integration',
      'Change management',
      'Security & compliance'
    ] 
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Services</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Comprehensive AI strategy, build, and scale services tailored to Nigerian business realities.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {tiers.map((tier, i) => (
            <Card key={i} className="flex flex-col">
              <div className="text-xl font-bold mb-2">{tier.name}</div>
              <div className="text-brand-400 mb-4">{tier.price}</div>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a 
                href="/consultation" 
                className="mt-auto text-sm text-accent-500 hover:text-accent-400 transition"
              >
                Request proposal →
              </a>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ['Discover', 'Stakeholder interviews, data audit, and KPI alignment.'],
              ['Design', 'AI use-cases, architecture, and success metrics.'],
              ['Deliver', 'Implementation, testing, and enablement.'],
              ['Scale', 'Monitoring, optimization, and continuous training.']
            ].map(([title, desc], i) => (
              <Card key={i}>
                <div className="font-semibold mb-2">{title}</div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-2 pr-4">Feature</th>
                  <th className="py-2 pr-4">Startup</th>
                  <th className="py-2 pr-4">SME</th>
                  <th className="py-2 pr-4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ['AI Roadmap','✓','✓','✓'],
                  ['Marketing Automation','•','✓','✓'],
                  ['Custom Agents','•','✓','✓'],
                  ['Legacy Integration','—','—','✓'],
                  ['Training & Enablement','•','✓','✓'],
                  ['Governance, Risk & Compliance','—','•','✓'],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 pr-4">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;