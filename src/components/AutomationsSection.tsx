
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
      icon: MessageSquare,
      color: "from-noxus-blue to-noxus-cyan",
      chats: [
        { sender: "user", message: "Olá, gostaria de saber sobre o plano Premium" },
        { sender: "bot", message: "Olá! Nosso plano Premium inclui acesso ilimitado, suporte prioritário e recursos exclusivos por R$ 99,90/mês. Posso enviar mais detalhes?" },
        { sender: "user", message: "Sim, por favor!" },
      ]
    },
    {
      title: "Automação de Agendamentos",
      description: "Elimine a necessidade de intermediários para agendar compromissos. Nossa IA gerencia sua agenda e confirma horários automaticamente.",
      icon: Calendar,
      color: "from-purple-500 to-blue-500",
      chats: [
        { sender: "user", message: "Preciso agendar uma consulta para amanhã" },
        { sender: "bot", message: "Claro! Temos horários disponíveis às 10h, 14h e 16h. Qual prefere?" },
        { sender: "user", message: "14h seria perfeito" },
      ]
    },
    {
      title: "Automação de Vendas",
      description: "Aumente suas vendas com um assistente virtual que guia os clientes pela jornada de compra, responde dúvidas e finaliza pedidos.",
      icon: ShoppingCart,
      color: "from-green-500 to-teal-400",
      chats: [
        { sender: "user", message: "Quero comprar o produto XYZ" },
        { sender: "bot", message: "Ótima escolha! O XYZ está disponível por R$ 199,90. Deseja finalizar a compra ou ver mais detalhes?" },
        { sender: "user", message: "Quero finalizar a compra" },
      ]
    }
  ];

  return (
    <section id="automacoes" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-noxus-blue font-medium mb-2">PRINCIPAIS AUTOMAÇÕES</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Soluções Inteligentes para seu Negócio</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nossas soluções de automação são desenvolvidas para economizar tempo, reduzir custos
            e melhorar a experiência do cliente.
          </p>
        </div>

        <div className="space-y-24">
          {automations.map((automation, index) => (
            <div 
              key={index} 
              ref={el => automationRefs.current[index] = el}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 animate-on-scroll`}
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${automation.color}`}>
                  <automation.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-noxus-dark-blue">{automation.title}</h4>
                <p className="text-gray-600">{automation.description}</p>
                <Button className="bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90">
                  Saiba mais
                </Button>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative max-w-[300px] mx-auto">
                  {/* Phone frame */}
                  <div className="rounded-[40px] bg-gray-900 p-2 shadow-xl">
                    <div className="rounded-[32px] overflow-hidden bg-white h-[560px] w-[280px] relative">
                      {/* Phone status bar */}
                      <div className="bg-gray-100 p-2 flex justify-between items-center">
                        <span className="text-xs">09:41</span>
                        <div className="rounded-full w-16 h-5 bg-black absolute left-1/2 top-0 transform -translate-x-1/2"></div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.707-7.707l-.707-.707M17.707 6.293l.707-.707M6.293 17.707l-.707.707M17.707 17.707l.707.707" />
                          </svg>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          </svg>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Chat UI */}
                      <div className="p-4 h-[calc(100%-40px)] bg-gray-50 flex flex-col">
                        <div className="flex items-center gap-2 pb-3 border-b">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-noxus-blue to-noxus-cyan flex items-center justify-center text-white font-bold">
                            N
                          </div>
                          <div>
                            <h5 className="font-bold">NOXUS AI</h5>
                            <p className="text-xs text-green-500">Online</p>
                          </div>
                        </div>
                        
                        <div className="flex-1 py-4 space-y-4 overflow-auto">
                          {automation.chats.map((chat, chatIndex) => (
                            <div 
                              key={chatIndex} 
                              className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`max-w-[80%] p-3 rounded-t-lg ${
                                  chat.sender === 'user' 
                                    ? 'bg-noxus-blue text-white rounded-bl-lg' 
                                    : 'bg-gray-200 text-gray-800 rounded-br-lg'
                                }`}
                              >
                                {chat.message}
                              </div>
                            </div>
                          ))}
                          
                          {/* Typing indicator */}
                          <div className="flex justify-start">
                            <div className="max-w-[80%] p-3 rounded-t-lg bg-gray-200 text-gray-800 rounded-br-lg">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-3">
                          <div className="flex items-center bg-white rounded-full border px-4 py-2">
                            <input
                              type="text"
                              placeholder="Digite sua mensagem..."
                              className="flex-1 outline-none text-sm"
                            />
                            <button className="ml-2 p-1 rounded-full bg-noxus-blue text-white">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationsSection;
