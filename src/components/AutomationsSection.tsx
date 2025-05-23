
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
    <section id="automacoes" className="py-24 bg-gradient-to-br from-[#0C1F3F] to-[#1C1C1C] relative overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#3A8DFF] font-medium mb-4 text-sm tracking-wider uppercase">PRINCIPAIS AUTOMAÇÕES</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Soluções <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">Inteligentes</span> para seu Negócio
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Nossas soluções de automação são desenvolvidas para economizar tempo, reduzir custos
            e melhorar a experiência do cliente.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {automations.map((automation, index) => (
            <Card 
              key={index} 
              ref={el => automationRefs.current[index] = el}
              className="bg-gradient-to-r from-[#0C1F3F]/80 to-[#1C1C1C]/80 border border-[#3A8DFF]/30 backdrop-blur-sm animate-on-scroll hover:shadow-2xl hover:shadow-[#00FFF7]/25 transition-all duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Conteúdo de texto */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-[#3A8DFF]/20 to-[#00FFF7]/20 border border-[#3A8DFF]/30 backdrop-blur-sm w-fit">
                      <automation.icon className="h-6 w-6 text-[#3A8DFF]" />
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {automation.title}
                    </h4>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {automation.description}
                    </p>
                    
                    <Button 
                      className="bg-[#3A8DFF] hover:bg-[#00FFF7] text-white px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FFF7]/25"
                    >
                      {automation.buttonText}
                    </Button>
                  </div>
                  
                  {/* Imagem */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3A8DFF]/30 to-[#00FFF7]/30 rounded-2xl blur-xl"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-[#3A8DFF]/30 backdrop-blur-sm">
                      <img 
                        src={automation.image}
                        alt={automation.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F3F]/60 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationsSection;
