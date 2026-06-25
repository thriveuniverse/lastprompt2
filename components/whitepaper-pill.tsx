"use client";

import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "whitepaper-pill-dismissed";

export function WhitepaperPill() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  const isExcluded = pathname.startsWith("/admin");

  useEffect(() => {
    if (isExcluded) return;
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total > 0.25) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExcluded, pathname]);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setDismissed(true);
  };

  if (isExcluded || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 16, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-gray-900/95 backdrop-blur-sm border border-gray-700/80 rounded-full px-4 py-2.5 shadow-lg shadow-black/40"
        >
          <a
            href="/docs/the_protected_generation_whitepaper.pdf"
            download
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
            <span className="font-medium tracking-wide">Get the Whitepaper</span>
          </a>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="ml-0.5 text-gray-600 hover:text-gray-400 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
