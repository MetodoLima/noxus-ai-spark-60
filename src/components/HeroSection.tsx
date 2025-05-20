
import React from 'react';
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <HeroGeometric 
        badge="INTELIGÊNCIA ARTIFICIAL"
        title1="Transforme seu Atendimento com"
        title2="Inteligência Artificial"
        description="A NOXUS AI cria soluções personalizadas de atendimento automatizado para pequenos e médios negócios, aumentando a produtividade e satisfação dos clientes."
      />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
