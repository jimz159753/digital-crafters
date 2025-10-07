"use client";

import { motion } from "framer-motion";
import { technologies } from "@/constants";

export default function Technologies() {
  return (
    <div id="technologies" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Technologies We Use
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver modern, scalable,
            and efficient solutions for your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-2xl group-hover:bg-gray-700 transition-colors duration-300 mb-4">
                <tech.icon
                  className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
