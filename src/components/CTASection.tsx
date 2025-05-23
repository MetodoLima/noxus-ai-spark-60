
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
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
      {/* Luz fluida simples */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 1200px 300px at 50% 50%, rgba(58, 141, 255, 0.15) 0%, transparent 70%)
            `
          }}
        />
        
        {/* Linha de luz horizontal suave */}
        <div 
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3A8DFF]/30 to-transparent"
          style={{ transform: 'translateY(-50%)' }}
        />
      </div>

      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll relative z-10"
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            Dê o próximo passo para uma experiência de atendimento que{' '}
            <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">
              realmente converte
            </span>
          </h2>
          
          <p className="text-[#E9E8E8] text-xs mb-8 leading-relaxed max-w-sm mx-auto opacity-70">
            Agende uma demonstração com a nossa equipe e descubra como podemos 
            transformar o atendimento da sua empresa.
          </p>
          
          <Button className="bg-transparent border-2 border-white text-[#3A8DFF] hover:bg-[#00FFF7] hover:text-white hover:border-[#00FFF7] px-6 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105">
            Agende uma Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
