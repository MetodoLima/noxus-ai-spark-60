
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C1F3F] via-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
      {/* Única luz fluida percorrendo o fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse 800px 200px at 20% 30%, rgba(58, 141, 255, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 600px 150px at 80% 70%, rgba(0, 255, 247, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 1000px 100px at 60% 20%, rgba(58, 141, 255, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse 700px 300px at 10% 80%, rgba(0, 255, 247, 0.10) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Linha de luz fluida conectando os pontos */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(58, 141, 255, 0.3)" />
              <stop offset="25%" stopColor="rgba(0, 255, 247, 0.4)" />
              <stop offset="50%" stopColor="rgba(58, 141, 255, 0.2)" />
              <stop offset="75%" stopColor="rgba(0, 255, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(58, 141, 255, 0.1)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 0 30 Q 25 20 50 35 T 100 25"
            stroke="url(#lightGradient)"
            strokeWidth="0.5"
            fill="none"
            filter="url(#glow)"
            opacity="0.8"
          />
          <path
            d="M 0 60 Q 30 50 60 65 T 100 55"
            stroke="url(#lightGradient)"
            strokeWidth="0.3"
            fill="none"
            filter="url(#glow)"
            opacity="0.6"
          />
        </svg>
        
        {/* Partículas flutuantes sutis */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#3A8DFF]/10 to-[#00FFF7]/10 animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll relative z-10"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
            Dê o próximo passo para uma experiência de atendimento que{' '}
            <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">
              realmente converte
            </span>
          </h2>
          
          <p className="text-[#E9E8E8] text-xs mb-6 leading-relaxed max-w-md mx-auto opacity-80">
            Agende uma demonstração com a nossa equipe e descubra como podemos 
            transformar o atendimento da sua empresa com automações inteligentes.
          </p>
          
          <Button className="bg-transparent border-2 border-white text-[#3A8DFF] hover:bg-[#00FFF7] hover:text-white hover:border-[#00FFF7] px-6 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FFF7]/25">
            Agende uma Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
