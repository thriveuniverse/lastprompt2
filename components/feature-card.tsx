"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, description, accentColor = "cyan", index = 0 }: FeatureCardProps) {
  const colorClasses = {
    cyan: "text-cyan-400 bg-cyan-400/10 group-hover:bg-cyan-400/20",
    green: "text-green-400 bg-green-400/10 group-hover:bg-green-400/20",
    orange: "text-orange-400 bg-orange-400/10 group-hover:bg-orange-400/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
    >
      <div className={`w-12 h-12 rounded-lg ${colorClasses[accentColor as keyof typeof colorClasses]} flex items-center justify-center mb-4 transition-colors`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}