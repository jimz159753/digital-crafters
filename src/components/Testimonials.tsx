"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/constants";
import { useI18n } from "@/i18n";

const quoteAccents = [
  "text-teal-400",
  "text-blue-400",
  "text-violet-400",
  "text-amber-400",
];

const avatarColors = [
  "bg-teal-500/20 text-teal-400",
  "bg-blue-500/20 text-blue-400",
  "bg-violet-500/20 text-violet-400",
  "bg-amber-500/20 text-amber-400",
];

export default function Testimonials() {
  const { t } = useI18n();

  const translatedTestimonials = testimonials.map((item) => {
    const contentMap: Record<string, string> = {
      Crealidad: t.testimonials.crealidadContent,
      "Espacio Omnia": t.testimonials.omniaContent,
      "LightMind Wellness": t.testimonials.lightmindContent,
      "Guadalajara Zoo": t.testimonials.zooContent,
    };
    const roleMap: Record<string, string> = {
      "Operations Director": t.testimonials.roleOperationsDirector,
      Founder: t.testimonials.roleFounder,
      "Digital Innovation Manager": t.testimonials.roleDigitalInnovation,
    };
    return {
      ...item,
      content: contentMap[item.company] ?? item.content,
      role: roleMap[item.role] ?? item.role,
    };
  });

  const doubled = [...translatedTestimonials, ...translatedTestimonials];

  return (
    <div id="testimonials" className="bg-[#0c0c0c] py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            {t.nav.testimonials}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.testimonials.title}
          </h2>
        </motion.div>
      </div>

      {/* Carousel — full width, outside max-w container */}
      <div
        className="relative overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex gap-5 w-max [animation:marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {doubled.map((testimonial, index) => {
            const colorIndex = (index % translatedTestimonials.length);
            const initials = testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();

            return (
              <div
                key={index}
                className="w-80 flex-shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 flex flex-col hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 cursor-default"
              >
                {/* Accent quote mark */}
                <div className={`text-5xl font-serif leading-none mb-3 select-none ${quoteAccents[colorIndex]}`}>
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${avatarColors[colorIndex]}`}>
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-sm leading-tight truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/30 text-xs mt-0.5 truncate">
                      {testimonial.role}{" "}
                      <span className="text-white/20">{t.testimonials.roleAt}</span>{" "}
                      <span className="text-white/50 font-medium">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
