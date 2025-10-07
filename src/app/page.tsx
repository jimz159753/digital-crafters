"use client";

import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Portfolio containerRef={containerRef} />
      <Testimonials />
      <Technologies />
      <Contact />
    </>
  );
}

export default Home;
