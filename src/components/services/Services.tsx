"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Video, Film, MonitorPlay, Sparkles, Palette, Mic2 } from "lucide-react";

const services = [
  {
    icon: <Video className="w-8 h-8" />,
    title: "YouTube Video Editing",
    description: "High-retention editing designed to keep viewers engaged and boost your channel's algorithm performance.",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Reels & Shorts",
    description: "Fast-paced, highly engaging short-form content optimized for TikTok, Instagram Reels, and YouTube Shorts.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Commercial Ads",
    description: "Cinematic and persuasive video ads that drive conversions and elevate your brand's professional image.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Motion Graphics",
    description: "Custom animations, lower thirds, and visual effects that add a premium feel to your videos.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Color Grading",
    description: "Professional color correction and grading to give your footage that cinematic, moody, or vibrant look.",
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Podcast Editing",
    description: "Multi-cam syncing, audio cleanup, and dynamic cuts to make your podcasts look and sound flawless.",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Optional: Add a slight parallax to the section background
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 bg-card relative overflow-hidden" id="services">
      {/* Background Effect */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 opacity-20 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-accent/20 via-background to-background"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading tracking-widest uppercase mb-4 text-foreground"
          >
            My Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-background border border-border hover:border-accent/50 rounded-2xl overflow-hidden transition-colors duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mb-6 text-accent border border-border group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-heading tracking-wide text-foreground mb-3 uppercase">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-sans leading-relaxed relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Animated Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
