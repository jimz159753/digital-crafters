"use client";

import { motion } from "framer-motion";
import { technologies } from "@/constants";
import { useI18n } from "@/i18n";

export default function Technologies() {
  const { t } = useI18n();

  return (
    <div id="technologies" className="bg-[#0c0c0c] text-white py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-teal-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            {t.nav.technologies}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {t.technologies.title}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="w-full aspect-square flex items-center justify-center bg-white/[0.03] border border-white/[0.06] rounded-2xl group-hover:bg-white/[0.07] group-hover:border-white/[0.12] transition-all duration-300 mb-3">
                <tech.icon
                  className={`text-3xl ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
              <span className="text-xs font-medium text-white/30 group-hover:text-white/70 transition-colors duration-300 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
