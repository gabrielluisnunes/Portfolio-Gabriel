"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, Download, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: { pt: "Início", en: "Home" } },
    { id: "about", label: portfolioData.navigation.about },
    { id: "skills", label: portfolioData.navigation.skills },
    { id: "experience", label: portfolioData.navigation.experience },
    { id: "projects", label: portfolioData.navigation.projects },
    { id: "education", label: portfolioData.navigation.education },
    { id: "contact", label: portfolioData.navigation.contact },
  ];

  // Scroll Spy and Header Scroll Style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detect when section is roughly in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030303]/85 border-b border-white/5 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="text-lg font-bold tracking-wider hover:opacity-85 transition-opacity"
        >
          GABRIEL<span className="text-blue-500">.</span>NUNES
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    activeSection === item.id
                      ? "text-blue-500 font-semibold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {item.label[language]}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-neutral-200 bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded border border-white/5 transition-all"
              title={language === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              <Globe size={13} className="text-blue-500" />
              <span>{language === "pt" ? "EN" : "PT"}</span>
            </button>

            {/* Resume Button */}
            <a
              href={portfolioData.personalInfo.resumePath}
              download="Gabriel_Luis_Parede_Nunes_CV.pdf"
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-full border border-blue-500/20 transition-all shadow-md shadow-blue-500/10"
            >
              <Download size={13} />
              <span>{language === "pt" ? "Currículo" : "Resume"}</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Language Selector (Mobile view, visible on navbar) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-neutral-200 bg-white/5 px-2 py-1.5 rounded border border-white/5 transition-all"
          >
            <Globe size={13} className="text-blue-500" />
            <span>{language === "pt" ? "EN" : "PT"}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0c] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`text-base font-medium block py-1.5 transition-colors ${
                        activeSection === item.id
                          ? "text-blue-500 font-semibold"
                          : "text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      {item.label[language]}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="h-[1px] bg-white/5 w-full" />

              {/* Action Buttons (Mobile) */}
              <div className="flex flex-col space-y-4 pb-2">
                <a
                  href={portfolioData.personalInfo.resumePath}
                  download="Gabriel_Luis_Parede_Nunes_CV.pdf"
                  className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider text-white bg-blue-600 hover:bg-blue-500 py-3 rounded-full border border-blue-500/20 transition-all shadow-md shadow-blue-500/10"
                >
                  <Download size={15} />
                  <span>{language === "pt" ? "Baixar Currículo" : "Download Resume"}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
