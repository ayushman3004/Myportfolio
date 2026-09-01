"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  FileDown,
  ArrowUp,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Image from "next/image";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ayushman.rick007@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      name: "GitHub",
      handle: "ayushman3004",
      url: "https://github.com/ayushman3004",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      handle: "in/ayushman30",
      url: "https://linkedin.com/in/ayushman30",
      icon: LinkedinIcon,
    },
    {
      name: "Email",
      handle: "ayushman.rick007@gmail.com",
      url: "mailto:ayushman.rick007@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      handle: "+91-8167394620",
      url: "tel:+918167394620",
      icon: Phone,
    },
  ];

  return (
    <footer id="contact" className="bg-earth-950 text-cream-100 pt-24 pb-12 px-4 sm:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cognac/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Callout Card */}
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-walnut-800 to-earth-900 border border-gold/20 shadow-2xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-gold/30 text-gold-light text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Open for Full-Stack &amp; AI Roles</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 tracking-tight">
              Let&apos;s build something remarkable together.
            </h2>
            <p className="text-earth-300 text-base sm:text-lg font-light leading-relaxed">
              Whether you have an upcoming project, a challenging engineering problem, or an innovative AI vision — my inbox is always open.
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:ayushman.rick007@gmail.com"
              className="px-8 py-4 rounded-xl bg-cognac hover:bg-cognac-hover text-cream-50 font-semibold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 rounded-xl bg-walnut-900/80 hover:bg-walnut-900 text-cream-100 border border-earth-700 font-medium text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-earth-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href="/AyushmanBhattacharya.pdf"
              download="Ayushman_Bhattacharya_Resume.pdf"
              className="px-6 py-4 rounded-xl bg-transparent hover:bg-white/5 text-cream-200 border border-earth-700 font-medium text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-gold" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-5 rounded-2xl bg-earth-900/50 hover:bg-earth-900 border border-earth-800/80 hover:border-cognac/50 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-earth-800 text-gold-light flex items-center justify-center group-hover:bg-cognac group-hover:text-cream-50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-earth-400 block font-mono uppercase">
                      {s.name}
                    </span>
                    <span className="text-sm font-medium text-cream-100 group-hover:text-gold-light transition-colors truncate max-w-[140px] block">
                      {s.handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-earth-500 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            );
          })}
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 border-t border-earth-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-earth-400 font-sans">
          <div className="flex items-center gap-3">
            <div className="relative h-5 w-24 sm:w-28 flex items-center">
              <Image
                src="/logo.png"
                alt="Ayushman Logo"
                fill
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>
            <span className="text-earth-600">|</span>
            <span>Designed &amp; Developed by <strong className="text-cream-100 font-serif text-sm">Ayushman Bhattacharya</strong></span>
          </div>

          <div className="flex items-center gap-6">
            <span>Next.js 14</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-earth-900 hover:bg-cognac text-cream-100 transition-colors shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
