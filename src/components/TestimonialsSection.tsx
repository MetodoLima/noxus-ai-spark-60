
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, User } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: "João Silva",
      position: "Proprietário, Café Aroma",
      text: "A NOXUS AI transformou meu pequeno café. Agora os clientes podem fazer pedidos 24/7 e nossos atendentes têm mais tempo para proporcionar uma experiência personalizada.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Marina Costa",
      position: "CEO, Boutique Fashion",
      text: "Nossa loja online registrou um aumento de 40% nas vendas após implementarmos o chatbot da NOXUS AI. Os clientes adoram receber recomendações personalizadas e respostas instantâneas.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      position: "Diretor, Clínica Saúde",
      text: "A automação de agendamentos reduziu em 80% o tempo que nossa equipe gastava ao telefone. Agora os pacientes marcam e remarcam consultas sem precisar ligar para a clínica.",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      rating: 4
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 animate-on-scroll"
      >
        <div className="text-center mb-16">
          <h2 className="text-noxus-blue font-medium mb-2">DEPOIMENTOS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">O que Nossos Clientes Dizem</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubra como nossos clientes estão transformando seus negócios com a tecnologia da NOXUS AI
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-noxus-blue/20">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-noxus-blue to-noxus-cyan p-1">
                            {testimonial.image ? (
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="h-8 w-8 text-gray-500" />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-noxus-cyan' : 'text-gray-300'}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <blockquote className="text-gray-700 italic mb-4">"{testimonial.text}"</blockquote>
                          <div>
                            <h4 className="font-bold text-noxus-dark-blue">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="border-noxus-blue text-noxus-blue"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-noxus-blue' : 'bg-gray-300'}`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                >
                </button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="border-noxus-blue text-noxus-blue"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86514 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86514 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-noxus-dark-blue/5 to-noxus-blue/10">
            <div className="flex-shrink-0 p-4 bg-gradient-to-r from-noxus-blue to-noxus-cyan rounded-full text-white">
              <Check className="h-8 w-8" />
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-noxus-dark-blue">Pronto para transformar seu negócio?</h4>
              <p className="text-gray-600">Agende uma demonstração gratuita e descubra como a NOXUS AI pode ajudar sua empresa.</p>
            </div>
            <Button className="bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90 whitespace-nowrap">
              Agendar Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
