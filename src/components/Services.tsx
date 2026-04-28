"use client";

import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaGlobe,
} from "react-icons/fa";
import { useI18n } from "@/i18n";

export default function Services() {
  const { t } = useI18n();

  const services = [
    {
      icon: FaBullhorn,
      title: t.services.landingPages,
      description: t.services.landingPagesDesc,
      features: [
        t.services.landingPagesF1,
        t.services.landingPagesF2,
        t.services.landingPagesF3,
        t.services.landingPagesF4,
      ],
      gradient: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-500/10",
    },
    {
      icon: FaGlobe,
      title: t.services.dynamicWebsites,
      description: t.services.dynamicWebsitesDesc,
      features: [
        t.services.dynamicWebsitesF1,
        t.services.dynamicWebsitesF2,
        t.services.dynamicWebsitesF3,
        t.services.dynamicWebsitesF4,
      ],
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: FaShoppingCart,
      title: t.services.ecommerce,
      description: t.services.ecommerceDesc,
      features: [
        t.services.ecommerceF1,
        t.services.ecommerceF2,
        t.services.ecommerceF3,
        t.services.ecommerceF4,
      ],
      gradient: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-500/10",
    },
    {
      icon: FaCode,
      title: t.services.customDev,
      description: t.services.customDevDesc,
      features: [
        t.services.customDevF1,
        t.services.customDevF2,
        t.services.customDevF3,
        t.services.customDevF4,
      ],
      gradient: "from-violet-500 to-purple-600",
      iconBg: "bg-violet-500/10",
    },
    {
      icon: FaMobileAlt,
      title: t.services.mobileDev,
      description: t.services.mobileDevDesc,
      features: [
        t.services.mobileDevF1,
        t.services.mobileDevF2,
        t.services.mobileDevF3,
        t.services.mobileDevF4,
      ],
      gradient: "from-rose-500 to-pink-600",
      iconBg: "bg-rose-500/10",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t.services.sectionTag}
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient accent line at top */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
              >
                <service.icon
                  className={`text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text`}
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 shrink-0`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 mb-6">{t.services.ctaQuestion}</p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                const navbar = document.querySelector(
                  "[data-navbar]"
                ) as HTMLElement;
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const top =
                  el.getBoundingClientRect().top +
                  window.pageYOffset -
                  navbarHeight;
                window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            {t.services.ctaButton}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
