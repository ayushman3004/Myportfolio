"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between ${
          scrolled
            ? "glass-warm shadow-card-soft border border-earth-300/40 py-2"
            : "bg-cream-50/70 backdrop-blur-md border border-earth-200/50"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative h-6 sm:h-7 w-32 sm:w-36 flex items-center">
            <Image
              src="/logo.png"
              alt="Ayushman Logo"
              fill
              className="object-contain object-left group-hover:opacity-90 transition-opacity"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-earth-800">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-earth-700 hover:text-earth-950 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-cognac after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/AyushmanBhattacharya.pdf"
            download="Ayushman_Bhattacharya_Resume.pdf"
            className="group flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-earth-900 text-cream-50 hover:bg-cognac transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/AyushmanBhattacharya.pdf"
            download="Ayushman_Bhattacharya_Resume.pdf"
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-cognac text-cream-50"
          >
            <FileDown className="w-3 h-3" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-earth-800 hover:bg-earth-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl glass-warm border border-earth-300/40 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-earth-800 hover:bg-earth-200/50 hover:text-earth-950 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-earth-400" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
