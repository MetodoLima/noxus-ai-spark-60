import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, ShoppingCart } from "lucide-react";

const AutomationsSection: React.FC = () => {
  const automationRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    automationRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      automationRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const automations = [
    {
      title: "Atendimento Automatizado",
      description: "Atenda seus clientes 24/7 com respostas inteligentes e personalizadas através da nossa IA treinada com o conteúdo da sua empresa.",
      buttonText: "Agende uma Demonstração",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }, {
      title: "Automação de Agendamentos",
      description: "Elimine a necessidade de intermediários para agendar compromissos. Nossa IA gerencia sua agenda e confirma horários automaticamente.",
      buttonText: "Quero Automatizar",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }, {
      title: "Automação de Vendas",
      description: "Aumente suas vendas com um assistente virtual que guia os clientes pela jornada de compra, responde dúvidas e finaliza pedidos.",
      buttonText: "Saiba Mais",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <>
      {/* Transição superior - conecta com a seção acima */}
      <div className="relative w-full h-16 sm:h-20 lg:h-24 overflow-hidden bg-gradient-to-b from-white to-[#0C1F3F]">
        {/* Transição superior - conecta com a seção acima */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="topTransition" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A8DFF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00FFF7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {Array.from({
            length: 6
          }).map((_, i) => <line key={i} x1={`${i * 20}%`} y1="0%" x2={`${i * 20 + 15}%`} y2="100%" stroke="url(#topTransition)" strokeWidth="1" opacity="0.6" />)}
          </svg>
        </div>
        
        {/* Partículas conectoras */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#0C1F3F]">
          {Array.from({
          length: 12
        }).map((_, i) => <div key={i} className="absolute rounded-full bg-[#3A8DFF] animate-pulse" style={{
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${Math.random() * 2 + 1}s`,
          opacity: 0.4
        }} />)}
        </div>
      </div>

      <section id="automacoes" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#0C1F3F] to-[#1C1C1C] relative overflow-hidden">
        {/* Enhanced Technological Background with Unique Lights and Contours */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Flowing technological light streams */}
          <div className="absolute inset-0">
            {/* Primary light stream - horizontal flow */}
            <div 
              className="absolute w-full h-1 top-1/4 opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #3A8DFF 25%, #00FFF7 50%, #3A8DFF 75%, transparent 100%)',
                boxShadow: '0 0 20px #3A8DFF, 0 0 40px #00FFF7',
                animation: 'float 8s ease-in-out infinite'
              }}
            />
            
            {/* Secondary light stream - diagonal flow */}
            <div 
              className="absolute w-full h-0.5 top-3/4 opacity-40 transform -rotate-12"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #00FFF7 30%, #3A8DFF 70%, transparent 100%)',
                boxShadow: '0 0 15px #00FFF7, 0 0 30px #3A8DFF',
                animation: 'float 12s ease-in-out infinite reverse'
              }}
            />

            {/* Vertical light beams */}
            <div 
              className="absolute left-1/4 top-0 w-0.5 h-full opacity-30"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, #3A8DFF 20%, #00FFF7 50%, #3A8DFF 80%, transparent 100%)',
                boxShadow: '0 0 10px #3A8DFF',
                animation: 'pulse 6s ease-in-out infinite'
              }}
            />
            
            <div 
              className="absolute right-1/3 top-0 w-0.5 h-full opacity-25"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, #00FFF7 30%, #3A8DFF 70%, transparent 100%)',
                boxShadow: '0 0 8px #00FFF7',
                animation: 'pulse 8s ease-in-out infinite'
              }}
            />
          </div>

          {/* Technological circuit-like contours */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A8DFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00FFF7" stopOpacity="1" />
                <stop offset="100%" stopColor="#3A8DFF" stopOpacity="0.6" />
              </linearGradient>
              <filter id="circuitGlow">
                <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Circuit-like paths */}
            <path
              d="M 10 20 L 30 20 L 30 40 L 60 40 L 60 15 L 90 15"
              stroke="url(#circuitGradient)"
              strokeWidth="0.3"
              fill="none"
              filter="url(#circuitGlow)"
            />
            <path
              d="M 5 60 L 25 60 L 25 80 L 55 80 L 55 55 L 85 55"
              stroke="url(#circuitGradient)"
              strokeWidth="0.2"
              fill="none"
              filter="url(#circuitGlow)"
            />
            <path
              d="M 15 75 L 35 75 L 35 30 L 70 30 L 70 85 L 95 85"
              stroke="url(#circuitGradient)"
              strokeWidth="0.25"
              fill="none"
              filter="url(#circuitGlow)"
            />
            
            {/* Circuit nodes */}
            <circle cx="30" cy="20" r="0.8" fill="#3A8DFF" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="40" r="0.6" fill="#00FFF7" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="60" r="0.7" fill="#3A8DFF" opacity="0.7">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="70" cy="30" r="0.5" fill="#00FFF7" opacity="0.5">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="6s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Enhanced flowing particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[#3A8DFF]/20 to-[#00FFF7]/30"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(58, 141, 255, 0.3)`,
                  animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Technological grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(58, 141, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(58, 141, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-[#3A8DFF] font-medium mb-2 sm:mb-4 text-xs sm:text-sm tracking-wider uppercase">PRINCIPAIS AUTOMAÇÕES</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Soluções <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">Inteligentes</span> para seu Negócio
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Nossas soluções de automação são desenvolvidas para economizar tempo, reduzir custos
              e melhorar a experiência do cliente.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 max-w-6xl mx-auto">
            {automations.map((automation, index) => <Card key={index} ref={el => automationRefs.current[index] = el} className="bg-gradient-to-r from-[#0C1F3F]/80 to-[#1C1C1C]/80 border border-[#3A8DFF]/30 backdrop-blur-sm animate-on-scroll hover:shadow-2xl hover:shadow-[#00FFF7]/25 transition-all duration-300 group" style={{
              animationDelay: `${index * 0.2}s`
            }}>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {/* Conteúdo de texto */}
                  <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                    <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-xl bg-gradient-to-br from-[#3A8DFF]/20 to-[#00FFF7]/20 border border-[#3A8DFF]/30 backdrop-blur-sm w-fit">
                      <automation.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#3A8DFF]" />
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {automation.title}
                    </h4>
                    
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {automation.description}
                    </p>
                    
                    <Button className="bg-[#3A8DFF] hover:bg-[#00FFF7] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FFF7]/25 w-full sm:w-auto">
                      {automation.buttonText}
                    </Button>
                  </div>
                  
                  {/* Imagem */}
                  <div className="relative order-1 lg:order-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3A8DFF]/30 to-[#00FFF7]/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-[#3A8DFF]/30 backdrop-blur-sm group-hover:border-[#00FFF7]/50 transition-all duration-300">
                      <img src={automation.image} alt={automation.title} className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F3F]/60 to-transparent group-hover:from-[#0C1F3F]/40 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
          </div>
        </div>
      </section>

      {/* Transição inferior - conecta com a seção abaixo */}
      <div className="relative w-full h-16 sm:h-20 lg:h-24 overflow-hidden bg-gradient-to-b from-[#1C1C1C] to-white">
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bottomTransition" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFF7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3A8DFF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {Array.from({
            length: 6
          }).map((_, i) => <line key={i} x1={`${i * 20}%`} y1="0%" x2={`${i * 20 + 15}%`} y2="100%" stroke="url(#bottomTransition)" strokeWidth="1" opacity="0.6" />)}
          </svg>
        </div>
        
        {/* Partículas conectoras */}
        <div className="absolute inset-0 bg-slate-900">
          {Array.from({
          length: 12
        }).map((_, i) => <div key={i} className="absolute rounded-full bg-[#00FFF7] animate-pulse" style={{
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${Math.random() * 2 + 1}s`,
          opacity: 0.4
        }} />)}
        </div>

        {/* Ondas de conexão */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#3A8DFF]/20 to-transparent"></div>
      </div>
    </>
  );
};

export default AutomationsSection;
