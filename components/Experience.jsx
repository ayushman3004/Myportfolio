"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolioData";
import { 
  Briefcase, 
  ExternalLink, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Calendar,
  Building2,
  CheckCircle
} from "lucide-react";

export default function Experience() {
  const exp = experienceData[0];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-cream-50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cognac/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100 border border-earth-300 text-earth-800 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-cognac" />
            <span>Professional Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-earth-700 text-base sm:text-lg font-light">
            Hands-on software engineering at scale, optimizing high-concurrency production workflows.
          </p>
        </div>

        {/* Featured Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl bg-gradient-to-br from-parchment-light via-cream-50 to-parchment/60 border-2 border-earth-300/80 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          {/* Header row of card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-earth-200">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900">
                  {exp.company}
                </h3>
                <span className="px-3 py-1 rounded-full bg-cognac/10 text-cognac text-xs font-semibold border border-cognac/20">
                  {exp.badge}
                </span>
                <span className="flex items-center gap-1 text-xs text-earth-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-earth-500" />
                  {exp.location}
                </span>
              </div>
              <p className="text-lg font-medium text-earth-800 font-sans">
                {exp.role}
              </p>
            </div>

            {/* Date & Link Button */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-earth-700 bg-earth-100 px-3.5 py-2 rounded-xl border border-earth-200">
                <Calendar className="w-3.5 h-3.5 text-cognac" />
                <span>{exp.period}</span>
                <span className="text-earth-400">({exp.duration})</span>
              </div>

              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-earth-900 hover:bg-cognac text-cream-50 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>Visit www.kirijo.com</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="p-5 rounded-2xl bg-cream-50/80 border border-earth-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-earth-600">Frontend Optimization</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="font-serif text-3xl font-bold text-earth-900 text-emerald-700">~30%</div>
              <p className="text-xs text-earth-600 mt-1">Faster initial load time via lazy loading &amp; modular splitting</p>
            </div>

            <div className="p-5 rounded-2xl bg-cream-50/80 border border-earth-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-earth-600">API Throughput</span>
                <Zap className="w-4 h-4 text-cognac" />
              </div>
              <div className="font-serif text-3xl font-bold text-earth-900 text-cognac">+25%</div>
              <p className="text-xs text-earth-600 mt-1">Efficiency boost under 100+ concurrent live requests</p>
            </div>

            <div className="p-5 rounded-2xl bg-cream-50/80 border border-earth-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-earth-600">System Stability</span>
                <ShieldCheck className="w-4 h-4 text-gold-dark" />
              </div>
              <div className="font-serif text-3xl font-bold text-earth-900 text-gold-dark">Robust</div>
              <p className="text-xs text-earth-600 mt-1">Hardened authentication, transactions &amp; backend flows</p>
            </div>
          </div>

          {/* Bullet achievements list */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-earth-800">
              Key Contributions &amp; Architectural Milestones
            </h4>
            <div className="space-y-3">
              {exp.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-earth-50/70 border border-earth-200/50 hover:bg-earth-100/60 transition-colors"
                >
                  <div className="mt-0.5 p-1 rounded-full bg-cognac/10 text-cognac">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-earth-800 leading-relaxed">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills Footer */}
          <div className="pt-8 mt-8 border-t border-earth-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-earth-600">
              Technologies Utilized:
            </span>
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-earth-200/70 text-earth-900 border border-earth-300/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
