
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`w-full py-3 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-noxus-dark-blue/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-bold">
            NOXUS<span className="text-noxus-cyan">AI</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1 text-white hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#recursos" className="text-white/80 hover:text-white transition-colors text-sm">Recursos</a>
          <a href="#automacoes" className="text-white/80 hover:text-white transition-colors text-sm">Automações</a>
          <a href="#depoimentos" className="text-white/80 hover:text-white transition-colors text-sm">Depoimentos</a>
          <Button 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm"
            size="sm"
          >
            Login
          </Button>
          <Button 
            className="bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90 text-sm"
            size="sm"
          >
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-noxus-dark-blue/95 backdrop-blur-md md:hidden p-4 flex flex-col gap-3 border-t border-white/10 shadow-lg">
            <a href="#recursos" className="text-white/80 hover:text-white transition-colors p-2 text-sm">Recursos</a>
            <a href="#automacoes" className="text-white/80 hover:text-white transition-colors p-2 text-sm">Automações</a>
            <a href="#depoimentos" className="text-white/80 hover:text-white transition-colors p-2 text-sm">Depoimentos</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white text-sm w-full"
                size="sm"
              >
                Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90 w-full text-sm"
                size="sm"
              >
                Começar Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
