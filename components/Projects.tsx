"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { language } = useLanguage();
  const projects = portfolioData.projects;

  const sectionTitle = language === "pt" ? "Projetos" : "Projects";
  const sectionSubtitle = language === "pt" ? "Projetos em Destaque" : "Featured Projects";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-white/5 bg-[#030303]">
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
              <Code size={14} />
              <span>{sectionTitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {sectionSubtitle}
            </h2>
          </motion.div>
        </div>

        {/* Projects Grid: 1 col mobile, 2 col md, 3 col lg */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => {
            const CardContent = (
              <>
                <div>
                  {/* Visual card glow top-right */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Title and actions */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                      <span>{project.title}</span>
                      {project.link && (
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                      )}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-neutral-500">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all">
                        SaaS
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                    {project.description[language]}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div>
                  <div className="h-[1px] bg-white/5 w-full my-4" />
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium tracking-wide text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/5 px-2 py-0.5 rounded transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.link ? (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/5 transition-all duration-300 relative group overflow-hidden cursor-pointer"
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/5 transition-all duration-300 relative group overflow-hidden"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
