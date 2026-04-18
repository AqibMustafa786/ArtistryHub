"use client";

import { motion } from "framer-motion";
import portfolio from "@/config/portfolio.json";

export default function Header() {
  const { branding } = portfolio;

  return (
    <header className="pt-16 pb-8 px-4 flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 rounded-full glass flex items-center justify-center mb-6 overflow-hidden relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-3xl font-bold text-gradient">
          {branding.name.charAt(0)}
        </span>
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2"
      >
        {branding.name}
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-400 max-w-md mx-auto text-lg"
      >
        {branding.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <a
          href={branding.fullProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full glass glass-hover text-sm font-medium flex items-center gap-2 group"
        >
          View Full Behance Profile
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </a>
      </motion.div>
    </header>
  );
}
