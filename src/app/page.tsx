"use client";

import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio containerRef={containerRef} />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;
