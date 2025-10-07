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

export const testimonials: Testimonial[] = [
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
      "We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
    icon: FaLightbulb,
  },
  {
    title: "Quality",
    description:
      "Every project is crafted with meticulous attention to detail, ensuring robust, scalable, and maintainable code.",
    icon: FaStar,
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of your team, building long-term relationships based on trust and mutual success.",
    icon: FaHandshake,
  },
];

export const stats = [
  { number: "25+", label: "Projects Completed" },
  { number: "25+", label: "Happy Clients" },
  { number: "100%", label: "Success Rate" },
  { number: "12+", label: "Technologies" },
];
