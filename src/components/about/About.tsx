"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import profileImage from "@/assets/profile.jpg";

const software = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop",
  "CapCut Pro",
  "Filmora",
];

const skills = [
  "Cinematic Storytelling",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Multi-cam Editing",
  "YouTube Optimization",
];

export default function About() {
  return (
    <section className="py-24 bg-card border-t border-border" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <Image 
                src={profileImage}
                alt="Vishal Verma Portrait" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right: Bio & Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-5xl md:text-7xl font-heading tracking-widest uppercase text-foreground mb-6">
              Hi, I&apos;m <span className="text-accent">Vishal Verma</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-sans text-lg mb-12">
              <p>
                A passionate video editor specializing in cinematic storytelling, YouTube content, commercials, short-form content, and branded videos.
              </p>
              <p>
                I focus on transforming raw footage into compelling visual experiences that engage audiences and deliver results. With over 4 years of experience, I&apos;ve honed my craft to deliver high-retention edits that not only look beautiful but perform exceptionally well across digital platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Skills */}
              <div>
                <h3 className="text-2xl font-heading tracking-wider uppercase text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent inline-block" />
                  Core Skills
                </h3>
                <ul className="space-y-4">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3 font-sans text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software */}
              <div>
                <h3 className="text-2xl font-heading tracking-wider uppercase text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent inline-block" />
                  Software
                </h3>
                <ul className="space-y-4">
                  {software.map((sw, index) => (
                    <li key={index} className="flex items-center gap-3 font-sans text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {sw}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
