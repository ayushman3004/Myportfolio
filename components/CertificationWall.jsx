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
  const trackRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollRange, setScrollRange] = useState(0);

  // Measure exact track scroll width to guarantee 100% perfect horizontal travel
  useEffect(() => {
    const updateDimensions = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile && trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Travel distance needed so the final certificate is fully centered in viewport
        const distance = Math.max(0, totalTrackWidth - viewportWidth + 140);
        setScrollRange(distance);
      }
    };

    updateDimensions();
    // Allow images & fonts to load and re-measure accurately
    const timer = setTimeout(updateDimensions, 400);
    window.addEventListener("resize", updateDimensions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Track vertical scroll progress within the tall sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct, smooth response to scroll input
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Map progress:
  // From 0 to 0.88: Smoothly pan across all 6 broad certificate wallframes
  // From 0.88 to 1.0: Hold and lock the final certificate in place before unlocking to the next section
  const x = useTransform(
    smoothProgress, 
    [0, 0.88, 1], 
    [0, -scrollRange || -3200, -scrollRange || -3200]
  );
  
  const progressLineWidth = useTransform(smoothProgress, [0, 0.88, 1], ["5%", "100%", "100%"]);

  return (
    <>
      <section
        id="certifications"
        ref={containerRef}
        className={`relative ${
          isMobile ? "min-h-screen py-20" : "h-[500vh]"
        } bg-[#231710] bg-gallery-wall text-cream-50`}
      >
        {/* Sticky Gallery Viewport (Fixed at top while scrolling) */}
        <div
          className={`${
            isMobile
              ? "relative min-h-screen flex flex-col justify-center px-4"
              : "sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8"
          }`}
        >
          {/* Gallery Ambient Spotlights & Warm Wall Glow */}
          <div className="absolute inset-0 gallery-spotlight pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* Top Gallery Header */}
          <div className="relative z-20 max-w-6xl mx-auto w-full px-6 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-walnut-800/90 border border-gold/40 text-gold-light text-xs font-semibold uppercase tracking-widest mb-1.5 shadow-md">
                <Award className="w-3.5 h-3.5 text-gold" />
                <span>Curated Gallery &amp; Wall of Credentials</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-100 tracking-tight">
                Verified Certifications
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-3 text-xs text-earth-300 font-mono bg-black/50 px-4 py-2 rounded-full border border-gold/20 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Scroll down to walk past the gallery wall</span>
            </div>
          </div>

          {/* Center: Broad Picture Frames Gallery Track */}
          <div className="relative z-10 w-full my-auto py-2 overflow-hidden">
            {isMobile ? (
              /* Mobile Swipeable Track */
              <div className="flex gap-8 overflow-x-auto px-4 pb-8 pt-4 snap-x snap-mandatory no-scrollbar">
                {certifications.map((cert, idx) => (
                  <div
                    key={cert.id}
                    className="snap-center shrink-0 w-[340px] sm:w-[440px] flex flex-col items-center"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <FrameItem cert={cert} idx={idx} onInspect={() => setSelectedCert(cert)} />
                  </div>
                ))}
              </div>
            ) : (
              /* Desktop Scroll-Jacked Framer Motion Track */
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex items-center gap-16 sm:gap-20 pl-12 sm:pl-28 pr-[35vw] will-change-transform"
              >
                {certifications.map((cert, idx) => (
                  <div
                    key={cert.id}
                    className="shrink-0 w-[560px] md:w-[640px] lg:w-[720px] xl:w-[780px] flex flex-col items-center cursor-pointer group"
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
                  className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full shadow-xs"
                />
              </div>
            </div>

            <div className="text-xs font-serif italic text-earth-400 hidden sm:block">
              Click any frame to view full resolution &amp; download PDF
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gold bg-black/40 px-3 py-1 rounded-full border border-gold/30">
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

// Sub-component: Realistic Broad Landscape Wallframe with Wood Moulding & Gold Plaque
function FrameItem({ cert, idx, onInspect }) {
  return (
    <div
      style={{ transform: `rotate(${cert.tilt})` }}
      className="w-full flex flex-col items-center transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]"
    >
      {/* Wall Hanging Hardware (Brass Nail & Gallery Hanging Wire) */}
      <div className="flex flex-col items-center -mb-2 z-10">
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#F5D77F] to-[#9B7825] border border-[#5A4010] shadow-md" />
        <div className="w-24 h-5 border-t-2 border-l border-r border-[#D4AF37]/50 rounded-t-sm shadow-sm" />
      </div>

      {/* Broad Museum Picture Frame */}
      <div className="w-full rounded-xl bg-gradient-to-br from-[#452D1D] via-[#2A1A0F] to-[#452D1D] p-3.5 sm:p-5 border-[14px] sm:border-[18px] border-[#2E1C0F] shadow-2xl ring-2 ring-[#C59E3F]/40 ring-offset-2 ring-offset-[#1E1108] hover:ring-[#E5C158] transition-all duration-300">
        
        {/* Fine Gold Bevel Liner */}
        <div className="p-1 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#AA8820] shadow-md">
          
          {/* Museum-Grade Matting Board (Warm Ivory Linen) */}
          <div className="bg-[#FAF7F0] p-4 sm:p-6 rounded-xs shadow-inner relative overflow-hidden border border-[#D5C7B7]">
            
            {/* Subtle Matting Guilloché Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#332211_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* Certificate Canvas / High-Res Landscape Image */}
            <div className="relative w-full aspect-[1.38/1] rounded-xs overflow-hidden bg-white shadow-md border border-earth-300/80 group/img">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                className="object-contain object-center group-hover/img:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 768px) 380px, (max-width: 1200px) 700px, 800px"
                priority={idx < 2}
              />

              {/* Interactive Hover Overlay with Inspect Badge */}
              <div className="absolute inset-0 bg-earth-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInspect();
                  }}
                  className="px-5 py-2.5 rounded-full bg-cream-50 text-earth-950 text-xs sm:text-sm font-semibold shadow-2xl hover:bg-gold hover:text-earth-950 transition-colors flex items-center gap-2 transform group-hover/img:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Credential &amp; PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engraved Metallic Brass Plaque Mounted Directly Under Frame */}
      <div className="mt-4 px-6 py-2.5 rounded-sm brass-plaque flex items-center justify-between gap-4 w-full max-w-[480px] shadow-lg border border-[#88651E]">
        <div className="w-2 h-2 rounded-full bg-[#3A291A]/70 shadow-inner shrink-0" />
        <div className="flex-1 text-center">
          <p className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-earth-950 leading-snug">
            {cert.title}
          </p>
          <p className="font-sans text-[10px] sm:text-[11px] font-semibold text-earth-800 mt-0.5 tracking-tight">
            {cert.issuer} • {cert.issueDate} • ID: {cert.credentialId}
          </p>
        </div>
        <div className="w-2 h-2 rounded-full bg-[#3A291A]/70 shadow-inner shrink-0" />
      </div>
    </div>
  );
}
