"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/i18n";

const VIDEOS = [
  { src: "/videos/1.mov", label: "Video 1" },
  { src: "/videos/2.mov", label: "Video 2" },
];

function PhoneMockup({
  src,
  onExpand,
}: {
  src: string;
  onExpand: () => void;
}) {
  return (
    <div className="relative flex-shrink-0">
      {/* Side volume buttons */}
      <div className="absolute -left-[3px] top-16 sm:top-20 w-[3px] h-5 sm:h-7 bg-white/10 rounded-l-sm" />
      <div className="absolute -left-[3px] top-24 sm:top-32 w-[3px] h-8 sm:h-10 bg-white/10 rounded-l-sm" />
      <div className="absolute -left-[3px] top-36 sm:top-48 w-[3px] h-8 sm:h-10 bg-white/10 rounded-l-sm" />
      <div className="absolute -right-[3px] top-28 sm:top-36 w-[3px] h-10 sm:h-14 bg-white/10 rounded-r-sm" />

      {/* Phone shell — box-shadow border avoids pixelation from rotation */}
      <div
        className="w-[175px] sm:w-[220px] lg:w-[260px] bg-[#0d0d0d] rounded-[32px] sm:rounded-[40px] lg:rounded-[44px] p-1.5 sm:p-2"
        style={{
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.13), 0 32px 60px -12px rgba(0,0,0,0.8)",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Dynamic island */}
        <div className="flex justify-center items-center h-7 sm:h-9 lg:h-10">
          <div className="w-14 h-4 sm:w-20 sm:h-5 lg:w-24 lg:h-6 bg-black rounded-full" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }} />
        </div>

        {/* Screen */}
        <div className="relative rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] overflow-hidden bg-black" style={{ transform: "translateZ(0)" }}>
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
          />

          {/* Expand button */}
          <button
            onClick={onExpand}
            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 hover:border-white/40 transition-all duration-200 group"
            aria-label="Ver video completo"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
          </button>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center items-center h-5 sm:h-6 lg:h-7">
          <div className="w-14 sm:w-16 lg:w-20 h-[3px] bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[90vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src}
          controls
          autoPlay
          className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl shadow-black/60"
          style={{ aspectRatio: "9/16" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          aria-label="Cerrar"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>

      {/* Click outside hint */}
      <p className="absolute bottom-6 text-white/20 text-xs tracking-widest uppercase select-none">
        Click fuera para cerrar
      </p>
    </motion.div>
  );
}

export default function About() {
  const { t } = useI18n();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div id="about" className="bg-[#0c0c0c] py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            {t.nav.about}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">

          {/* Left — text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              {t.about.craftingTitle}
            </h3>
            <div className="space-y-5">
              <p className="text-gray-400 leading-relaxed">{t.about.craftingP1}</p>
              <p className="text-gray-400 leading-relaxed">{t.about.craftingP2}</p>
            </div>
          </motion.div>

          {/* Right — mission card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8 h-auto min-h-[280px] lg:h-[400px] flex flex-col justify-between gap-8">
              <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/[0.06] rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/[0.05] rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/[0.08] flex items-center justify-center mb-7">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-3">{t.about.missionTitle}</p>
                <h4 className="text-white text-2xl font-bold leading-snug">
                  {t.about.missionDescription}
                </h4>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social / phones section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left — copy */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {t.about.valuesTitle}
              </h3>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              {t.about.socialDesc}
            </p>

            <div className="flex justify-center lg:justify-start">
            <a
              href="https://www.tiktok.com/@digital.crafters3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.10] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
              <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                @digital.crafters3
              </span>
              <svg className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            </div>
          </div>

          {/* Right — Two phone mockups */}
          <motion.div
            className="flex items-end justify-center flex-shrink-0 w-full lg:w-auto h-[430px] sm:h-[520px] lg:h-[620px] relative overflow-visible"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-20" style={{ transform: "rotate(-6deg) translateY(16px)", willChange: "transform" }}>
              <PhoneMockup
                src={VIDEOS[0].src}
                onExpand={() => setActiveVideo(VIDEOS[0].src)}
              />
            </div>
            <div className="relative z-10 -ml-4 sm:-ml-5 lg:-ml-6" style={{ transform: "rotate(5deg)", willChange: "transform" }}>
              <PhoneMockup
                src={VIDEOS[1].src}
                onExpand={() => setActiveVideo(VIDEOS[1].src)}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
