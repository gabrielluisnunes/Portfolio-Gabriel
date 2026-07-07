"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { language } = useLanguage();
  const info = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left copyright details */}
        <p className="text-xs text-neutral-500 font-light text-center md:text-left">
          &copy; {currentYear} {info.name}.{" "}
          {language === "pt"
            ? "Todos os direitos reservados."
            : "All rights reserved."}
        </p>

        {/* Right tech credit details */}
        <p className="text-xs text-neutral-600 font-light text-center md:text-right">
          {language === "pt" ? "Desenvolvido com" : "Built with"}{" "}
          <span className="text-neutral-400 font-medium">Next.js 14</span>,{" "}
          <span className="text-neutral-400 font-medium">Tailwind CSS</span> &{" "}
          <span className="text-neutral-400 font-medium">Framer Motion</span>.
        </p>
      </div>
    </footer>
  );
}
