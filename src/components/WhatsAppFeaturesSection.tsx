
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageCircle, Calendar, CheckCircle, Users, Bell } from "lucide-react";

const WhatsAppFeaturesSection: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    featureRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      featureRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const features = [
    {
      title: "Agendamento Inteligente",
      description: "A IA analisa sua agenda e sugere os melhores horários disponíveis",
      icon: Calendar,
    },
    {
      title: "Confirmação Automática",
      description: "Envia lembretes e confirma agendamentos automaticamente",
      icon: CheckCircle,
    },
    {
      title: "Atendimento 24/7",
      description: "Responde consultas e agenda compromissos a qualquer hora",
      icon: Clock,
    },
    {
      title: "Gestão de Clientes",
      description: "Organiza informações e histórico de cada cliente",
      icon: Users,
    },
    {
      title: "Notificações Inteligentes",
      description: "Avisos automáticos sobre cancelamentos e reagendamentos",
      icon: Bell,
    },
    {
      title: "Chat Personalizado",
      description: "Conversa natural adaptada ao seu tipo de negócio",
      icon: MessageCircle,
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0C1F3F] to-[#1C1C1C] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#3A8DFF] font-medium mb-2 sm:mb-4 text-xs sm:text-sm tracking-wider uppercase">WHATSAPP INTELIGENTE</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Agendamento <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">Automático</span> via WhatsApp
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Veja como nossa IA funciona diretamente no WhatsApp para automatizar agendamentos e melhorar o atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Imagem do celular */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden w-64 sm:w-80 h-[28rem] sm:h-[35rem] relative">
                  {/* Header do WhatsApp */}
                  <div className="bg-[#075E54] text-white p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">Clínica Saúde+</div>
                      <div className="text-xs opacity-75">online</div>
                    </div>
                  </div>
                  
                  {/* Conversa */}
                  <div className="p-4 space-y-3 bg-[#ECE5DD] h-full overflow-hidden">
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%] self-start">
                      <p className="text-sm text-gray-800">Olá! Gostaria de agendar uma consulta</p>
                      <span className="text-xs text-gray-500">14:23</span>
                    </div>
                    
                    <div className="bg-[#DCF8C6] p-3 rounded-lg shadow-sm max-w-[80%] self-end ml-auto">
                      <p className="text-sm text-gray-800">Olá! Claro, posso ajudar com o agendamento. Para qual especialidade?</p>
                      <span className="text-xs text-gray-500">14:24</span>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%] self-start">
                      <p className="text-sm text-gray-800">Cardiologia, por favor</p>
                      <span className="text-xs text-gray-500">14:25</span>
                    </div>
                    
                    <div className="bg-[#DCF8C6] p-3 rounded-lg shadow-sm max-w-[80%] self-end ml-auto">
                      <p className="text-sm text-gray-800">Perfeito! Tenho disponibilidade para:</p>
                      <p className="text-sm text-gray-800 mt-1">📅 Segunda - 15:00</p>
                      <p className="text-sm text-gray-800">📅 Terça - 09:30</p>
                      <p className="text-sm text-gray-800">📅 Quarta - 14:00</p>
                      <span className="text-xs text-gray-500">14:25</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Indicador de IA ativa */}
              <div className="absolute -top-2 -right-2 bg-[#3A8DFF] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse">
                IA Ativa
              </div>
            </div>
          </div>

          {/* Cards de funcionalidades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <Card 
                key={index}
                ref={el => featureRefs.current[index] = el}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center p-2 rounded-lg bg-[#3A8DFF]/10">
                        <feature.icon className="h-5 w-5 text-[#3A8DFF]" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppFeaturesSection;
