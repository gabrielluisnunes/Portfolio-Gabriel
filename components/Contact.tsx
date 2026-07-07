"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { MessageSquare, Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { language } = useLanguage();
  const info = portfolioData.personalInfo;

  const sectionTitle = language === "pt" ? "Contato" : "Contact";
  const headline = language === "pt" ? "Vamos construir algo juntos?" : "Let's build something together?";
  const subtitle = language === "pt"
    ? "Estou disponível para novos projetos, parcerias e oportunidades de trabalho. Escolha o canal de sua preferência."
    : "I'm available for new projects, partnerships, and job opportunities. Choose your preferred channel below.";

  const channels = [
    {
      name: "WhatsApp",
      icon: <MessageSquare size={24} className="text-emerald-500" />,
      value: info.whatsapp,
      link: info.whatsappLink,
      cta: language === "pt" ? "Enviar mensagem" : "Send message",
      color: "hover:border-emerald-500/30 group-hover:bg-emerald-500/5",
    },
    {
      name: "Email",
      icon: <Mail size={24} className="text-blue-500" />,
      value: info.email,
      link: `mailto:${info.email}`,
      cta: language === "pt" ? "Escrever email" : "Write email",
      color: "hover:border-blue-500/30 group-hover:bg-blue-500/5",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} className="text-sky-500" />,
      value: "gabriel-luis-parede-nunes",
      link: info.linkedin,
      cta: language === "pt" ? "Conectar" : "Connect",
      color: "hover:border-sky-500/30 group-hover:bg-sky-500/5",
    },
    {
      name: "GitHub",
      icon: <Github size={24} className="text-neutral-300" />,
      value: "gabrielluisnunes",
      link: info.github,
      cta: language === "pt" ? "Ver perfil" : "View profile",
      color: "hover:border-white/20 group-hover:bg-white/5",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/5 bg-[#030303]">
      <div className="glow-bg top-[20%] right-[-10%] opacity-20" style={{ "--accent-glow": "rgba(59, 130, 246, 0.1)" } as React.CSSProperties} />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
              <Send size={14} />
              <span>{sectionTitle}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              {headline}
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed font-light">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Contact Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {channels.map((channel, i) => (
            <motion.a
              key={i}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className={`glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/5 transition-all duration-300 group ${channel.color}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 transition-colors">
                    {channel.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-neutral-400 font-light mt-0.5 select-all">
                      {channel.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
              </div>
              
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                  {channel.cta}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
