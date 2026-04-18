"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  url: string;
  iconName: string;
  index: number;
}

export default function CategoryCard({ title, url, iconName, index }: CategoryCardProps) {
  const Icon = (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Palette;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass glass-hover p-6 rounded-2xl flex items-center justify-between group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors duration-300">
          <Icon size={24} />
        </div>
        <span className="text-lg font-semibold tracking-tight">{title}</span>
      </div>

      <div className="text-gray-500 group-hover:text-white transition-colors duration-300 relative z-10">
        <Icons.ArrowUpRight size={20} />
      </div>
    </motion.a>
  );
}
