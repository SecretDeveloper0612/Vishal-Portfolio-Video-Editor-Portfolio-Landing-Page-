"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setProgress(Math.min(Math.round((currentStep / steps) * 100), 100));

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Wait a bit after reaching 100%
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-6xl font-heading tracking-widest text-foreground">
              VISHAL VERMA
            </h1>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">
              Loading Creative Experience...
            </p>
            
            {/* Progress Bar Container */}
            <div className="w-64 h-0.5 bg-card mt-4 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            {/* Counter */}
            <div className="text-accent font-sans mt-2">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
