"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/constants";
import { useI18n } from "@/i18n";

export default function Testimonials() {
  const { t } = useI18n();

  const translatedTestimonials = testimonials.map((item) => {
    const contentMap: Record<string, string> = {
      Realsynch: t.testimonials.realsynchContent,
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

  return (
    <div id="testimonials" className="bg-gray-50 text-black py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {translatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <h4 className="font-semibold text-black">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.role} {t.testimonials.roleAt}{" "}
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
