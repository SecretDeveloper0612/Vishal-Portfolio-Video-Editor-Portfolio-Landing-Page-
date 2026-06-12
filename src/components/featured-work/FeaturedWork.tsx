"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const categories = ["All", "YouTube Documentary", "Commercial Ad", "Music Video", "Travel Film"];

const projects = [
  {
    id: 1,
    title: "The Urban Jungle",
    category: "YouTube Documentary",
    client: "National Geographic",
    thumbnail: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-walking-through-the-city-2748/1080p.mp4",
    height: "h-[400px]",
  },
  {
    id: 2,
    title: "Neon Nights",
    category: "Music Video",
    client: "Synthwave Records",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-playing-with-neon-lights-2753/1080p.mp4",
    height: "h-[300px]",
  },
  {
    id: 3,
    title: "Alpine Escape",
    category: "Travel Film",
    client: "Wanderlust Inc.",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-hiking-in-the-mountains-2750/1080p.mp4",
    height: "h-[500px]",
  },
  {
    id: 4,
    title: "Future Tech",
    category: "Commercial Ad",
    client: "Cyber Corp",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-2749/1080p.mp4",
    height: "h-[350px]",
  },
  {
    id: 5,
    title: "Ocean Blue",
    category: "Travel Film",
    client: "Aqua Tours",
    thumbnail: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-waves-crashing-on-the-beach-2752/1080p.mp4",
    height: "h-[450px]",
  },
  {
    id: 6,
    title: "Creator Economy",
    category: "YouTube Documentary",
    client: "Creator Studio",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-recording-a-podcast-2754/1080p.mp4",
    height: "h-[350px]",
  },
];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-background relative z-10" id="work">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading tracking-widest uppercase mb-8"
          >
            Featured Work
          </motion.h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-sans text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

type Project = {
  id: number;
  title: string;
  category: string;
  client: string;
  thumbnail: string;
  video: string;
  height: string;
};

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play error:", e));
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative w-full ${project.height} rounded-2xl overflow-hidden group cursor-pointer mb-6 break-inside-avoid border border-transparent hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <Image 
        src={project.thumbnail} 
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Video Preview */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-widest text-accent font-sans bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <h3 className="text-3xl font-heading tracking-wide text-foreground mb-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground font-sans text-sm">
          Client: <span className="text-foreground">{project.client}</span>
        </p>
      </div>

      {/* Play Button Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
        <Play className="w-6 h-6 text-accent fill-current ml-1" />
      </div>
    </motion.div>
  );
}
