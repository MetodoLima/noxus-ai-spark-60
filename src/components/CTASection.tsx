
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
    <section className="py-20 bg-gradient-to-br from-[#0C1F3F] to-[#1C1C1C] relative overflow-hidden">
      {/* Top integration light effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 via-[#3A8DFF]/10 to-transparent pointer-events-none"></div>
      
      {/* Bottom integration light effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 via-[#00FFF7]/10 to-transparent pointer-events-none"></div>
      
      {/* Side light beams */}
      <div className="absolute top-1/2 left-0 w-40 h-1 bg-gradient-to-r from-transparent via-[#3A8DFF]/30 to-transparent transform -translate-y-1/2 blur-sm"></div>
      <div className="absolute top-1/2 right-0 w-40 h-1 bg-gradient-to-l from-transparent via-[#00FFF7]/30 to-transparent transform -translate-y-1/2 blur-sm"></div>
      
      {/* Diagonal connecting lines */}
      <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-[#3A8DFF]/40 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-[#00FFF7]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-1/3 w-px h-20 bg-gradient-to-t from-[#3A8DFF]/40 to-transparent"></div>
      <div className="absolute bottom-0 right-1/3 w-px h-20 bg-gradient-to-t from-[#00FFF7]/40 to-transparent"></div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
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

      {/* Floating light orbs */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-[#3A8DFF]/20 rounded-full blur-md animate-pulse"></div>
      <div className="absolute top-20 right-16 w-6 h-6 bg-[#00FFF7]/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 left-20 w-10 h-10 bg-[#3A8DFF]/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-[#00FFF7]/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Dê o próximo passo para uma experiência de atendimento que{' '}
            <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">
              realmente converte
            </span>
          </h2>
          
          <p className="text-[#E9E8E8] text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Agende uma demonstração com a nossa equipe e descubra como podemos 
            transformar o atendimento da sua empresa com automações inteligentes 
            e personalizadas.
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
