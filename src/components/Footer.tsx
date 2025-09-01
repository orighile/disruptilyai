import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-900/40">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <img 
            src="/lovable-uploads/ced30335-8fb0-4a64-9e12-9ff621376b09.png" 
            alt="VIBERZ Agentic Consulting Logo" 
            className="h-12 mb-2"
          />
          <p className="text-sm text-muted-foreground">
            Nigeria's leading AI Business Consulting & Automation agency.
          </p>
        </div>
        <nav className="grid gap-2 text-sm">
          <Link to="/services" className="hover:text-accent-400 transition">
            Services
          </Link>
          <Link to="/success-stories" className="hover:text-accent-400 transition">
            Success Stories
          </Link>
          <Link to="/resources" className="hover:text-accent-400 transition">
            Resources
          </Link>
          <Link to="/consultation" className="hover:text-accent-400 transition">
            Consultation
          </Link>
        </nav>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} VIBERZ Agentic Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;