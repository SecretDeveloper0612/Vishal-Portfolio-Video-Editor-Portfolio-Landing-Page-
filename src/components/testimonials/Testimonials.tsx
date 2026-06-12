"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, Nexus Corp",
    text: "Vishal completely transformed our brand's visual identity. The commercial he edited for us saw a 40% higher conversion rate than our previous campaigns. His attention to pacing and color is unmatched.",
  },
  {
    name: "David Chen",
    role: "YouTube Creator (2M+ Subs)",
    text: "I've worked with many editors, but Vishal is on another level. He understands exactly how to keep viewers engaged. My average view duration went up by 2 minutes since he took over my editing.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Wanderlust Travels",
    text: "The travel documentary he edited for us was breathtaking. He perfectly captured the emotion and scale of the landscapes. It's cinematic storytelling at its finest.",
  },
  {
    name: "Michael Chang",
    role: "Podcast Host",
    text: "He makes our multi-cam podcast look like a high-end TV show. The audio mixing is flawless and he always knows exactly which camera angle to cut to for maximum impact.",
  },
  {
    name: "Jessica Walsh",
    role: "Creative Director",
    text: "Vishal's motion graphics work added so much production value to our corporate presentation. He's fast, communicative, and has an incredible eye for design.",
  },
];

export default function Testimonials() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-card overflow-hidden border-y border-border" id="testimonials">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-5xl md:text-7xl font-heading tracking-widest uppercase text-center text-foreground">
          Client Feedback
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-card to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-87.5 md:w-112.5 shrink-0 bg-background/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 font-sans text-lg mb-8 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <h4 className="text-foreground font-heading text-xl tracking-wider uppercase mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-muted-foreground font-sans text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
