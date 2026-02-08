import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-900/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/vibe-intelligence-logo.png" 
              alt="Vibe Intelligence Logo"
              className="h-32 mb-4"
            />
            <h3 className="text-lg font-bold mb-2">VIBE INTELLIGENCE</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nigeria's leading AI Business Consulting & Automation agency delivering secure, scalable, and innovative technology solutions.
            </p>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          {/* Services */}
          <nav className="flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground mb-1">Services</p>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition">
              AI Consulting
            </Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition">
              Business Automation
            </Link>
            <Link to="/deepfake-detection" className="text-muted-foreground hover:text-foreground transition">
              Deepfake Detection
            </Link>
            <Link to="/consultation" className="text-muted-foreground hover:text-foreground transition">
              GRC Compliance
            </Link>
          </nav>

          {/* Company */}
          <nav className="flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground mb-1">Company</p>
            <Link to="/success-stories" className="text-muted-foreground hover:text-foreground transition">
              Success Stories
            </Link>
            <Link to="/resources" className="text-muted-foreground hover:text-foreground transition">
              Resources
            </Link>
            <Link to="/consultation" className="text-muted-foreground hover:text-foreground transition">
              Consultation
            </Link>
          </nav>

          {/* Get In Touch */}
          <div className="text-sm">
            <p className="font-semibold text-foreground mb-3">Get In Touch</p>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-accent-400 mt-0.5">📍</span>
                <span>40a Folakemi Avenue, Eleko,<br />Ibeju-Lekki, Lagos, Nigeria</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-400">✉️</span>
                <a href="mailto:sales@disruptily.com" className="hover:text-foreground transition">
                  sales@disruptily.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vibe Intelligence. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;