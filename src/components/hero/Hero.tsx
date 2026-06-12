"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background"
    >
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          {/* Using a high-quality placeholder video from coverr/pexels */}
          <source src="https://cdn.coverr.co/videos/coverr-a-person-editing-video-on-a-computer-2751/1080p.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-sans">
            Video Editor & Motion Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-heading tracking-widest text-foreground leading-none mb-6"
        >
          VISHAL VERMA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans"
        >
          Crafting cinematic stories that captivate audiences and drive engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-full px-8 py-6 text-lg group">
            <Play className="mr-2 h-5 w-5 fill-current" />
            Watch Showreel
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-muted-foreground text-foreground hover:bg-white/10 group">
            Hire Me
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
