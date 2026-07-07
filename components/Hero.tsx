"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { language } = useLanguage();
  const info = portfolioData.personalInfo;

  const handleProjectsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background glow meshes */}
      <div className="glow-bg top-[10%] left-[-10%] opacity-40 md:opacity-50" />
      <div className="glow-bg bottom-[10%] right-[-10%] opacity-30 md:opacity-40" style={{ "--accent-glow": "rgba(99, 102, 241, 0.12)" } as React.CSSProperties} />
      <div className="absolute inset-0 grid-overlay opacity-[0.4]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Avatar Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full blur-[8px] opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
              <Image
                src="/profile.jpg"
                alt={info.name}
                fill
                priority
                sizes="(max-width: 768px) 128px, 144px"
                className="object-cover"
              />
            </div>
            
            {/* Status dot / badge */}
            <span className="absolute bottom-2 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#030303]"></span>
            </span>
          </motion.div>

          {/* Intro Label */}
          <motion.span
            variants={itemVariants}
            className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-6 uppercase inline-block"
          >
            {language === "pt" ? "Disponível para Projetos" : "Available for Work"}
          </motion.span>

          {/* Name & Role */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
          >
            {info.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-neutral-300 tracking-wide mb-3"
          >
            {info.role[language]}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm text-neutral-500 tracking-wider uppercase mb-6 flex items-center gap-1.5"
          >
            <span>Foz do Iguaçu - PR</span>
            <span className="h-1 w-1 bg-neutral-600 rounded-full" />
            <span>Brazil</span>
          </motion.p>

          {/* Tagline sentence */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            {info.tagline[language]}
          </motion.p>

          {/* CTAs & Socials */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleProjectsClick}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-[#030303] text-sm font-semibold tracking-wide border border-white transition-all shadow-md shadow-white/5"
            >
              <span>{info.ctaProjects[language]}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={info.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-[#111115] hover:bg-[#1a1a22] text-white text-sm font-semibold tracking-wide border border-white/10 hover:border-white/20 transition-all shadow-md"
            >
              <MessageSquare size={16} className="text-blue-500" />
              <span>{info.ctaContact[language]}</span>
            </a>
          </motion.div>

          {/* Quick social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mt-12 text-neutral-500"
          >
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
