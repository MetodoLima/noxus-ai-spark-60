
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, ShoppingCart } from "lucide-react";

const AutomationsSection: React.FC = () => {
  const automationRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    automationRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      automationRefs.current.forEach((item) => {
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
    },
    {
      title: "Automação de Agendamentos",
      description: "Elimine a necessidade de intermediários para agendar compromissos. Nossa IA gerencia sua agenda e confirma horários automaticamente.",
      buttonText: "Quero Automatizar",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Automação de Vendas",
      description: "Aumente suas vendas com um assistente virtual que guia os clientes pela jornada de compra, responde dúvidas e finaliza pedidos.",
      buttonText: "Saiba Mais",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <>
      {/* Transição superior aprimorada - conecta perfeitamente com a seção de cima */}
      <div className="relative w-full h-32 sm:h-40 lg:h-48 overflow-hidden">
        {/* Gradiente fluido de integração */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, 
                white 0%, 
                rgba(255,255,255,0.95) 15%,
                rgba(200,200,200,0.8) 30%,
                rgba(150,150,150,0.6) 45%,
                rgba(100,100,100,0.4) 60%,
                rgba(50,50,50,0.3) 75%,
                rgba(12,31,63,0.5) 85%,
                #0C1F3F 100%
              )
            `
          }}
        />
        
        {/* Luzes fluidas conectoras */}
        <div className="absolute inset-0">
          {/* Linha principal de integração */}
          <div 
            className="absolute w-full h-1 opacity-60"
            style={{
              top: '25%',
              background: 'linear-gradient(90deg, transparent 0%, #3A8DFF 20%, #00FFF7 50%, #3A8DFF 80%, transparent 100%)',
              filter: 'blur(2px)'
            }}
          />
          <div 
            className="absolute w-full h-1 opacity-40"
            style={{
              top: '50%',
              background: 'linear-gradient(90deg, transparent 0%, #00FFF7 30%, #3A8DFF 70%, transparent 100%)',
              filter: 'blur(3px)'
            }}
          />
          <div 
            className="absolute w-full h-1 opacity-80"
            style={{
              top: '75%',
              background: 'linear-gradient(90deg, transparent 0%, #3A8DFF 40%, #00FFF7 60%, transparent 100%)',
              filter: 'blur(1px)'
            }}
          />
        </div>
        
        {/* Partículas flutuantes de conexão */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? '#3A8DFF' : '#00FFF7',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>
        
        {/* Ondas de integração */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="integrationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="30%" stopColor="rgba(58,141,255,0.4)" />
              <stop offset="70%" stopColor="rgba(0,255,247,0.4)" />
              <stop offset="100%" stopColor="rgba(12,31,63,0.3)" />
            </linearGradient>
          </defs>
          <path
            d="M 0 20 Q 25 15 50 25 T 100 20"
            stroke="url(#integrationGrad)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 0 40 Q 30 35 60 45 T 100 40"
            stroke="url(#integrationGrad)"
            strokeWidth="0.6"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 0 70 Q 40 65 70 75 T 100 70"
            stroke="url(#integrationGrad)"
            strokeWidth="1"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      <section id="automacoes" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#0C1F3F] to-[#1C1C1C] relative overflow-hidden">
        {/* Particle Background Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-[#3A8DFF] opacity-20 animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        {/* Linhas conectoras de fundo */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgLines" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A8DFF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00FFF7" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {Array.from({ length: 8 }).map((_, i) => (
              <line 
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#bgLines)"
                strokeWidth="1"
              />
            ))}
          </svg>
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
            {automations.map((automation, index) => (
              <Card 
                key={index} 
                ref={el => automationRefs.current[index] = el}
                className="bg-gradient-to-r from-[#0C1F3F]/80 to-[#1C1C1C]/80 border border-[#3A8DFF]/30 backdrop-blur-sm animate-on-scroll hover:shadow-2xl hover:shadow-[#00FFF7]/25 transition-all duration-300 group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
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
                      
                      <Button 
                        className="bg-[#3A8DFF] hover:bg-[#00FFF7] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FFF7]/25 w-full sm:w-auto"
                      >
                        {automation.buttonText}
                      </Button>
                    </div>
                    
                    {/* Imagem */}
                    <div className="relative order-1 lg:order-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3A8DFF]/30 to-[#00FFF7]/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative rounded-2xl overflow-hidden border border-[#3A8DFF]/30 backdrop-blur-sm group-hover:border-[#00FFF7]/50 transition-all duration-300">
                        <img 
                          src={automation.image}
                          alt={automation.title}
                          className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F3F]/60 to-transparent group-hover:from-[#0C1F3F]/40 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transição inferior aprimorada - conecta perfeitamente com a seção de baixo */}
      <div className="relative w-full h-32 sm:h-40 lg:h-48 overflow-hidden">
        {/* Gradiente fluido de integração */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, 
                #1C1C1C 0%, 
                rgba(28,28,28,0.9) 15%,
                rgba(50,50,50,0.7) 30%,
                rgba(100,100,100,0.5) 45%,
                rgba(150,150,150,0.4) 60%,
                rgba(200,200,200,0.3) 75%,
                rgba(255,255,255,0.2) 85%,
                white 100%
              )
            `
          }}
        />
        
        {/* Luzes fluidas conectoras */}
        <div className="absolute inset-0">
          {/* Linha principal de integração */}
          <div 
            className="absolute w-full h-1 opacity-80"
            style={{
              top: '25%',
              background: 'linear-gradient(90deg, transparent 0%, #00FFF7 20%, #3A8DFF 50%, #00FFF7 80%, transparent 100%)',
              filter: 'blur(1px)'
            }}
          />
          <div 
            className="absolute w-full h-1 opacity-40"
            style={{
              top: '50%',
              background: 'linear-gradient(90deg, transparent 0%, #3A8DFF 30%, #00FFF7 70%, transparent 100%)',
              filter: 'blur(3px)'
            }}
          />
          <div 
            className="absolute w-full h-1 opacity-60"
            style={{
              top: '75%',
              background: 'linear-gradient(90deg, transparent 0%, #00FFF7 40%, #3A8DFF 60%, transparent 100%)',
              filter: 'blur(2px)'
            }}
          />
        </div>
        
        {/* Partículas flutuantes de conexão */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? '#00FFF7' : '#3A8DFF',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                opacity: 0.5
              }}
            />
          ))}
        </div>
        
        {/* Ondas de integração */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bottomIntegrationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(28,28,28,0.3)" />
              <stop offset="30%" stopColor="rgba(0,255,247,0.4)" />
              <stop offset="70%" stopColor="rgba(58,141,255,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
            </linearGradient>
          </defs>
          <path
            d="M 0 30 Q 25 25 50 35 T 100 30"
            stroke="url(#bottomIntegrationGrad)"
            strokeWidth="1"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 0 50 Q 30 45 60 55 T 100 50"
            stroke="url(#bottomIntegrationGrad)"
            strokeWidth="0.6"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 0 80 Q 40 75 70 85 T 100 80"
            stroke="url(#bottomIntegrationGrad)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>
    </>
  );
};

export default AutomationsSection;
