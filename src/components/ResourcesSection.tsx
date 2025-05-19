
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
              <Card className="h-full glass backdrop-blur-md bg-gradient-to-br from-noxus-dark-blue/5 to-noxus-blue/10 border-noxus-blue/20 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-noxus-dark-blue">{resource.title}</CardTitle>
                    <div className="text-right">
                      <span className="text-4xl font-bold text-noxus-blue">{resource.statistic}</span>
                      <CardDescription className="text-noxus-dark-blue/70">{resource.statLabel}</CardDescription>
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
  );
};

export default ResourcesSection;
