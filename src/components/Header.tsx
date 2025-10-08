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
            <img 
              src="/lovable-uploads/disruptily-logo.png" 
              alt="Disruptily AI Logo" 
              className="h-20 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-sm hover:text-accent-400 transition">
              Services
            </Link>
            <Link to="/success-stories" className="text-sm hover:text-accent-400 transition">
              Success Stories
            </Link>
            <Link to="/resources" className="text-sm hover:text-accent-400 transition">
              Resources
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
              <Link 
                to="/services" 
                className="text-sm hover:text-accent-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/success-stories" 
                className="text-sm hover:text-accent-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </Link>
              <Link 
                to="/resources" 
                className="text-sm hover:text-accent-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Resources
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