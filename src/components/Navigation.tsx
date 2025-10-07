"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const digitalCraftersLogo = "/digital_crafters.webp";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              alt="Digital Crafters"
              height={180}
              width={180}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={(e) => handleNavClick(e, "about")}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={(e) => handleNavClick(e, "portfolio")}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={(e) => handleNavClick(e, "technologies")}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
            >
              Technologies
            </button>
            <button
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
              <motion.button
                onClick={(e) => handleNavClick(e, "about")}
                className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                About
              </motion.button>
              <motion.button
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.25 }}
              >
                Portfolio
              </motion.button>
              <motion.button
                onClick={(e) => handleNavClick(e, "testimonials")}
                className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                Testimonials
              </motion.button>
              <motion.button
                onClick={(e) => handleNavClick(e, "technologies")}
                className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.35 }}
              >
                Technologies
              </motion.button>
              <motion.button
                onClick={(e) => handleNavClick(e, "contact")}
                className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Contact
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
