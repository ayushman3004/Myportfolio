"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  ExternalLink, 
  X, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Building,
  Hash
} from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 bg-earth-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-cream-50 rounded-3xl border-2 border-earth-300 shadow-2xl overflow-hidden p-6 sm:p-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-earth-100 hover:bg-earth-200 text-earth-800 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Header Accent */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-cognac/15 text-cognac text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credential</span>
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
            <div className="flex flex-wrap items-center gap-4 text-sm text-earth-700">
              <span className="flex items-center gap-1.5 font-medium">
                <Building className="w-4 h-4 text-cognac" />
                {certificate.issuer}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-mono text-xs">
                <Calendar className="w-3.5 h-3.5 text-earth-500" />
                Issued {certificate.issueDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-mono text-xs bg-earth-100 px-2 py-0.5 rounded">
                <Hash className="w-3 h-3 text-earth-500" />
                {certificate.credentialId}
              </span>
            </div>
          </div>

          {/* High Res Certificate Visual Preview Card */}
          <div className="relative rounded-2xl p-6 sm:p-8 border-4 border-[#3D2919] bg-[#FAF7F0] shadow-inner mb-6 space-y-4">
            {/* Ornate corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold" />

            <div className="text-center space-y-2 border-b border-earth-300/60 pb-4">
              <div className="inline-block font-serif text-xs uppercase tracking-widest text-earth-600">
                Official Certificate of Achievement
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-earth-900">
                {certificate.title}
              </h4>
              <p className="text-xs text-earth-600">
                Conferred to <strong className="text-earth-900 font-serif text-sm">Ayushman Bhattacharya</strong>
              </p>
            </div>

            <p className="text-earth-800 text-xs sm:text-sm leading-relaxed font-light">
              {certificate.description}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-earth-600 block mb-2">
                Evaluated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white border border-earth-200 text-earth-800 text-xs font-medium"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-earth-300/60 text-xs text-earth-600 font-mono">
              <span>Authority: {certificate.issuer}</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Authenticity
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
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-earth-900 hover:bg-cognac text-cream-50 text-sm font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <span>Verify with {certificate.issuer}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
