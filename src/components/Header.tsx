import React from 'react';
import { Link } from 'react-router-dom';
import { Button, GhostButton, Nav } from './ui';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/vibe-logo.png" 
                alt="Vibe Intelligence Logo"
                className="h-28 w-auto"
              />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground -mt-2">Agentic AI</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/services" className="text-sm hover:text-accent-400 transition">
              Services
            </Link>
            <Link to="/deepfake-detection" className="text-sm hover:text-accent-400 transition">
              Deepfake Detection
            </Link>
            <Link to="/ai-grc" className="text-sm hover:text-accent-400 transition">
              AI GRC
            </Link>
            <Link to="/ai-marketing" className="text-sm hover:text-accent-400 transition">
              AI Marketing
            </Link>
            <Link to="/custom-ai-automation" className="text-sm hover:text-accent-400 transition">
              Custom AI
            </Link>
            <Link to="/success-stories" className="text-sm hover:text-accent-400 transition">
              Success Stories
            </Link>
            <Button as={Link} to="/consultation" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link to="/services" className="text-sm hover:text-accent-400 transition" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/deepfake-detection" className="text-sm hover:text-accent-400 transition" onClick={() => setIsOpen(false)}>
                Deepfake Detection
              </Link>
              <Link to="/ai-grc" className="text-sm hover:text-accent-400 transition" onClick={() => setIsOpen(false)}>
                AI GRC
              </Link>
              <Link to="/ai-marketing" className="text-sm hover:text-accent-400 transition" onClick={() => setIsOpen(false)}>
                AI Marketing
              </Link>
              <Link to="/custom-ai-automation" className="text-sm hover:text-accent-400 transition" onClick={() => setIsOpen(false)}>
                Custom AI
              </Link>
              <Link to="/success-stories" className="text-sm hover:text-accent-400 transition" onClick={() => setIsOpen(false)}>
                Success Stories
              </Link>
              <Button as={Link} to="/consultation" size="sm" onClick={() => setIsOpen(false)}>
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </Nav>
  );
};

export default Header;