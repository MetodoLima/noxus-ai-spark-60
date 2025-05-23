
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
      {/* Fluid light beams - horizontal */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#3A8DFF]/20 to-transparent blur-sm"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#00FFF7]/20 to-transparent blur-sm"></div>
      
      {/* Vertical flowing lights */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#3A8DFF]/30 via-transparent via-[#00FFF7]/20 to-transparent blur-sm opacity-60"></div>
      <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-[#00FFF7]/30 via-transparent via-[#3A8DFF]/20 to-transparent blur-sm opacity-60"></div>
      
      {/* Diagonal connecting flows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/6 w-px h-1/3 bg-gradient-to-b from-[#3A8DFF]/40 to-transparent transform rotate-12 blur-[1px]"></div>
        <div className="absolute top-0 right-1/6 w-px h-1/3 bg-gradient-to-b from-[#00FFF7]/40 to-transparent transform -rotate-12 blur-[1px]"></div>
        <div className="absolute bottom-0 left-1/3 w-px h-1/2 bg-gradient-to-t from-[#3A8DFF]/30 to-transparent transform -rotate-6 blur-[1px]"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-1/2 bg-gradient-to-t from-[#00FFF7]/30 to-transparent transform rotate-6 blur-[1px]"></div>
      </div>

      {/* Modern flowing light streams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3A8DFF]/40 via-[#00FFF7]/40 to-transparent blur-sm animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFF7]/40 via-[#3A8DFF]/40 to-transparent blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Curved light paths */}
        <div className="absolute top-1/2 left-1/8 w-96 h-px bg-gradient-to-r from-[#3A8DFF]/30 to-transparent transform rotate-45 blur-sm opacity-70"></div>
        <div className="absolute top-1/2 right-1/8 w-96 h-px bg-gradient-to-l from-[#00FFF7]/30 to-transparent transform -rotate-45 blur-sm opacity-70"></div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#3A8DFF]/20 to-[#00FFF7]/20 animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs for depth */}
      <div className="absolute top-16 left-12 w-6 h-6 bg-[#3A8DFF]/15 rounded-full blur-md animate-pulse"></div>
      <div className="absolute top-24 right-20 w-4 h-4 bg-[#00FFF7]/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-20 left-16 w-8 h-8 bg-[#3A8DFF]/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-12 right-12 w-3 h-3 bg-[#00FFF7]/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>

      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll relative z-10"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Dê o próximo passo para uma experiência de atendimento que{' '}
            <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">
              realmente converte
            </span>
          </h2>
          
          <p className="text-[#E9E8E8] text-xs sm:text-sm mb-6 leading-relaxed max-w-xl mx-auto opacity-90">
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
