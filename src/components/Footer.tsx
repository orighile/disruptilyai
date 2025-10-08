import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-900/40">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div>
          <img 
            src="/lovable-uploads/disruptily-logo.png" 
            alt="Disruptily AI Logo" 
            className="h-24 mb-4"
          />
          <p className="text-sm text-muted-foreground mb-4">
            Nigeria's leading AI Business Consulting & Automation agency.
          </p>
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground">Contact Us</p>
            <p>40a Folakemi Avenue, Eleko,<br />Ibeju-Lekki, Lagos</p>
            <p>
              <a href="mailto:sales@disruptily.com" className="hover:text-accent-400 transition">
                sales@disruptily.com
              </a>
            </p>
          </div>
        </div>
        
        <nav className="grid gap-2 text-sm">
          <p className="font-semibold text-foreground mb-2">Navigation</p>
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

        <nav className="grid gap-2 text-sm">
          <p className="font-semibold text-foreground mb-2">Legal</p>
          <Link to="/privacy" className="hover:text-accent-400 transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-accent-400 transition">
            Terms of Use
          </Link>
        </nav>

        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Company</p>
          <p>© {new Date().getFullYear()} Disruptily AI.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;