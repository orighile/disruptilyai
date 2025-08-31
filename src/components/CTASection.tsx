import React from 'react';
import { Button, GhostButton } from './ui';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="glass-card text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Business with AI?
        </h3>
        <p className="text-muted-foreground mb-6">
          Join the increasing Nigerian businesses already leveraging AI for growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button as={Link} to="/consultation" size="lg">
            Book Free Consultation
          </Button>
          <GhostButton as={Link} to="/resources" size="lg">
            Download AI Guide
          </GhostButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;