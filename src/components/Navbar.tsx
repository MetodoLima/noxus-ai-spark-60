
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:px-8 absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold">
            NOXUS<span className="text-noxus-cyan">AI</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#recursos" className="text-white hover:text-noxus-cyan transition-colors">Recursos</a>
          <a href="#automacoes" className="text-white hover:text-noxus-cyan transition-colors">Automações</a>
          <a href="#depoimentos" className="text-white hover:text-noxus-cyan transition-colors">Depoimentos</a>
          <a href="#contato" className="text-white hover:text-noxus-cyan transition-colors">Contato</a>
          <Button 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20"
          >
            Login
          </Button>
          <Button 
            className="bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90"
          >
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-noxus-dark-blue/95 backdrop-blur-md md:hidden p-4 flex flex-col space-y-4 border-t border-white/10">
            <a href="#recursos" className="text-white hover:text-noxus-cyan transition-colors p-2">Recursos</a>
            <a href="#automacoes" className="text-white hover:text-noxus-cyan transition-colors p-2">Automações</a>
            <a href="#depoimentos" className="text-white hover:text-noxus-cyan transition-colors p-2">Depoimentos</a>
            <a href="#contato" className="text-white hover:text-noxus-cyan transition-colors p-2">Contato</a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white w-full"
              >
                Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90 w-full"
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
