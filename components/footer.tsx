import Link from "next/link";
import { Shield, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-satoshi text-lg font-bold text-[#C9A66B] mb-1">
              THE MANDATE
            </h3>
            <p className="text-[9px] font-mono text-cyan-400/50 tracking-[0.15em] uppercase mb-4">
              Powered by Last Prompt
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A private decision intelligence platform. Not what you choose — how you reason.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/engine" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1.5">
                  <Cpu className="w-3 h-3" /> The Engine
                </Link>
              </li>
              <li>
                <Link href="/the-hidden-gap" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  The Hidden Gap
                </Link>
              </li>
              <li>
                <Link href="/colony" className="text-gray-400 hover:text-[#D0633A] transition-colors text-sm">
                  Colony
                </Link>
              </li>
              <li>
                <Link href="/corporate-crisis" className="text-gray-400 hover:text-[#3498DB] transition-colors text-sm">
                  Corporate Reckoning
                </Link>
              </li>
              <li>
                <Link href="/lockwood" className="text-gray-400 hover:text-[#BAA5E8] transition-colors text-sm">
                  Lockwood
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/delete-data" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Delete My Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-gray-500 text-xs font-mono">
              © 2026 Jonathan and Miranda KELLY Dépôt INPI e-Soleau n° DSO2026006207. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] font-mono leading-relaxed max-w-2xl">
              Unauthorized copying, distribution, modification, or commercial use prohibited.
              <br className="sm:hidden" /> For licensing or inquiries: <a href="mailto:artikelly@hotmail.co.uk" className="text-cyan-400 hover:underline">artikelly@hotmail.co.uk</a>
            </p>
          </div>
          <p className="text-gray-700 text-xs font-mono shrink-0">ENGINE v1.0 — EVALUATION ACTIVE</p>
        </div>
      </div>
    </footer>
  );
}