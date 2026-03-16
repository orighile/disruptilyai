import React from 'react';
import { Button } from './ui';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="glass-card text-center">
        <div className="inline-flex mb-4 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Proof Pilot Available
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Business with AI?
        </h3>
        <p className="text-muted-foreground mb-6">
          Start with a free Deepfake Vulnerability Scan, then scale into detection, compliance, and automation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button as={Link} to="/consultation" size="lg">
            Start Free Vulnerability Scan
          </Button>
          <Button as={Link} to="/consultation" variant="outline" size="lg">
            Book Free Consultation
          </Button>
          <Button as={Link} to="/services" variant="outline" size="lg">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
