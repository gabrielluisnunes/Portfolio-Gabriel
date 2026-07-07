"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { language } = useLanguage();
  const experiences = portfolioData.experiences;

  const sectionTitle = language === "pt" ? "Experiência" : "Experience";
  const sectionSubtitle = language === "pt" ? "Minha Trajetória Profissional" : "My Professional Timeline";

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-white/5 bg-[#030303]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
              <Briefcase size={14} />
              <span>{sectionTitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {sectionSubtitle}
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-[#030303] border-2 border-blue-500 flex items-center justify-center z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              </div>

              {/* Card wrapper */}
              <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-300">
                
                {/* Header row: Title & Company */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {exp.role[language]}
                    </h3>
                    <span className="text-sm font-semibold text-blue-400 mt-0.5 inline-block">
                      {exp.company}
                    </span>
                  </div>

                  {/* Dates & Location */}
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-neutral-400 font-light mt-1 md:mt-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-neutral-500" />
                      {exp.period[language]}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-neutral-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/5 w-full my-4" />

                {/* Job Bullet Points */}
                <ul className="space-y-3">
                  {exp.points[language].map((point, i) => (
                    <li key={i} className="text-sm text-neutral-400 leading-relaxed font-light flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
