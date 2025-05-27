
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart, Home } from "lucide-react";

const ResourcesSection: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const sectors = [
    {
      title: "Saúde e Bem-estar",
      description: "Automatize agendamentos, lembretes e pré-atendimentos com nossos agentes de IA.",
      idealFor: "Ideal para: nutricionistas, dentistas, médicos, psicólogos, esteticistas e clínicas.",
      icon: Heart,
      color: "bg-purple-500",
      borderColor: "border-purple-400",
      highlightColor: "from-purple-400 to-purple-700",
      cardClass: "group"
    },
    {
      title: "Varejo e E-commerce",
      description: "Responda dúvidas, capture leads e impulsione vendas de forma automatizada via chat.",
      idealFor: "Ideal para: lojas físicas, e-commerces, academias, lojas de tecnologia e produtos digitais.",
      icon: ShoppingCart,
      color: "bg-blue-500",
      borderColor: "border-blue-400",
      highlightColor: "from-blue-400 to-blue-700",
      cardClass: "group"
    },
    {
      title: "Imobiliárias e Serviços",
      description: "Reduza a inadimplência com agentes de cobrança via WhatsApp, e-mail e SMS.",
      idealFor: "Ideal para: imobiliárias, administradoras de condomínios e prestadores de serviço recorrente.",
      icon: Home,
      color: "bg-amber-700",
      borderColor: "border-amber-600",
      highlightColor: "from-amber-600 to-amber-900",
      cardClass: "group"
    }
  ];

  return (
    <>
      {/* Enhanced gradient transition effect between sections */}
      <div className="relative w-full h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-500/20 to-transparent">
          {Array.from({ length: 60 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-noxus-blue"
              style={{
                width: `${Math.random() * 6 + 1}px`,
                height: `${Math.random() * 6 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Neural network lines for transition */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="transitionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A8DFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00FFF7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {Array.from({ length: 10 }).map((_, i) => (
              <line 
                key={i}
                x1={`${Math.random() * 100}%`}
                y1="0%"
                x2={`${Math.random() * 100}%`}
                y2="100%"
                stroke="url(#transitionGrad)"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
      </div>
      
      <section id="setores" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-200 to-white">
        {/* Background particle effect */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 80 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-noxus-blue"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Neural network lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A8DFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00FFF7" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {Array.from({ length: 15 }).map((_, i) => (
              <line 
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#grad1)"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-noxus-blue font-medium mb-2 tracking-wider">SETORES DE ATUAÇÃO</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Setores atendidos pela <span className="bg-clip-text text-transparent bg-gradient-to-r from-noxus-blue to-noxus-cyan">NOXUS AI</span> com Agentes Autônomos Inteligentes
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-noxus-blue to-noxus-cyan mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma de inteligência artificial atende diversos setores com soluções personalizadas para automação e atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                ref={el => cardRefs.current[index] = el} 
                className="animate-on-scroll"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <Card className={`h-full transition-all duration-500 overflow-hidden relative ${sector.cardClass} bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:border-noxus-blue/30`}>
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-gradient-to-r from-noxus-cyan to-noxus-blue"></div>
                  
                  <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-700" style={{background: `linear-gradient(135deg, ${sector.color}, transparent)`}}></div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${sector.highlightColor} p-3 shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        <sector.icon className="text-white w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">{sector.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{sector.description}</p>
                    <p className="text-xs text-gray-500 italic">{sector.idealFor}</p>
                  </CardContent>
                  
                  <CardFooter>
                    <div className="w-full pt-2 border-t border-gray-200">
                      <span className="text-noxus-blue text-sm font-medium group-hover:text-noxus-cyan transition-colors duration-300">
                        Saiba mais →
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Animated bottom border */}
          <div className="relative h-1 w-full mt-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-noxus-cyan to-transparent animate-pulse" style={{animationDuration: '3s'}}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesSection;
