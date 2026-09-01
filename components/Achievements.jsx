"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { achievementsData } from "@/data/portfolioData";
import { Trophy, Star, Award, Brain, Sparkles, CheckCircle2 } from "lucide-react";

export default function Achievements() {
  const iconMap = {
    Brain: Brain,
    Award: Award,
    Star: Star,
  };

  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ["#85552E", "#D4AF37", "#2D251E", "#FAF6EE"],
      ticks: 200,
    });
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-8 bg-cream-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100 border border-earth-300 text-earth-800 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-gold-dark" />
            <span>Milestones &amp; Ratings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900 tracking-tight">
            Key Achievements
          </h2>
          <p className="text-earth-700 text-base sm:text-lg font-light">
            Competitive programming consistency, algorithmic problem solving, and verified language rankings.
          </p>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={triggerConfetti}
                className="group relative rounded-3xl p-8 bg-gradient-to-b from-parchment-light to-cream-50 border-2 border-earth-300/80 hover:border-cognac/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Floating corner badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-earth-100 text-cognac flex items-center justify-center group-hover:bg-cognac group-hover:text-cream-50 transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-earth-100/90 text-earth-700 border border-earth-200">
                    {item.platform}
                  </span>
                </div>

                {/* Big Stat Number */}
                <div className="space-y-2 mb-4">
                  <div className="font-serif text-5xl sm:text-6xl font-extrabold text-earth-900 tracking-tight group-hover:text-cognac transition-colors">
                    {item.stat}
                  </div>
                  <h3 className="text-lg font-bold text-earth-800 font-sans">
                    {item.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-earth-600 font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Footer interactive hint */}
                <div className="pt-4 border-t border-earth-200 flex items-center justify-between text-xs text-earth-500 font-sans">
                  <span className="flex items-center gap-1 text-cognac font-medium">
                    <Sparkles className="w-3.5 h-3.5" /> Verified Profile
                  </span>
                  <span className="text-[11px] group-hover:text-earth-800 transition-colors">
                    Click to celebrate 🎉
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
