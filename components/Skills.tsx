"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Settings, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const { language } = useLanguage();
  const skillsData = portfolioData.skills;

  const sectionTitle = language === "pt" ? "Habilidades" : "Skills";
  const sectionSubtitle = language === "pt" ? "Tecnologias e Competências" : "Technologies & Competencies";

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "languages-frameworks":
        return <Code2 className="text-blue-500" size={22} />;
      case "frontend":
        return <Layout className="text-blue-500" size={22} />;
      case "backend":
        return <Server className="text-blue-500" size={22} />;
      case "database":
        return <Database className="text-blue-500" size={22} />;
      case "devops-tools":
        return <Settings className="text-blue-500" size={22} />;
      default:
        return <CheckCircle2 className="text-blue-500" size={22} />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section id="skills" className="py-24 relative overflow-hidden border-t border-white/5 bg-[#030303]">
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
              <Code2 size={14} />
              <span>{sectionTitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {sectionSubtitle}
            </h2>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-6 rounded-2xl border border-white/5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card top details */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-all duration-300">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide">
                  {group.title[language]}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
                    <span className="font-light tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
