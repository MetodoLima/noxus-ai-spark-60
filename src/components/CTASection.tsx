
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
    <section className="py-24 bg-gradient-to-br from-[#0C1F3F] to-[#1C1C1C] relative overflow-hidden">
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

      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Dê o próximo passo para uma experiência de atendimento que{' '}
            <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">
              realmente converte
            </span>
          </h2>
          
          <p className="text-[#E9E8E8] text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Agende uma demonstração com a nossa equipe e descubra como podemos 
            transformar o atendimento da sua empresa com automações inteligentes 
            e personalizadas.
          </p>
          
          <Button className="bg-transparent border-2 border-white text-[#3A8DFF] hover:bg-[#00FFF7] hover:text-white hover:border-[#00FFF7] px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FFF7]/25">
            Agende uma Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
