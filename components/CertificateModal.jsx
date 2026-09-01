"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Award, 
  ExternalLink, 
  X, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Building,
  Hash,
  FileDown,
  Maximize2
} from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 bg-earth-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-cream-50 rounded-3xl border-2 border-earth-300 shadow-2xl overflow-hidden p-6 sm:p-8 my-8 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-earth-100 hover:bg-earth-200 text-earth-800 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Header Accent */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-cognac/15 text-cognac text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Official Credential</span>
            </span>
            <span className="text-xs font-mono text-earth-500">
              {certificate.badgeType}
            </span>
          </div>

          {/* Title & Issuer */}
          <div className="space-y-2 mb-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 leading-tight">
              {certificate.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-earth-700">
              <span className="flex items-center gap-1.5 font-medium text-earth-900">
                <Building className="w-4 h-4 text-cognac" />
                {certificate.issuer}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-earth-500" />
                {certificate.issueDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-mono bg-earth-100 px-2.5 py-0.5 rounded border border-earth-200">
                <Hash className="w-3 h-3 text-earth-500" />
                {certificate.credentialId}
              </span>
            </div>
          </div>

          {/* High Res Certificate Image Display */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden bg-earth-100 border-2 border-earth-300 shadow-lg mb-6">
            <Image
              src={certificate.imageUrl}
              alt={certificate.title}
              fill
              className="object-contain p-2 sm:p-4"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Detailed Curriculum & Competency Tags */}
          <div className="space-y-4 bg-earth-100/60 p-5 rounded-2xl border border-earth-200 mb-6">
            <p className="text-earth-800 text-xs sm:text-sm leading-relaxed font-light">
              {certificate.description}
            </p>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-earth-600 block mb-2">
                Core Competencies Verified:
              </span>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-white border border-earth-300/80 text-earth-900 text-xs font-medium shadow-xs"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-earth-200 text-xs text-earth-600 font-mono">
              <span>Issuing Body: {certificate.issuer}</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Authenticity Verified
              </span>
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-earth-100 hover:bg-earth-200 text-earth-800 text-sm font-medium transition-colors"
            >
              Close
            </button>
            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-earth-900 hover:bg-cognac text-cream-50 text-sm font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Download / Open Original PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
