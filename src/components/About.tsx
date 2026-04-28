"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import { values } from "@/constants";

export default function About() {
  const { t } = useI18n();

  const translatedValues = [
    {
      ...values[0],
      title: t.about.valueInnovation,
      description: t.about.valueInnovationDesc,
    },
    {
      ...values[1],
      title: t.about.valueQuality,
      description: t.about.valueQualityDesc,
    },
    {
      ...values[2],
      title: t.about.valuePartnership,
      description: t.about.valuePartnershipDesc,
    },
  ];

  return (
    <div id="about" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t.about.craftingTitle}
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.craftingP1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.craftingP2}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">
                  {t.about.missionTitle}
                </h4>
                <p className="text-gray-600">{t.about.missionDescription}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            {t.about.valuesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translatedValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">
                  <value.icon />
                </div>
                <h4 className="text-xl font-semibold text-black mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
