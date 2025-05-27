
import React from 'react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
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

        <div className="flex items-center">
          <Button 
            className="bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90 text-sm"
            size="sm"
          >
            Começar Grátis
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
