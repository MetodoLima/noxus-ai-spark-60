
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Frown, Calendar, User } from "lucide-react";

const PainPointsSection: React.FC = () => {
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

  const painPoints = [
    {
      icon: Clock,
      title: "Respondendo WhatsApp até meia-noite",
      description: "Você não consegue descansar porque sempre tem alguém mandando mensagem fora do horário comercial.",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Frown,
      title: "Perdendo clientes por demora na resposta",
      description: "Enquanto você demora para responder, seus concorrentes já fecharam o negócio com seu cliente.",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Calendar,
      title: "Esquecendo de cobrar ou agendar de novo",
      description: "Consultas remarcadas, pagamentos em atraso e clientes insatisfeitos por falta de organização.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: User,
      title: "Fazendo tudo sozinho",
      description: "Você virou secretária, atendente e profissional ao mesmo tempo. Sua produtividade despencou.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-noxus-blue/5"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Você está <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">perdendo dinheiro</span> e nem percebe?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Milhares de profissionais perdem oportunidades todos os dias por não automatizar seu atendimento
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Enquanto você está ocupado demais respondendo mensagens e organizando agendas manualmente, 
              seus concorrentes já descobriram como multiplicar seus resultados com inteligência artificial. 
              Descubra o que está custando sua desorganização.
            </p>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el} 
              className="animate-on-scroll"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <Card className="h-full transition-all duration-500 hover:shadow-xl hover:scale-105 bg-white border border-gray-200 group overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-noxus-blue to-noxus-cyan"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${point.color} mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="text-white w-10 h-10" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {point.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-noxus-blue to-noxus-dark-blue rounded-2xl p-12 text-center text-white shadow-2xl animate-on-scroll">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pare de perder dinheiro hoje mesmo
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Automatize seu atendimento e recupere o controle do seu tempo e dos seus resultados
            </p>
            <Button 
              size="lg" 
              className="bg-noxus-cyan hover:bg-noxus-cyan/90 text-noxus-dark-blue font-bold text-lg px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Quero automatizar meu atendimento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
