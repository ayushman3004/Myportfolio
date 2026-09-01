"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  FileDown,
  ArrowRight,
  Sparkles,
  Code2,
  Terminal,
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/ayushman3004",
      icon: GithubIcon,
      label: "github.com/ayushman3004",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ayushman30",
      icon: LinkedinIcon,
      label: "linkedin.com/in/ayushman30",
    },
    {
      name: "Email",
      href: "mailto:ayushman.rick007@gmail.com",
      icon: Mail,
      label: "ayushman.rick007@gmail.com",
    },
    {
      name: "Phone",
      href: "tel:+918167394620",
      icon: Phone,
      label: "+91-8167394620",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 bg-cream-50 bg-grain overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-earth-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cognac/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Arched Portrait Cutout matching screenshot */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Outer decorative halo */}
              <div className="absolute -inset-3 bg-gradient-to-b from-earth-300/40 to-cognac/20 rounded-arch blur-md group-hover:blur-lg transition-all duration-500" />

              {/* Arch Frame Container */}
              <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[380px] sm:h-[460px] md:h-[500px] rounded-arch overflow-hidden bg-earth-100 border-[6px] border-cream-100 shadow-2xl">
                <Image
                  src="/portrait.jpg"
                  alt="Ayushman Bhattacharya — Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 380px, 400px"
                />

                {/* Subtle warm gradient vignette at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge on image */}
                {/* <div className="absolute bottom-4 left-4 right-4 bg-cream-50/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-earth-300/50 shadow-lg flex items-center justify-between"> */}
                {/* <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span> */}
                {/* <span className="text-xs font-semibold text-earth-900">Available for Opportunities</span> */}
                {/* </div> */}
                {/* <span className="text-[11px] font-medium text-earth-600">Full-Stack &amp; AI</span> */}
                {/* </div> */}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Typography & Actions */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Top Subtitle pill */}
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-earth-100/90 border border-earth-300/60 text-earth-800 text-xs font-medium tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-cognac" /> */}
            {/* <span>Full-Stack Software Engineer</span> */}
            {/* </div> */}

            {/* Name Heading (Serif Editorial style matching reference screenshot) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-earth-900 tracking-tight leading-[1.1]">
              Ayushman Bhattacharya
            </h1>

            {/* Tagline & Subheading */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-light text-earth-800 tracking-wide font-sans">
                Full-Stack Developer
                <span className="block sm:inline sm:ml-2 text-base text-earth-600 font-normal">
                  (React.js, Next.js, Node.js, Express.js)
                </span>
              </h2>

              <p className="max-w-xl text-base sm:text-lg text-earth-700 font-light leading-relaxed">
                Building modern, scalable web applications and AI-powered products with clean architecture, high concurrency, and exquisite interactive design.
              </p>
            </div>

            {/* Primary Action Buttons (matching screenshot "Reach out" aesthetic) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-md bg-[#855834] hover:bg-[#6E4324] text-cream-50 font-medium text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                <span>Reach out</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-7 py-3.5 rounded-md bg-earth-100 hover:bg-earth-200/80 text-earth-900 border border-earth-300 font-medium text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95"
              >
                View Projects
              </a>

              <a
                href="/AyushmanBhattacharya.pdf"
                download="Ayushman_Bhattacharya_Resume.pdf"
                className="px-6 py-3.5 rounded-md bg-transparent hover:bg-earth-100 text-earth-800 border border-earth-300 font-medium text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                <FileDown className="w-4 h-4 text-cognac" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links as Icon Buttons */}
            <div className="pt-4 border-t border-earth-200/70 w-full max-w-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-earth-600 font-sans">
                Connect with me
              </span>

              <div className="flex items-center gap-2.5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={social.name}
                      title={social.label}
                      className="group p-2.5 rounded-full bg-cream-50 hover:bg-earth-900 text-earth-800 hover:text-cream-50 border border-earth-300/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
