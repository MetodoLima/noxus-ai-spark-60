
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection: React.FC = () => {
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

  const resources = [
    {
      title: "Crescimento da IA",
      description: "A Inteligência Artificial tem revolucionado negócios, com adoção crescente de 54% ao ano. Empresas que implementam IA demonstram aumento de 25% na eficiência operacional.",
      statistic: "54%",
      statLabel: "crescimento anual"
    },
    {
      title: "Impulsione seu Negócio",
      description: "Negócios que utilizam IA para atendimento ao cliente registram aumento de satisfação de clientes em 35% e redução de custos operacionais em até 30%.",
      statistic: "35%",
      statLabel: "maior satisfação"
    }
  ];

  return (
    <>
      {/* Gradient divider to connect with hero section */}
      <div className="w-full h-32 bg-gradient-to-b from-noxus-dark-blue to-white" />
      
      <section id="recursos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-noxus-blue font-medium mb-2">RECURSOS E BENEFÍCIOS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">O Poder da IA para seu Negócio</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Descubra como a inteligência artificial está transformando pequenos e médios negócios
              e como a NOXUS AI pode ajudar sua empresa a crescer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index} 
                ref={el => cardRefs.current[index] = el} 
                className="animate-on-scroll"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <Card className="h-full glass backdrop-blur-lg bg-gradient-to-br from-noxus-dark-blue/20 to-noxus-blue/10 border-noxus-blue/30 shadow-lg hover:shadow-xl transition-all overflow-hidden hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-bold text-noxus-dark-blue">{resource.title}</CardTitle>
                      <div className="text-right relative">
                        <span className="text-6xl font-bold text-noxus-blue relative z-10">{resource.statistic}</span>
                        <div className="absolute -top-3 -right-3 w-24 h-24 bg-noxus-blue/5 rounded-full blur-xl"></div>
                        <CardDescription className="text-noxus-dark-blue/70 text-lg">{resource.statLabel}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{resource.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark tech-themed gradient for bottom section */}
      <div className="w-full h-32 bg-gradient-to-b from-white to-noxus-dark-blue" />
      <div className="bg-noxus-dark-blue">
        <div className="container mx-auto px-4 py-8 relative overflow-hidden">
          {/* Tech background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-noxus-cyan"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border border-noxus-light-blue"></div>
            <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-noxus-blue/10"></div>
            <div className="absolute grid grid-cols-10 gap-5 w-full h-full">
              {Array(50).fill(0).map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 bg-noxus-light-blue/20 rounded-full" 
                  style={{
                    position: 'absolute',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="h-32"></div>
        </div>
      </div>
    </>
  );
};

export default ResourcesSection;
