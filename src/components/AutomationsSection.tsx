
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, ShoppingCart } from "lucide-react";

const AutomationsSection: React.FC = () => {
  const automationRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    automationRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      automationRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const automations = [
    {
      title: "Atendimento Automatizado",
      description: "Atenda seus clientes 24/7 com respostas inteligentes e personalizadas através da nossa IA treinada com o conteúdo da sua empresa.",
      buttonText: "Agende uma Demonstração",
      icon: MessageSquare,
      chats: [
        { sender: "user", message: "Olá, gostaria de saber sobre o plano Premium" },
        { sender: "bot", message: "Olá! Nosso plano Premium inclui acesso ilimitado, suporte prioritário e recursos exclusivos por R$ 99,90/mês. Posso enviar mais detalhes?" },
        { sender: "user", message: "Sim, por favor!" },
      ]
    },
    {
      title: "Automação de Agendamentos",
      description: "Elimine a necessidade de intermediários para agendar compromissos. Nossa IA gerencia sua agenda e confirma horários automaticamente.",
      buttonText: "Quero Automatizar",
      icon: Calendar,
      chats: [
        { sender: "user", message: "Preciso agendar uma consulta para amanhã" },
        { sender: "bot", message: "Claro! Temos horários disponíveis às 10h, 14h e 16h. Qual prefere?" },
        { sender: "user", message: "14h seria perfeito" },
      ]
    },
    {
      title: "Automação de Vendas",
      description: "Aumente suas vendas com um assistente virtual que guia os clientes pela jornada de compra, responde dúvidas e finaliza pedidos.",
      buttonText: "Saiba Mais",
      icon: ShoppingCart,
      chats: [
        { sender: "user", message: "Quero comprar o produto XYZ" },
        { sender: "bot", message: "Ótima escolha! O XYZ está disponível por R$ 199,90. Deseja finalizar a compra ou ver mais detalhes?" },
        { sender: "user", message: "Quero finalizar a compra" },
      ]
    }
  ];

  return (
    <section id="automacoes" className="py-24 bg-gradient-to-br from-[#0C1F3F] to-[#1C1C1C] relative overflow-hidden">
      {/* Particle Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
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

      {/* Neural Network Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A8DFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00FFF7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {Array.from({ length: 12 }).map((_, i) => (
            <line 
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#neuralGrad)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#3A8DFF] font-medium mb-4 text-sm tracking-wider uppercase">PRINCIPAIS AUTOMAÇÕES</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Soluções <span className="bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] bg-clip-text text-transparent">Inteligentes</span> para seu Negócio
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Nossas soluções de automação são desenvolvidas para economizar tempo, reduzir custos
            e melhorar a experiência do cliente.
          </p>
        </div>

        <div className="space-y-24">
          {automations.map((automation, index) => (
            <div 
              key={index} 
              ref={el => automationRefs.current[index] = el}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 animate-on-scroll`}
              style={{animationDelay: `${index * 0.3}s`}}
            >
              {/* Content Block */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#3A8DFF]/20 to-[#00FFF7]/20 border border-[#3A8DFF]/30 backdrop-blur-sm">
                  <automation.icon className="h-8 w-8 text-[#3A8DFF]" />
                </div>
                
                <h4 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {automation.title}
                </h4>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {automation.description}
                </p>
                
                <Button 
                  className="bg-[#3A8DFF] hover:bg-[#00FFF7] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FFF7]/25"
                >
                  {automation.buttonText}
                </Button>
              </div>
              
              {/* Phone Mockup */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative max-w-[320px] w-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3A8DFF]/30 to-[#00FFF7]/30 rounded-[50px] blur-xl"></div>
                  
                  {/* Phone Frame */}
                  <div className="relative rounded-[45px] bg-gradient-to-br from-gray-800 to-gray-900 p-3 shadow-2xl border border-gray-700">
                    <div className="rounded-[35px] overflow-hidden bg-white h-[600px] w-[300px] relative">
                      {/* Status Bar */}
                      <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                        <span className="text-xs font-medium">09:41</span>
                        <div className="rounded-full w-20 h-6 bg-black absolute left-1/2 top-0 transform -translate-x-1/2"></div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-green-500"></div>
                          <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
                          <div className="w-6 h-3 border border-gray-400 rounded-sm">
                            <div className="w-full h-full bg-green-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chat Header */}
                      <div className="px-4 py-4 bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] text-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                          N
                        </div>
                        <div>
                          <h5 className="font-bold text-sm">NOXUS AI</h5>
                          <p className="text-xs opacity-90">Online agora</p>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="flex-1 p-4 bg-gray-50 space-y-4 h-[calc(100%-140px)] overflow-auto">
                        {automation.chats.map((chat, chatIndex) => (
                          <div 
                            key={chatIndex} 
                            className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div 
                              className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                                chat.sender === 'user' 
                                  ? 'bg-[#3A8DFF] text-white rounded-br-md' 
                                  : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
                              }`}
                            >
                              {chat.message}
                            </div>
                          </div>
                        ))}
                        
                        {/* Typing Indicator */}
                        <div className="flex justify-start">
                          <div className="max-w-[75%] p-3 rounded-2xl bg-white text-gray-800 rounded-bl-md shadow-sm border">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-[#3A8DFF] rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-[#3A8DFF] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-[#3A8DFF] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input Area */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                          <input
                            type="text"
                            placeholder="Digite sua mensagem..."
                            className="flex-1 bg-transparent outline-none text-sm"
                          />
                          <button className="ml-3 p-2 rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#00FFF7] text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationsSection;
