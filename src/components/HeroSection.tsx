
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-noxus-dark-blue to-noxus-blue pt-20 pb-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiAwaDZ2LTZoLTZ2NnptLTE4IDE4aDZ2LTZoLTZ2NnptNiAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="animate-fade-in">
          <h2 className="text-noxus-cyan font-medium mb-2">INTELIGÊNCIA ARTIFICIAL</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu Atendimento com <span className="text-noxus-cyan">Inteligência Artificial</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
            A NOXUS AI cria soluções personalizadas de atendimento automatizado para pequenos e médios negócios,
            aumentando a produtividade e satisfação dos clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-noxus-blue to-noxus-cyan hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg font-medium"
            >
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 px-8 py-6 rounded-xl text-lg font-medium"
            >
              Agendar Demonstração
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 inline-flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-noxus-blue to-noxus-cyan flex items-center justify-center text-white text-xs border-2 border-white">
                  {i}
                </div>
              ))}
            </div>
            <div className="text-white text-sm md:text-base text-left">
              <p>+1000 empresas utilizam a NOXUS AI</p>
              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-noxus-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="text-white text-xs ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
