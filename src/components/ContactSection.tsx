
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, ArrowDown, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo seu contato. Retornaremos em breve.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-noxus-blue font-medium mb-2 flex items-center justify-center gap-2">
              <MessageSquare className="h-5 w-5" />
              CONTATO
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Vamos Conversar</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Entre em contato para saber mais sobre nossas soluções ou agendar uma demonstração personalizada
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <ArrowDown className="h-8 w-8 text-noxus-blue animate-bounce" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-noxus-dark-blue mb-2">Informações de Contato</h4>
              <p className="text-gray-600 mb-6">
                Estamos disponíveis para ajudar com qualquer dúvida sobre nossas soluções de IA.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-noxus-blue to-noxus-cyan flex items-center justify-center text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:contato@noxus.ai" className="text-noxus-blue hover:underline">contato@noxus.ai</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-noxus-blue to-noxus-cyan flex items-center justify-center text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <a href="tel:+551198765432" className="text-noxus-blue hover:underline">(11) 98765-4321</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-noxus-dark-blue mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                  <motion.a 
                    key={social}
                    href={`https://${social}.com/noxusai`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visite nosso perfil no ${social}`}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-noxus-blue hover:to-noxus-cyan hover:text-white transition-all"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      {social === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                      {social === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.035 10.035 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />}
                      {social === 'instagram' && <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />}
                      {social === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:col-span-3 bg-white rounded-lg p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-noxus-blue to-noxus-cyan flex items-center justify-center text-white">
                <Send className="h-5 w-5" />
              </div>
              <h4 className="text-xl font-bold text-noxus-dark-blue">Envie uma Mensagem</h4>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome*</label>
                  <motion.div
                    variants={inputVariants}
                    whileFocus="focus"
                    initial="blur"
                  >
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-noxus-blue transition-all duration-300"
                    />
                  </motion.div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <motion.div
                    variants={inputVariants}
                    whileFocus="focus"
                    initial="blur"
                  >
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-noxus-blue transition-all duration-300"
                    />
                  </motion.div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <motion.div
                    variants={inputVariants}
                    whileFocus="focus"
                    initial="blur"
                  >
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-noxus-blue transition-all duration-300"
                    />
                  </motion.div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <motion.div
                    variants={inputVariants}
                    whileFocus="focus"
                    initial="blur"
                  >
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-noxus-blue transition-all duration-300"
                    />
                  </motion.div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem*</label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                >
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gray-200 focus:border-noxus-blue transition-all duration-300 resize-none"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-noxus-blue to-noxus-cyan text-white hover:opacity-90 py-6 rounded-xl relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </motion.div>

              <motion.p 
                className="text-center text-sm text-gray-500 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Responderemos em até 24 horas úteis
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
