import React from 'react';
import { Card } from '../components/ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import ServicesCards from '../components/ServicesCards';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Services</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">
          AI security, governance, and marketing automation solutions for enterprises worldwide.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ['Discover', 'Stakeholder interviews, threat assessment, and goal alignment.'],
              ['Design', 'Solution architecture, compliance mapping, and success metrics.'],
              ['Deliver', 'Implementation, testing, and team enablement.'],
              ['Scale', 'Monitoring, optimization, and continuous improvement.']
            ].map(([title, desc], i) => (
              <Card key={i}>
                <div className="font-semibold mb-2">{title}</div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ServicesCards />

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
