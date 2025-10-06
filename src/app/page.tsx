"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaAws,
  FaGoogle,
  FaDigitalOcean,
  FaStar,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiDrizzle,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
const digitalCraftersLogo = "/digital_crafters.webp";
const heroVideo = "/hero.mp4";
import Image from "next/image";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  field: z.string().min(2, "Field must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  captcha: z
    .boolean()
    .refine((val) => val === true, "Please verify you are not a robot"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const portfolioProjects = [
  {
    id: 1,
    title: "Realsynch",
    description:
      "A comprehensive business intelligence platform for real estate professionals built with React and Node.js. Realsynch seamlessly integrates with 30+ real estate systems, aggregating and analyzing business data through AWS cloud infrastructure. The platform features real-time dashboards, automated reporting, and predictive analytics powered by custom algorithms. Built with MongoDB for flexible data storage and deployed on AWS EC2 with S3 for secure file management, delivering actionable insights for brokerages and agents.",
    image: "/realsynch.png",
    category: "Business Intelligence",
    features: [
      "React Dashboard",
      "AWS Cloud Infrastructure",
      "MongoDB Integration",
      "Real-time Analytics",
    ],
    url: "https://realsynch.com",
  },
  {
    id: 2,
    title: "Espacio Omnia",
    description:
      "A modern event and coworking space management platform developed with Next.js and React. The application streamlines booking systems, member management, and event coordination through an intuitive interface. Built with PostgreSQL for robust data management and deployed on AWS with EC2 hosting and S3 media storage. Features real-time availability tracking, automated billing, and integrated payment processing, providing a seamless experience for both administrators and members.",
    image: "/omnia.png",
    category: "Platform",
    features: [
      "Next.js Framework",
      "PostgreSQL Database",
      "AWS Deployment",
      "Real-time Booking",
    ],
    url: "https://espacioomnia.com",
  },
  {
    id: 3,
    title: "Lightmind Mobile App",
    description:
      "An AI-powered meditation and wellness mobile application built with React Native for cross-platform functionality. Lightmind delivers personalized meditation experiences through intelligent mood analysis and adaptive content delivery. The backend leverages Node.js with MongoDB for user data and session tracking, while AWS S3 stores audio content and meditation guides. Features include real-time ambient soundscapes, progress tracking, and customized meditation sessions tailored to individual user needs and goals.",
    image: "/lightmind.png",
    category: "Mobile App",
    features: [
      "React Native",
      "AI Personalization",
      "MongoDB Backend",
      "AWS Media Delivery",
    ],
    url: "https://apps.apple.com/us/app/lightmind-tailored-meditation/id1662211527",
  },
  {
    id: 4,
    title: "Guadalajara Zoo",
    description:
      "A comprehensive digital ecosystem for the Guadalajara Zoo developed with React and Node.js. The platform integrates ticket purchasing, visitor management, interactive animal exhibits, and educational content delivery. Built on AWS infrastructure with EC2 hosting and PostgreSQL database, the system handles real-time attendance tracking and analytics. Features include mobile app integration, virtual tours, interactive maps, and AWS S3-powered multimedia content for an enhanced visitor experience both on-site and online.",
    image: "/zoogdl.png",
    category: "Public Service",
    features: [
      "React Platform",
      "AWS Infrastructure",
      "PostgreSQL Database",
      "Mobile Integration",
    ],
    url: "https://zooguadalajara.com.mx",
  },
];

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector("[data-navbar]") as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // Approximate navbar height

      const elementRect = element.getBoundingClientRect().top;
      const offset = elementRect + window.pageYOffset - navbarHeight;
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(0, offset),
          behavior: "smooth",
        });
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav
        data-navbar
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={digitalCraftersLogo}
                alt="Digital Crafters"
                height={180}
                width={180}
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={(e) => scrollToSection(e, "about")}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={(e) => scrollToSection(e, "portfolio")}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={(e) => scrollToSection(e, "testimonials")}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={(e) => scrollToSection(e, "technologies")}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                Technologies
              </button>
              <button
                onClick={(e) => scrollToSection(e, "contact")}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <motion.div
                className="px-8 py-4 space-y-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button
                  onClick={(e) => scrollToSection(e, "about")}
                  className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  About
                </motion.button>
                <motion.button
                  onClick={(e) => scrollToSection(e, "portfolio")}
                  className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                >
                  Portfolio
                </motion.button>
                <motion.button
                  onClick={(e) => scrollToSection(e, "testimonials")}
                  className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Testimonials
                </motion.button>
                <motion.button
                  onClick={(e) => scrollToSection(e, "technologies")}
                  className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.35 }}
                >
                  Technologies
                </motion.button>
                <motion.button
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Contact
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div id="home" className="min-h-screen bg-gray-100 p-8 relative pt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.8)" }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute sm:w-3/4 w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl flex flex-col gap-4 items-center">
          <motion.p
            className="hero-text text-white md:text-6xl text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Scale Business to drive Results
          </motion.p>
          <motion.p
            className="hero-text text-gray-300 sm:text-sm text-base text-center md:w-1/2 w-4/5 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Manage all your data and workflows in one place. Automate processes,
            gain insights, and scale your business with ease.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
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
              About Digital Crafters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate developers and designers dedicated to
              creating exceptional digital experiences that drive business
              growth and innovation.
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
                Crafting Digital Excellence
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Digital Crafters, we believe in the power of technology to
                  transform businesses. Our team combines technical expertise
                  with creative vision to deliver solutions that not only meet
                  your needs but exceed your expectations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From concept to deployment, we work closely with our clients
                  to understand their unique challenges and create tailored
                  solutions that drive real results. Our commitment to quality
                  and innovation has helped businesses across various industries
                  scale and succeed in the digital landscape.
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
                    Our Mission
                  </h4>
                  <p className="text-gray-600">
                    To empower businesses through innovative technology
                    solutions that drive growth and success.
                  </p>
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
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
                  icon: <FaLightbulb />,
                },
                {
                  title: "Quality",
                  description:
                    "Every project is crafted with meticulous attention to detail, ensuring robust, scalable, and maintainable code.",
                  icon: <FaStar />,
                },
                {
                  title: "Partnership",
                  description:
                    "We work as an extension of your team, building long-term relationships based on trust and mutual success.",
                  icon: <FaHandshake />,
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
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

      {/* Portfolio Section */}
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
              {[
                { number: "25+", label: "Projects Completed" },
                { number: "25+", label: "Happy Clients" },
                { number: "100%", label: "Success Rate" },
                { number: "12+", label: "Technologies" },
              ].map((stat, index) => (
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

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&#39;t just take our word for it. Here&#39;s what our clients
              have to say about their experience working with Digital Crafters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Scott Wilson",
                company: "Realsynch",
                role: "CEO",
                content:
                  "Digital Crafters built our entire business intelligence platform from the ground up. Their expertise in React, Node.js, and AWS infrastructure helped us create a scalable solution that integrates seamlessly with 30+ real estate systems. The real-time analytics dashboard they developed has transformed how agents track their performance.",
                rating: 5,
              },
              {
                name: "Ana Martinez",
                company: "Espacio Omnia",
                role: "Operations Director",
                content:
                  "The booking and event management platform Digital Crafters created exceeded all expectations. Built with Next.js and PostgreSQL, it handles our complex scheduling needs flawlessly. The AWS deployment ensures we never experience downtime, and our members love the intuitive interface.",
                rating: 5,
              },
              {
                name: "Pablo Gutierrez",
                company: "LightMind Wellness",
                role: "Founder",
                content:
                  "Digital Crafters developed our AI-powered meditation app with React Native, delivering a beautiful cross-platform experience. The MongoDB backend and AWS infrastructure they implemented handle thousands of daily users seamlessly. Their attention to UX design made our app truly stand out in the wellness space.",
                rating: 5,
              },
              {
                name: "Carlos Mendoza",
                company: "Guadalajara Zoo",
                role: "Digital Innovation Manager",
                content:
                  "Our comprehensive digital ecosystem, built by Digital Crafters using React and PostgreSQL, revolutionized visitor experience. From ticket purchasing to virtual tours, every aspect runs smoothly on AWS infrastructure. The mobile app integration and real-time analytics have significantly improved our operations.",
                rating: 5,
              },
            ].map((testimonial, index) => (
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
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
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
              We work with cutting-edge technologies to deliver modern,
              scalable, and efficient solutions for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { icon: FaReact, name: "React", color: "text-blue-400" },
              { icon: SiReact, name: "React Native", color: "text-blue-400" },
              { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
              { icon: FaSass, name: "Sass", color: "text-pink-500" },
              { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
              { icon: SiDrizzle, name: "Drizzle", color: "text-green-400" },
              {
                icon: SiPostgresql,
                name: "PostgreSQL",
                color: "text-blue-500",
              },
              { icon: FaAws, name: "AWS", color: "text-orange-400" },
              {
                icon: FaDigitalOcean,
                name: "DigitalOcean",
                color: "text-blue-400",
              },
              { icon: FaGoogle, name: "Google Cloud", color: "text-blue-500" },
              {
                icon: GiArtificialIntelligence,
                name: "AI/ML",
                color: "text-purple-500",
              },
            ].map((tech, index) => (
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

      {/* Contact Form Section */}
      <div id="contact" className="bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Let&#39;s Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Get in touch with us and
              let&#39;s discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center p-12 bg-green-50 rounded-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. We&#39;ll get back to you
          within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company Name *
          </label>
          <input
            {...register("company")}
            type="text"
            id="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Your company name"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Industry/Field *
          </label>
          <input
            {...register("field")}
            type="text"
            id="field"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="e.g., Technology, Healthcare, Finance"
          />
          {errors.field && (
            <p className="mt-1 text-sm text-red-600">{errors.field.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Project Description *
        </label>
        <textarea
          {...register("description")}
          id="description"
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Tell us about your project, goals, and how we can help you..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="flex items-center">
        <input
          {...register("captcha")}
          type="checkbox"
          id="captcha"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="captcha" className="ml-2 block text-sm text-gray-700">
          I&#39;m not a robot *
        </label>
        {errors.captcha && (
          <p className="ml-2 text-sm text-red-600">{errors.captcha.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  );
}

export default Home;
