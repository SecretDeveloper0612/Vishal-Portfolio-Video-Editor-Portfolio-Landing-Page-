"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "M+", label: "Views Generated" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, index) => {
        if (!counter) return;
        
        const targetValue = statsData[index].value;
        
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true,
            },
            onUpdate: function () {
              // Add the suffix back after GSAP updates the innerText
              if (counter) {
                counter.innerText = Math.round(Number(this.targets()[0].innerText)) + statsData[index].suffix;
              }
            },
          }
        );
      });

      // Animate the cards themselves
      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-border"
            >
              <h2 
                ref={(el) => { countersRef.current[index] = el; }}
                className="text-5xl md:text-7xl font-heading tracking-wider text-accent mb-2"
              >
                0{stat.suffix}
              </h2>
              <p className="text-muted-foreground text-center font-sans text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
