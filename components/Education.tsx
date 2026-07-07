"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const { language } = useLanguage();
  const educationItems = portfolioData.education;
  const certifications = portfolioData.certifications;
  const languages = portfolioData.languages;

  const sectionTitle = language === "pt" ? "Formação" : "Education";
  const sectionSubtitle = language === "pt" ? "Educação e Certificações" : "Education & Credentials";

  return (
    <section id="education" className="py-24 relative overflow-hidden border-t border-white/5 bg-[#030303]">
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
              <GraduationCap size={14} />
              <span>{sectionTitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {sectionSubtitle}
            </h2>
          </motion.div>
        </div>

        {/* Content Grid: Columns split on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Academic Degrees (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-blue-500" size={18} />
              <h3 className="text-lg font-bold text-white tracking-wide">
                {language === "pt" ? "Graus Acadêmicos" : "Academic Degrees"}
              </h3>
            </div>

            <div className="space-y-4">
              {educationItems.map((edu, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-2">
                    {edu.period[language]}
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug mb-1">
                    {edu.degree[language]}
                  </h4>
                  <p className="text-sm text-neutral-400 font-light">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Certifications & Languages (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Certifications Card list */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-blue-500" size={18} />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {language === "pt" ? "Cursos e Certificados" : "Courses & Certificates"}
                </h3>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={15} />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-neutral-500 font-light mt-0.5">
                        {cert.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-blue-500" size={18} />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {languages.title[language]}
                </h3>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-300">
                  {language === "pt" ? "Inglês" : "English"}
                </span>
                <span className="text-xs font-semibold px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full">
                  {languages.value[language]}
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
