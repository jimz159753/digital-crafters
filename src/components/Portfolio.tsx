"use client";

import { motion } from "framer-motion";
import { portfolioProjects, stats } from "@/constants";

interface PortfolioProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Portfolio({ containerRef }: PortfolioProps) {
  return (
    <div
      id="portfolio"
      ref={containerRef}
      className="bg-white text-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-black mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our latest projects and see how we bring ideas to life
            through innovative design and technology. Each project represents
            our commitment to excellence and creative problem-solving.
          </p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {portfolioProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32 ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="flex-1 space-y-8"
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="inline-block">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider bg-gray-100 px-4 py-2 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  {project.title}
                </h3>

                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {project.features && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-black">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.6 + idx * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-semibold text-lg group bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  View Project Site
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </motion.a>
              </motion.div>

              <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Project Number */}
                  <motion.div
                    className="absolute -top-4 -left-4 z-10 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className="text-white font-bold text-xl mb-2">
                        {project.title}
                      </h4>
                      <p className="text-white text-opacity-80 text-sm">
                        {project.description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
