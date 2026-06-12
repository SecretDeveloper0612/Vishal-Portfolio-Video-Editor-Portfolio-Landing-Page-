"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description: "We discuss your vision, goals, and target audience to align on the creative direction.",
  },
  {
    num: "02",
    title: "Planning",
    description: "Storyboarding, asset collection, and organizing the footage for an efficient edit.",
  },
  {
    num: "03",
    title: "Editing",
    description: "The magic happens. Cutting, pacing, sound design, and color grading come together.",
  },
  {
    num: "04",
    title: "Revisions",
    description: "You review the draft. We tweak and refine until it's absolutely perfect.",
  },
  {
    num: "05",
    title: "Final Delivery",
    description: "You receive the final high-resolution files, ready to captivate your audience.",
  },
];

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the line drawing down
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      // Animate each card popping in
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-background relative" id="workflow">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-heading tracking-widest uppercase text-foreground mb-4">
            The Process
          </h2>
          <p className="text-muted-foreground font-sans text-lg uppercase tracking-widest">
            How we bring ideas to life
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line (Track) */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-border -translate-x-1/2" />
          
          {/* Animated Line */}
          <div 
            ref={lineRef}
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-accent -translate-x-1/2 origin-top" 
          />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,229,255,0.5)]" />

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div 
                ref={(el) => { cardsRef.current[index] = el; }}
                className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12"
              >
                <div className={`bg-card p-8 rounded-3xl border border-border hover:border-accent/30 transition-colors ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <span className="text-accent font-heading text-4xl mb-4 block opacity-50">
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-heading tracking-wider uppercase text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
