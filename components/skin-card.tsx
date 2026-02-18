"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SkinCardProps {
  href: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  gradient: string;
  features: string[];
}

export function SkinCard({
  href,
  title,
  tagline,
  description,
  icon: Icon,
  accentColor,
  gradient,
  features,
}: SkinCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-black/30"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
      <div className="relative p-8">
        <div className={`w-16 h-16 rounded-xl bg-${accentColor}-400/10 flex items-center justify-center mb-6`}>
          <Icon className={`w-8 h-8 text-${accentColor}-400`} />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wider text-${accentColor}-400`}>{tagline}</span>
        <h3 className="text-2xl font-bold text-white mt-2 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <span className={`w-1.5 h-1.5 rounded-full bg-${accentColor}-400`} />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 px-6 py-3 bg-${accentColor}-500 hover:bg-${accentColor}-600 text-black font-semibold rounded-lg transition-all group-hover:gap-3`}
        >
          Explore {title}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}