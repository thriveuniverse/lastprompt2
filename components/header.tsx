"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Cpu, Gamepad2, Building2, ChevronDown, BookOpen, Atom, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "The Engine",
    href: "/engine",
    icon: Cpu,
    color: "hover:text-cyan-400 hover:bg-cyan-400/10",
    activeColor: "text-cyan-400",
    dropdown: [
      {
        label: "How it Works",
        href: "/engine",
        desc: "Architecture, rubric, and evaluation logic",
        icon: Cpu,
        iconColor: "text-cyan-400",
      },
      {
        label: "Theoretical Foundations",
        href: "/observer-patch-holography",
        desc: "Observer Patch Holography and the science behind the engine",
        icon: Atom,
        iconColor: "text-cyan-400",
      },
    ],
  },
  {
    label: "Skins",
    href: "/skins",
    icon: Layers,
    color: "hover:text-[#C9A66B] hover:bg-[#C9A66B]/10",
    activeColor: "text-[#C9A66B]",
    dropdown: [
      {
        label: "All Skins",
        href: "/skins",
        desc: "Engine modularity — any scenario can become a skin",
        icon: Layers,
        iconColor: "text-[#C9A66B]",
      },
      {
        label: "Colony",
        href: "/colony",
        desc: "Post-collapse survival — lead 100 survivors",
        icon: Gamepad2,
        iconColor: "text-[#D0633A]",
      },
      {
        label: "Corporate Reckoning",
        href: "/corporate-crisis",
        desc: "Executive crisis simulation",
        icon: Building2,
        iconColor: "text-[#3498DB]",
      },
      {
        label: "Lockwood",
        href: "/lockwood",
        desc: "Historical decision simulation — your timeline, your thread",
        icon: Gamepad2,
        iconColor: "text-[#BAA5E8]",
      },
    ],
  },
  {
    label: "The Hidden Gap",
    href: "/the-hidden-gap",
    icon: BookOpen,
    color: "hover:text-purple-400 hover:bg-purple-400/10",
    activeColor: "text-purple-400",
    dropdown: null,
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
              <span className="font-satoshi text-lg font-bold text-[#C9A66B] tracking-tight group-hover:text-[#D4AF77] transition-colors">
                THE MANDATE
              </span>
              <span className="text-[9px] font-mono text-cyan-400/50 tracking-[0.15em] uppercase">
                Powered by Last Prompt
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" ref={dropdownRef}>
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 text-sm text-gray-400 ${item.color} rounded-lg transition-all duration-200 font-medium`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-gray-950 border border-gray-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-gray-900 transition-colors group/sub border-b border-gray-900 last:border-0"
                          >
                            <div className="shrink-0 w-7 h-7 rounded-md bg-gray-800 flex items-center justify-center mt-0.5">
                              <sub.icon className={`w-3.5 h-3.5 ${sub.iconColor ?? "text-cyan-400"}`} />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white group-hover/sub:text-cyan-400 transition-colors">
                                {sub.label}
                              </div>
                              <div className="text-xs text-gray-600 leading-snug mt-0.5">
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm text-gray-400 ${item.color} rounded-lg transition-all duration-200 font-medium`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              )
            )}
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
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => !item.dropdown && setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-gray-300 ${item.color} rounded-lg transition-all`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-gray-800 pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-cyan-400 rounded-lg transition-all"
                        >
                          <sub.icon className="w-3.5 h-3.5" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
