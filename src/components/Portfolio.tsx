"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioProjects } from "@/constants";
import { useI18n } from "@/i18n";

interface PortfolioProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const categoryColors: Record<number, { badge: string; dot: string }> = {
  1: { badge: "bg-teal-500/10 text-teal-400 border-teal-500/20", dot: "bg-teal-400" },
  2: { badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", dot: "bg-blue-400" },
  3: { badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", dot: "bg-violet-400" },
  4: { badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", dot: "bg-amber-400" },
};

type TranslatedProject = (typeof portfolioProjects)[number] & {
  description: string;
  category: string;
  title: string;
};

function ProjectCard({
  project,
  index,
  total,
  colors,
}: {
  project: TranslatedProject;
  index: number;
  total: number;
  colors: { badge: string; dot: string };
}) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const textX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [isEven ? -20 : 20, 0, 0, isEven ? 10 : -10]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.6]);

  return (
    <div ref={ref}>
      <div
        className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text side — parallax drift */}
        <motion.div
          className="flex-1 space-y-6"
          style={{ x: textX, opacity: textOpacity }}
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-white/20 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${colors.badge}`}
            >
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">{project.description}</p>

          {project.features && (
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                {t.portfolio.keyFeatures}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, idx) => (
                  <motion.span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${colors.badge}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 group hover:text-white transition-colors duration-300"
          >
            <span className="border-b border-white/30 pb-0.5 group-hover:border-white transition-colors duration-300">
              {t.portfolio.viewProject}
            </span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Image side — parallax vertical */}
        <div className="flex-1 w-full">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] group bg-white/[0.02] h-[220px] sm:h-[320px] lg:h-[460px]">
            <motion.div
              className="absolute inset-[-8%]"
              style={{ y: imageY }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${colors.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                {project.category}
              </div>
              <h4 className="text-white font-bold text-lg">{project.title}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ containerRef }: PortfolioProps) {
  const { t } = useI18n();

  const translatedProjects = portfolioProjects.map((project) => {
    const descMap: Record<string, string> = {
      Crealidad: t.portfolio.crealidadDesc,
      "Espacio Omnia": t.portfolio.omniaDesc,
      Sinapz: t.portfolio.sinapzDesc,
      "Portfolio Website": t.portfolio.portfolioDesc,
    };
    const categoryMap: Record<string, string> = {
      Crealidad: t.portfolio.crealidadCategory,
      "Espacio Omnia": t.portfolio.omniaCategory,
      Sinapz: t.portfolio.sinapzCategory,
      "Portfolio Website": t.portfolio.portfolioCategory,
    };
    const titleMap: Record<string, string> = {
      "Portfolio Website": t.portfolio.portfolioTitle,
    };
    return {
      ...project,
      description: descMap[project.title] ?? project.description,
      category: categoryMap[project.title] ?? project.category,
      title: titleMap[project.title] ?? project.title,
    };
  });

  return (
    <div id="portfolio" ref={containerRef} className="bg-[#0c0c0c] relative overflow-hidden">
      <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            {t.nav.portfolio}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            {t.portfolio.title}
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {translatedProjects.map((project, index) => {
            const colors = categoryColors[project.id] ?? categoryColors[4];
            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={translatedProjects.length}
                colors={colors}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}
