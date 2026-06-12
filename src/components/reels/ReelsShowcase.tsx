"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const reels = [
  {
    id: 1,
    title: "Fitness Promo",
    views: "1.2M",
    video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "",
  },
  {
    id: 2,
    title: "Travel Vlog Shorts",
    views: "850K",
    video: "",
    thumbnail: "https://images.unsplash.com/photo-1506905925224-b1eb21c5f3e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "",
  },
  {
    id: 3,
    title: "Tech Unboxing",
    views: "2.1M",
    video: "",
    thumbnail: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "",
  },
  {
    id: 4,
    title: "Fashion Reel",
    views: "500K",
    video: "",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "",
  },
  {
    id: 5,
    title: "Food Aesthetics",
    views: "1.5M",
    video: "",
    thumbnail: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "",
  },
];

export default function ReelsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden" id="reels">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <FaInstagram className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-6xl font-heading tracking-widest uppercase text-foreground">
                Instagram Reels
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground font-sans text-lg uppercase tracking-widest"
            >
              High-retention short form content
            </motion.p>
          </div>
          
          {/* Scroll Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 hidden md:flex"
          >
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-black hover:border-accent transition-colors"
            >
              &larr;
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-black hover:border-accent transition-colors"
            >
              &rarr;
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-12 pt-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reels.map((reel, index) => (
          <ReelCard key={reel.id} reel={reel} index={index} />
        ))}
        {/* Spacer for right padding in scroll */}
        <div className="min-w-[1px] md:min-w-[2rem]" />
      </div>
    </section>
  );
}

type Reel = {
  id: number;
  title: string;
  views: string;
  video: string;
  thumbnail: string;
  link: string;
};

function ReelCard({ reel, index }: { reel: Reel, index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play automatically when hovered
  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative shrink-0 w-[280px] sm:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden snap-center border border-border shadow-2xl hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] group cursor-pointer transition-all duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {reel.thumbnail && (
        <img 
          src={reel.thumbnail} 
          alt={reel.title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      )}
      {reel.video && (
        <video 
          ref={videoRef}
          src={reel.video}
          poster={reel.thumbnail}
          muted={isMuted}
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

      {/* Play Icon overlay (when paused) */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isPlaying ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
          <Play className="w-6 h-6 text-white fill-current ml-1" />
        </div>
      </div>

      {/* Content Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-accent text-accent-foreground text-xs font-sans font-bold px-2 py-1 rounded uppercase tracking-wider">
            {reel.views} Views
          </span>
        </div>
        <h3 className="text-2xl font-heading tracking-wide text-white">
          {reel.title}
        </h3>
      </div>

      {/* Mute/Unmute Toggle */}
      {reel.video && (
        <button 
          onClick={toggleMute}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-opacity duration-300 z-20 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      )}
    </motion.div>
  );
}
