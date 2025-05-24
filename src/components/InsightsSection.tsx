
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Zap, BarChart3, MessageCircle } from "lucide-react";

const InsightsSection: React.FC = () => {
  const insightRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    insightRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      insightRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const insights = [
    {
      icon: TrendingUp,
      value: "315%",
      label: "Crescimento da IA em 2024",
      description: "Empresas que adotaram IA viram crescimento exponencial"
    },
    {
      icon: Users,
      value: "24/7",
      label: "Atendimento Contínuo",
      description: "Suporte disponível todos os dias, sem pausas"
    },
    {
      icon: Clock,
      value: "85%",
      label: "Redução no Tempo",
      description: "Tempo de resposta reduzido drasticamente"
    },
    {
      icon: Zap,
      value: "95%",
      label: "Satisfação do Cliente",
      description: "Clientes mais satisfeitos com respostas rápidas"
    },
    {
      icon: BarChart3,
      value: "60%",
      label: "Aumento nas Vendas",
      description: "Conversões melhoram com atendimento inteligente"
    },
    {
      icon: MessageCircle,
      value: "10k+",
      label: "Conversas Simultâneas",
      description: "Capacidade de atender milhares ao mesmo tempo"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-[#0C1F3F] to-slate-800 relative overflow-hidden">
      {/* Fundo tecnológico com luzes horizontais fluidas */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primeira luz horizontal fluida */}
        <div 
          className="absolute w-full h-2 top-1/4 opacity-50"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(58, 141, 255, 0.4) 25%, rgba(0, 255, 247, 0.7) 50%, rgba(58, 141, 255, 0.4) 75%, transparent 100%)',
            boxShadow: '0 0 40px rgba(58, 141, 255, 0.5), 0 0 80px rgba(0, 255, 247, 0.3)',
            filter: 'blur(1px)',
            animation: 'horizontalFlow 10s ease-in-out infinite'
          }}
        />
        
        {/* Segunda luz horizontal fluida */}
        <div 
          className="absolute w-full h-1.5 top-3/4 opacity-35"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 247, 0.5) 30%, rgba(58, 141, 255, 0.8) 50%, rgba(0, 255, 247, 0.5) 70%, transparent 100%)',
            boxShadow: '0 0 30px rgba(0, 255, 247, 0.6), 0 0 60px rgba(58, 141, 255, 0.3)',
            filter: 'blur(0.5px)',
            animation: 'horizontalFlow 14s ease-in-out infinite reverse'
          }}
        />

        {/* Partículas flutuantes */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#3A8DFF]/25 to-[#00FFF7]/35"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${Math.random() * 10 + 6}px rgba(58, 141, 255, 0.4)`,
                animation: `float ${Math.random() * 12 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#3A8DFF] font-medium mb-4 text-sm tracking-wider uppercase">INSIGHTS DE IA</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            O Futuro é <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">Inteligente</span>
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Dados reais sobre como a Inteligência Artificial está transformando o atendimento ao cliente
            e impulsionando o crescimento dos negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {insights.map((insight, index) => (
            <Card 
              key={index}
              ref={el => insightRefs.current[index] = el}
              className="bg-gradient-to-br from-[#0C1F3F]/60 to-[#1C1C1C]/60 border border-[#3A8DFF]/20 backdrop-blur-sm animate-on-scroll hover:shadow-2xl hover:shadow-[#00FFF7]/20 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-[#3A8DFF]/20 to-[#00FFF7]/20 border border-[#3A8DFF]/30 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  <insight.icon className="h-6 w-6 text-[#3A8DFF]" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent mb-2">
                  {insight.value}
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3">
                  {insight.label}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {insight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3A8DFF]/10 to-[#00FFF7]/10 border border-[#3A8DFF]/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#00FFF7] animate-pulse"></div>
            <span className="text-gray-300 text-sm">
              Dados atualizados em tempo real
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
