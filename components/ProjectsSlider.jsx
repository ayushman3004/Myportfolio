"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Layers, 
  Calendar, 
  Sparkles, 
  Pause, 
  Play,
  CheckCircle2,
  Maximize2
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const autoPlayRef = useRef(null);

  // Auto advance every 5.5 seconds unless hovered/interacting
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-8 bg-parchment/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100 border border-earth-300 text-earth-800 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-cognac" />
              <span>Interactive Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-earth-700 text-base sm:text-lg font-light">
              Explore recent production applications, AI agent pipelines, and high-concurrency systems.
            </p>
          </div>

          {/* Slider Controls (Desktop & Mobile) */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Play/Pause state indicator */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-full bg-cream-50 hover:bg-earth-100 text-earth-700 border border-earth-300/80 transition-colors shadow-xs"
              title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
              aria-label="Toggle Carousel Autoplay"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-cream-50 hover:bg-earth-900 text-earth-800 hover:text-cream-50 border border-earth-300 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 group"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-cream-50 hover:bg-earth-900 text-earth-800 hover:text-cream-50 border border-earth-300 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 group"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[580px] lg:min-h-[520px] rounded-3xl"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -100 || offset.x < -60) {
                  handleNext();
                } else if (swipe > 100 || offset.x > 60) {
                  handlePrev();
                }
              }}
              className="w-full rounded-3xl bg-cream-50 border-2 border-earth-300/80 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-grab active:cursor-grabbing"
            >
              {/* Left Column: Large Project Mockup & Visual */}
              <div className="lg:col-span-7 relative bg-[#1E140C] min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden flex items-center justify-center p-3 sm:p-5 group">
                <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-[#150D07] border border-earth-800/60 shadow-inner flex items-center justify-center">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-contain object-center p-2 sm:p-3 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />

                  {/* Project Category Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-cream-50/90 text-earth-900 text-xs font-semibold backdrop-blur-md shadow-md border border-earth-300/60">
                      {currentProject.category}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-earth-900/80 text-cream-100 text-xs font-mono backdrop-blur-md border border-white/10">
                      {currentProject.date}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(currentProject);
                    }}
                    className="absolute bottom-4 right-4 z-10 p-2.5 rounded-xl bg-cream-50/90 hover:bg-cream-50 text-earth-900 shadow-lg backdrop-blur-md transition-transform hover:scale-110"
                    title="View Architectural Breakdown"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Project Details & Action Links */}
              <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div>
                  {/* Category & Index */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cognac">
                      Project 0{currentIndex + 1} of 0{projects.length}
                    </span>
                    <span className="text-xs font-serif italic text-earth-500">
                      {currentProject.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 leading-tight mb-4">
                    {currentProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-earth-700 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {currentProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-earth-800">
                        <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-earth-500 block mb-2">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-earth-100 text-earth-800 text-xs font-medium border border-earth-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA Buttons */}
                <div className="pt-6 border-t border-earth-200 flex flex-wrap items-center gap-3">
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cognac hover:bg-cognac-dark text-cream-50 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md active:scale-95 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-earth-900 hover:bg-cognac text-cream-50 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md active:scale-95 group/btn"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Code</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(currentProject)}
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-earth-100 hover:bg-earth-200 text-earth-900 border border-earth-300 text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95"
                  >
                    <span>Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators / Dot Navigation */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-cognac"
                  : "w-2.5 bg-earth-300 hover:bg-earth-400"
              }`}
              aria-label={`Jump to project ${idx + 1}: ${proj.title}`}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 bg-earth-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-50 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-earth-300 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-cognac uppercase tracking-wider font-semibold">
                    {activeModalProject.date} • {activeModalProject.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-full hover:bg-earth-200 text-earth-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-earth-800 leading-relaxed font-light text-base">
                  {activeModalProject.longDescription}
                </p>

                <h4 className="text-sm font-semibold uppercase tracking-wider text-earth-900 pt-2">
                  System Capabilities &amp; Highlights
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-earth-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-cognac mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold uppercase tracking-wider text-earth-900 pt-2">
                  Applied Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-earth-200/80 text-earth-900 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-earth-200 flex flex-wrap justify-end gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-cognac hover:bg-cognac-dark text-cream-50 text-sm font-medium flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Website</span>
                  </a>
                )}
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-earth-900 hover:bg-cognac text-cream-50 text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
