"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, School } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-8 bg-parchment/60 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100 border border-earth-300 text-earth-800 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-cognac" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900 tracking-tight">
            Education Timeline
          </h2>
          <p className="text-earth-700 text-base sm:text-lg font-light">
            Formal engineering foundations, scientific coursework, and academic milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-cognac before:via-earth-300 before:to-earth-200">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[30px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-cream-50 border-4 border-cognac shadow-sm group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="rounded-2xl p-6 sm:p-8 bg-cream-50/95 border border-earth-200/90 hover:border-cognac/50 shadow-card-soft hover:shadow-card-hover transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-earth-100 text-earth-800 text-xs font-semibold">
                      {edu.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-earth-600">
                      <MapPin className="w-3.5 h-3.5 text-earth-500" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-earth-600 bg-earth-100 px-3 py-1 rounded-md">
                      {edu.period}
                    </span>
                    <span className="font-serif font-bold text-sm text-cognac bg-cognac/10 px-3 py-1 rounded-md border border-cognac/20">
                      {edu.score}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-earth-900 mb-1">
                  {edu.institution}
                </h3>
                <p className="text-sm sm:text-base font-medium text-earth-800 mb-3">
                  {edu.degree}
                </p>

                <p className="text-sm text-earth-600 font-light leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-earth-200/60">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-earth-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cognac shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
