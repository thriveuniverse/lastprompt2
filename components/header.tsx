"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Cpu, Gamepad2, Building2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "The Engine",
    href: "/engine",
    icon: Cpu,
    color: "hover:text-cyan-400 hover:bg-cyan-400/10",
    activeColor: "text-cyan-400",
  },
  {
    label: "Colony",
    href: "/colony",
    icon: Gamepad2,
    color: "hover:text-green-400 hover:bg-green-400/10",
    activeColor: "text-green-400",
  },
  {
    label: "Corporate",
    href: "/corporate-crisis",
    icon: Building2,
    color: "hover:text-orange-400 hover:bg-orange-400/10",
    activeColor: "text-orange-400",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-gray-950/95 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                LAST <span className="text-cyan-400">PROMPT</span>
              </span>
              <span className="text-[9px] font-mono text-gray-600 tracking-[0.2em] uppercase">
                Decision Intelligence Engine
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm text-gray-400 ${item.color} rounded-lg transition-all duration-200 font-medium`}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-2 px-4 py-2 text-sm bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg transition-all duration-200 font-medium"
            >
              Register Interest
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800"
          >
            <nav className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-gray-300 ${item.color} rounded-lg transition-all`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all font-medium"
              >
                Register Interest
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}