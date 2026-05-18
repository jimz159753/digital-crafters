"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n } from "@/i18n";

const digitalCraftersLogo = "/digital_crafters_logo.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { locale, t, setLocale } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "portfolio", "testimonials", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbar = document.querySelector("[data-navbar]") as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      closeMobileMenu();
      setTimeout(() => scrollToSection(targetId), 280);
    } else {
      scrollToSection(targetId);
    }
  };

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav
      data-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0c0c]/95 backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">

          {/* Logo + name */}
          <button
            onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLButtonElement>, "home")}
            className="flex items-center gap-3 group"
          >
            <Image
              src={digitalCraftersLogo}
              className="rounded-lg"
              alt="Digital Crafters"
              height={36}
              width={44}
            />
            <span className="font-bold text-base tracking-tight text-white hidden sm:block">
              Digital Crafters
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/45 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lang toggle */}
            <div className="flex items-center rounded-full border border-white/15 overflow-hidden text-xs font-semibold">
              {(["en", "es"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-3 py-1.5 uppercase tracking-wide transition-all duration-300 ${
                    locale === lang
                      ? "bg-white text-black"
                      : "bg-transparent text-white/40 hover:text-white"
                  }`}
                  aria-label={lang === "en" ? "English" : "Español"}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              {t.nav.contact}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Lang toggle mobile */}
            <div className="flex items-center rounded-full border border-white/15 overflow-hidden text-xs font-semibold">
              {(["en", "es"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-2.5 py-1.5 uppercase tracking-wide transition-all duration-300 ${
                    locale === lang
                      ? "bg-white text-black"
                      : "bg-transparent text-white/40 hover:text-white"
                  }`}
                  aria-label={lang === "en" ? "English" : "Español"}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0c0c0c]/98 backdrop-blur-xl border-t border-white/[0.07]"
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    activeSection === item.id
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
