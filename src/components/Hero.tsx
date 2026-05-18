"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n";
import gsap from "gsap";

export default function Hero() {
  const { t } = useI18n();

  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(badgeRef.current, { opacity: 0, y: -24, duration: 0.6 })
      .from(titleRef.current, { opacity: 0, y: 90, duration: 1.1, ease: "power4.out" }, "-=0.3")
      .from(lineRef.current, { scaleX: 0, duration: 0.6, ease: "power2.out", transformOrigin: "left" }, "-=0.4")
      .from(subtitleRef.current, { opacity: 0, y: 28, duration: 0.7 }, "-=0.4")
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.5 }, "-=0.35");

    if (statsRef.current) {
      gsap.from(Array.from(statsRef.current.children), {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.55,
        ease: "power3.out",
        delay: tl.totalDuration() - 0.25,
      });
    }

    const scrollEnter = gsap.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: -6 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: tl.totalDuration() + 0.3,
        onComplete() {
          gsap.to(scrollIndicatorRef.current, {
            y: 9,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );

    return () => {
      tl.kill();
      scrollEnter.kill();
    };
  }, []);

  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      const navbar = document.querySelector("[data-navbar]") as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  const words = t.hero.title.split(" ");
  const lastWord = words.pop() ?? "";
  const restTitle = words.join(" ");

  const stats = [
    { number: "25+", label: t.portfolio.statsProjects },
    { number: "25+", label: t.portfolio.statsClients },
    { number: "100%", label: t.portfolio.statsSuccess },
    { number: "12+", label: t.portfolio.statsTech },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.38) saturate(0.7)" }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/75 pointer-events-none" />

      {/* Atmospheric color orbs */}
      <div className="absolute top-1/4 -left-36 w-[32rem] h-[32rem] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-violet-600/8 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-teal-500/5 rounded-full blur-[50px] pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Corner tag — bottom left */}
      <div className="absolute bottom-20 left-8 z-10 hidden lg:flex flex-col gap-1 opacity-30">
        <div className="w-8 h-px bg-white/60" />
        <span className="text-[10px] text-white uppercase tracking-[0.25em]">MX</span>
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-24 pb-4">
          {/* Badge */}
          <div ref={badgeRef} className="mb-7">
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-white/65 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              Digital Crafters Agency
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="font-bold leading-[1.05] tracking-tight max-w-5xl"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)" }}
          >
            <span className="text-white">{restTitle} </span>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/35">
              {lastWord}
            </span>
          </h1>

          {/* Decorative line */}
          <div
            ref={lineRef}
            className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent mt-7 mb-7 self-center"
            style={{ transformOrigin: "left" }}
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            {t.hero.subtitle}
          </p>

          {/* CTA */}
          <button
            ref={ctaRef}
            onClick={scrollToPortfolio}
            className="group inline-flex items-center gap-3 px-9 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-[0_8px_40px_rgba(0,0,0,0.5)] text-base"
          >
            {t.hero.ctaButton}
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats strip */}
        <div className="w-full flex justify-center px-4 pb-16">
          <div
            ref={statsRef}
            className="w-full sm:w-auto grid grid-cols-2 sm:flex border border-white/10 rounded-2xl bg-white/[0.04] backdrop-blur-md overflow-hidden"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`px-5 sm:px-8 py-4 text-center border-white/10
                  ${i === 1 || i === 3 ? "border-l" : ""}
                  ${i >= 2 ? "border-t sm:border-t-0" : ""}
                  ${i > 0 ? "sm:border-l" : ""}
                `}
              >
                <div className="text-white font-bold text-xl sm:text-2xl leading-none mb-1.5 tabular-nums">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-[10px] sm:text-[11px] uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 opacity-0 flex flex-col items-center gap-1.5 cursor-pointer select-none"
        onClick={scrollToPortfolio}
      >
        <span className="text-white/25 text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <svg className="w-4 h-4 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
