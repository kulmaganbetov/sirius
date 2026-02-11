"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={centered ? "text-center" : ""}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-300 bg-primary-500/10 rounded-full border border-primary-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
