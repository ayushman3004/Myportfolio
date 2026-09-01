"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { 
  Code2, 
  Layers, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Cpu,
  Workflow
} from "lucide-react";

export default function Skills() {
  const iconMap = {
    Code2: Code2,
    Layers: Layers,
    Database: Database,
    Sparkles: Sparkles,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-parchment/60 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100 border border-earth-300 text-earth-800 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cognac" />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900 tracking-tight">
            Skills &amp; Capabilities
          </h2>
          <p className="text-earth-700 text-base sm:text-lg font-light">
            A balanced stack combining systems programming rigor with modern full-stack web and cloud architectures.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.category}
                variants={cardVariants}
                className="group relative rounded-2xl p-8 bg-cream-50/90 border border-earth-200/80 hover:border-cognac/40 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cognac/30 to-transparent group-hover:via-cognac transition-all duration-500" />

                <div>
                  {/* Card Title Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-earth-100 text-cognac flex items-center justify-center group-hover:bg-cognac group-hover:text-cream-50 transition-colors duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-earth-900">
                          {cat.category}
                        </h3>
                        <p className="text-xs text-earth-600 font-sans">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-earth-500 bg-earth-100/70 px-2.5 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill flex items-center gap-2 px-3.5 py-2 rounded-xl bg-parchment hover:bg-earth-900 text-earth-900 hover:text-cream-50 border border-earth-300/60 hover:border-earth-900 transition-all duration-200 shadow-xs hover:shadow-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cognac group-hover/pill:text-gold transition-colors" />
                        <span className="text-sm font-medium tracking-tight">
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-[11px] text-earth-500 group-hover/pill:text-cream-200/80 font-normal pl-1 border-l border-earth-300/60 group-hover/pill:border-earth-700">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer category tagline */}
                <div className="pt-6 mt-6 border-t border-earth-200/50 flex items-center justify-between text-xs text-earth-500">
                  <span className="font-medium text-cognac">Production Ready</span>
                  <span className="font-mono">Tested &amp; Scaled</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
