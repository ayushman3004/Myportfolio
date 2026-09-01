"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import CertificateModal from "./CertificateModal";
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Scroll, 
  CheckCircle2, 
  ChevronRight,
  Maximize2,
  FileText
} from "lucide-react";

export default function CertificationWall() {
  const containerRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll Jacking calculation for Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Transform vertical scroll progress into horizontal translateX
  // Translates the gallery track across the viewport for 6 certificates
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);
  const progressLineWidth = useTransform(smoothProgress, [0, 1], ["5%", "100%"]);

  return (
    <>
      <section
        id="certifications"
        ref={containerRef}
        className={`relative ${
          isMobile ? "min-h-screen py-20" : "h-[400vh]"
        } bg-[#231710] bg-gallery-wall text-cream-50`}
      >
        {/* Sticky Gallery Viewport */}
        <div
          className={`${
            isMobile
              ? "relative min-h-screen flex flex-col justify-center px-4"
              : "sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10"
          }`}
        >
          {/* Gallery Ambient Spotlights & Atmosphere */}
          <div className="absolute inset-0 gallery-spotlight pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* Top Gallery Header */}
          <div className="relative z-20 max-w-6xl mx-auto w-full px-6 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-walnut-800/80 border border-gold/40 text-gold-light text-xs font-semibold uppercase tracking-widest mb-2">
                <Award className="w-3.5 h-3.5 text-gold" />
                <span>Curated Gallery &amp; Wall of Credentials</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-100 tracking-tight">
                Verified Certifications
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-3 text-xs text-earth-300 font-mono bg-black/40 px-4 py-2 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Scroll down to walk past the gallery wall</span>
            </div>
          </div>

          {/* Center: Picture Frames Gallery Track */}
          <div className="relative z-10 w-full my-auto py-6">
            {isMobile ? (
              /* Mobile Swipeable Track */
              <div className="flex gap-8 overflow-x-auto px-4 pb-8 pt-4 snap-x snap-mandatory no-scrollbar">
                {certifications.map((cert, idx) => (
                  <div
                    key={cert.id}
                    className="snap-center shrink-0 w-[310px] sm:w-[360px] flex flex-col items-center"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <FrameItem cert={cert} idx={idx} onInspect={() => setSelectedCert(cert)} />
                  </div>
                ))}
              </div>
            ) : (
              /* Desktop Scroll-Jacked Framer Motion Track */
              <motion.div
                style={{ x }}
                className="flex items-center gap-12 sm:gap-16 pl-12 sm:pl-24 pr-[25vw] will-change-transform"
              >
                {certifications.map((cert, idx) => (
                  <div
                    key={cert.id}
                    className="shrink-0 w-[440px] lg:w-[480px] xl:w-[520px] flex flex-col items-center cursor-pointer group"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <FrameItem cert={cert} idx={idx} onInspect={() => setSelectedCert(cert)} />
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Bottom Bar: Progress Indicator & Navigation */}
          <div className="relative z-20 max-w-6xl mx-auto w-full px-6 sm:px-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-earth-400">
                Gallery Progress
              </span>
              <div className="w-32 sm:w-48 h-1.5 bg-earth-900 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  style={{ width: isMobile ? "100%" : progressLineWidth }}
                  className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                />
              </div>
            </div>

            <div className="text-xs font-serif italic text-earth-400 hidden sm:block">
              Click any picture frame for original PDF &amp; official verification
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gold">
                06 Official Credentials
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Credential Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
}

// Sub-component: Framed Picture on Wall with Brass Plaque
function FrameItem({ cert, idx, onInspect }) {
  return (
    <div
      style={{ transform: `rotate(${cert.tilt})` }}
      className="flex flex-col items-center transition-transform duration-500 hover:rotate-0 hover:scale-[1.03]"
    >
      {/* Wall Hanging Wire & Nail */}
      <div className="w-2 h-2 rounded-full bg-gold shadow-md -mb-1 z-10" />
      <div className="w-16 h-4 border-t-2 border-l border-r border-gold/40 rounded-t-sm -mb-2" />

      {/* Picture Frame Border (Wood & Gold Inset) */}
      <div className="wood-frame p-3 sm:p-4 rounded-lg border-[10px] border-[#311E11] shadow-frame hover:shadow-frame-gold transition-all duration-300">
        {/* Ivory Matting Board */}
        <div className="bg-[#FAF7F0] p-2.5 sm:p-3 rounded-sm shadow-inner relative overflow-hidden flex flex-col justify-between border border-earth-300/80">
          
          {/* Certificate Image Inside Frame */}
          <div className="relative w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-sm overflow-hidden bg-white shadow-sm border border-earth-200 group/img">
            <Image
              src={cert.imageUrl}
              alt={cert.title}
              fill
              className="object-contain object-center group-hover/img:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 300px, 500px"
              priority={idx < 2}
            />

            {/* Hover overlay with inspect button */}
            <div className="absolute inset-0 bg-earth-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onInspect();
                }}
                className="px-4 py-2 rounded-full bg-cream-50 text-earth-950 text-xs font-semibold shadow-lg hover:bg-gold hover:text-earth-950 transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Full PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Engraved Brass Plaque Mounted Under Frame */}
      <div className="mt-4 px-4 py-2 rounded-sm brass-plaque flex items-center gap-3 max-w-[360px] text-center">
        <div className="w-1.5 h-1.5 rounded-full bg-earth-900/60 shadow-inner shrink-0" />
        <div className="flex-1">
          <p className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-earth-950 leading-tight">
            {cert.title}
          </p>
          <p className="font-sans text-[10px] font-semibold text-earth-800 mt-0.5 tracking-tight">
            {cert.issuer} • {cert.issueDate}
          </p>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-earth-900/60 shadow-inner shrink-0" />
      </div>
    </div>
  );
}
