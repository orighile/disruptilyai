import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-900/40">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-bold text-gradient mb-2">
            TRIADE TECHNOLOGY NG
          </div>
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
          © {new Date().getFullYear()} Triade Technology NG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;