"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Mail } from "lucide-react";

export default function About() {
  const { language } = useLanguage();
  const summaryText = portfolioData.summary[language];
  const info = portfolioData.personalInfo;

  const sectionTitle = language === "pt" ? "Sobre Mim" : "About Me";
  const sectionSubtitle = language === "pt" ? "Quem sou e minha trajetória" : "Who I am and my background";

  const cards = [
    {
      icon: <MapPin className="text-blue-500" size={20} />,
      label: language === "pt" ? "Localização" : "Location",
      value: info.location,
    },
    {
      icon: <GraduationCap className="text-blue-500" size={20} />,
      label: language === "pt" ? "Formação" : "Education",
      value: language === "pt" ? "Engenharia de Software (2027)" : "Software Engineering (2027)",
    },
    {
      icon: <Mail className="text-blue-500" size={20} />,
      label: "Email",
      value: info.email,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/5 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
              <User size={14} />
              <span>{sectionTitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {sectionSubtitle}
            </h2>
          </motion.div>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-6">
              {summaryText}
            </p>
            <div className="h-[1px] bg-white/5 w-full my-6" />
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              {language === "pt" 
                ? "Comprometido em construir códigos limpos, arquiteturas robustas e interfaces de usuário modernas. Sempre em busca de desafios tecnológicos que expandam meus conhecimentos e agreguem valor aos usuários finais."
                : "Committed to writing clean code, building robust architectures, and creating modern user interfaces. Always seeking technological challenges that expand my knowledge and add value to end-users."
              }
            </p>
          </motion.div>

          {/* Quick Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="glass-card p-5 rounded-2xl flex items-center gap-4 transition-all duration-300"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  {card.icon}
                </div>
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider block font-medium">
                    {card.label}
                  </span>
                  <span className="text-sm md:text-base text-white font-medium block mt-0.5">
                    {card.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
