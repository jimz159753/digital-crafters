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
import { PortfolioProject, Testimonial, Technology, Value } from "@/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Realsynch",
    description:
      "A comprehensive business intelligence platform that transforms how real estate professionals manage and grow their business. Realsynch consolidates data from 30+ real estate systems into actionable insights, helping agents track performance, identify opportunities, and make data-driven decisions. The platform delivers real-time dashboards, automated reporting, and predictive analytics to drive revenue growth.",
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
      "A comprehensive event and coworking space management platform that simplifies operations and enhances member experience. The application streamlines booking systems, automates member management, and coordinates events seamlessly. It enables space owners to maximize utilization, reduce administrative overhead, and create engaging experiences for their community.",
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
      "An AI-powered meditation and wellness mobile application that delivers personalized mindfulness experiences to help users reduce stress and improve mental well-being. Lightmind adapts to individual preferences and emotional states, providing tailored meditation sessions, progress tracking, and wellness insights that support users on their journey to better mental health.",
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
      "A comprehensive digital ecosystem that revolutionizes the visitor experience at Guadalajara Zoo. The platform streamlines ticket purchasing, enhances visitor engagement through interactive exhibits, and delivers educational content that brings the animal world to life. It helps the zoo increase visitor satisfaction, improve operational efficiency, and create memorable educational experiences for families and students.",
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

export const testimonials: Testimonial[] = [
  {
    name: "Scott Wilson",
    company: "Realsynch",
    role: "CEO",
    content:
      "Digital Crafters built a comprehensive intelligence platform that consolidates data from 30+ real estate systems. Our revenue has increased significantly since implementing their real-time analytics and automated reporting features.",
    rating: 5,
  },
  {
    name: "Ana Martinez",
    company: "Espacio Omnia",
    role: "Operations Director",
    content:
      "Digital Crafters created a booking and event management platform that reduced our administrative overhead by 60% and increased member satisfaction. Our space utilization has improved dramatically with their intuitive interface.",
    rating: 5,
  },
  {
    name: "Pablo Gutierrez",
    company: "LightMind Wellness",
    role: "Founder",
    content:
      "Digital Crafters developed our AI-powered meditation app that has helped thousands of users improve their mental well-being. Their focus on user experience made our app a leader in the wellness space with exceptional retention rates.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    company: "Guadalajara Zoo",
    role: "Digital Innovation Manager",
    content:
      "Digital Crafters created a comprehensive digital ecosystem that increased visitor satisfaction by 40% and improved operational efficiency. The platform streamlines ticket purchasing and provides engaging virtual tours.",
    rating: 5,
  },
];

export const technologies: Technology[] = [
  { icon: FaReact, name: "React", color: "text-blue-400" },
  { icon: SiReact, name: "React Native", color: "text-blue-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: FaSass, name: "Sass", color: "text-pink-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { icon: SiDrizzle, name: "Drizzle", color: "text-green-400" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
  { icon: FaAws, name: "AWS", color: "text-orange-400" },
  { icon: FaDigitalOcean, name: "DigitalOcean", color: "text-blue-400" },
  { icon: FaGoogle, name: "Google Cloud", color: "text-blue-500" },
  { icon: GiArtificialIntelligence, name: "AI/ML", color: "text-purple-500" },
];

export const values: Value[] = [
  {
    title: "Innovation",
    description:
      "We continuously explore new approaches and methodologies to deliver innovative solutions that give our clients a competitive advantage in their markets.",
    icon: FaLightbulb,
  },
  {
    title: "Quality",
    description:
      "Every project is crafted with meticulous attention to detail, ensuring reliable, scalable solutions that deliver consistent results and long-term value for our clients.",
    icon: FaStar,
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of your team, building long-term relationships based on trust and shared success. Our goal is to understand your business deeply and become a strategic partner in your growth journey.",
    icon: FaHandshake,
  },
];

export const stats = [
  { number: "25+", label: "Projects Completed" },
  { number: "25+", label: "Happy Clients" },
  { number: "100%", label: "Success Rate" },
  { number: "12+", label: "Technologies" },
];
