"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBullhorn, FaCode, FaMobileAlt, FaShoppingCart, FaGlobe } from "react-icons/fa";
import { useI18n } from "@/i18n";

export default function Services() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: FaBullhorn,
      title: t.services.landingPages,
      description: t.services.landingPagesDesc,
      features: [t.services.landingPagesF1, t.services.landingPagesF2, t.services.landingPagesF3, t.services.landingPagesF4],
      accentText: "text-amber-400",
      accentBg: "bg-amber-500",
    },
    {
      icon: FaGlobe,
      title: t.services.dynamicWebsites,
      description: t.services.dynamicWebsitesDesc,
      features: [t.services.dynamicWebsitesF1, t.services.dynamicWebsitesF2, t.services.dynamicWebsitesF3, t.services.dynamicWebsitesF4],
      accentText: "text-blue-400",
      accentBg: "bg-blue-500",
    },
    {
      icon: FaShoppingCart,
      title: t.services.ecommerce,
      description: t.services.ecommerceDesc,
      features: [t.services.ecommerceF1, t.services.ecommerceF2, t.services.ecommerceF3, t.services.ecommerceF4],
      accentText: "text-emerald-400",
      accentBg: "bg-emerald-500",
    },
    {
      icon: FaCode,
      title: t.services.customDev,
      description: t.services.customDevDesc,
      features: [t.services.customDevF1, t.services.customDevF2, t.services.customDevF3, t.services.customDevF4],
      accentText: "text-violet-400",
      accentBg: "bg-violet-500",
    },
    {
      icon: FaMobileAlt,
      title: t.services.mobileDev,
      description: t.services.mobileDevDesc,
      features: [t.services.mobileDevF1, t.services.mobileDevF2, t.services.mobileDevF3, t.services.mobileDevF4],
      accentText: "text-rose-400",
      accentBg: "bg-rose-500",
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navbar = document.querySelector("[data-navbar]") as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-[#0c0c0c] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            {t.services.sectionTag}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            {t.services.title}
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="divide-y divide-white/[0.06]">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={service.title}
                className="relative py-5 lg:py-7 cursor-pointer select-none"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-60px" }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-5 bottom-5 w-0.5 rounded-full ${service.accentBg} transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                />

                {/* Main row */}
                <div className="flex items-center gap-5 lg:gap-8 pl-4">
                  {/* Number */}
                  <span
                    className={`text-lg font-bold tabular-nums transition-colors duration-300 w-7 shrink-0 text-right ${isOpen ? service.accentText : "text-white/15"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-white/10 border-white/15" : "bg-white/[0.04] border-white/[0.07]"}`}>
                    <service.icon
                      className={`text-lg transition-colors duration-300 ${isOpen ? service.accentText : "text-white/25"}`}
                    />
                  </div>

                  {/* Title + feature tags */}
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 shrink-0 ${isOpen ? "text-white" : "text-white/55"}`}>
                      {service.title}
                    </h3>
                    <div className="hidden sm:flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className={`text-[11px] border rounded-full px-2.5 py-0.5 transition-all duration-300 whitespace-nowrap ${isOpen ? "text-white/45 border-white/20" : "text-white/20 border-white/[0.07]"}`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chevron — rotates when open */}
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-white/30 rotate-90" : "border-white/10"}`}>
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${isOpen ? "text-white/60" : "text-white/20"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Expandable description */}
                <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden min-h-0">
                    <div className="flex gap-5 lg:gap-8 pt-4 pl-4">
                      <div className="w-7 shrink-0" />
                      <div className="w-11 shrink-0" />
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl pb-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-14 pt-10 border-t border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            {t.services.ctaQuestion}
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shrink-0 cursor-pointer"
          >
            {t.services.ctaButton}
            <span className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
