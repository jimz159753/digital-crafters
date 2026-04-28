"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/i18n";

const digitalCraftersLogo = "/digital_crafters_logo.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, t, setLocale } = useI18n();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    closeMobileMenu();
    const element = document.getElementById(targetId);
    if (element) {
      // Get the navbar element to calculate its actual height
      const navbar = document.querySelector("[data-navbar]") as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // Fallback height

      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect + window.pageYOffset - navbarHeight;

      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      });
    }
  };

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "technologies", label: t.nav.technologies },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav
      data-navbar
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={digitalCraftersLogo}
              className="rounded-md"
              alt="Digital Crafters"
              height={40}
              width={50}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center rounded-full border border-gray-300 overflow-hidden text-sm font-semibold">
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1.5 transition-all duration-300 ${
                  locale === "en"
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:text-black"
                }`}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => setLocale("es")}
                className={`px-3 py-1.5 transition-all duration-300 ${
                  locale === "es"
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:text-black"
                }`}
                aria-label="Español"
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <div className="flex items-center rounded-full border border-gray-300 overflow-hidden text-sm font-semibold">
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1.5 transition-all duration-300 ${
                  locale === "en"
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:text-black"
                }`}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => setLocale("es")}
                className={`px-2.5 py-1.5 transition-all duration-300 ${
                  locale === "es"
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:text-black"
                }`}
                aria-label="Español"
              >
                ES
              </button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <motion.div
              className="px-8 py-4 space-y-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
