"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, FolderCheck, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "компаний работают с нами",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: Calendar,
    value: "5+",
    label: "лет опыта",
    color: "text-accent-600",
    bg: "bg-accent-50",
  },
  {
    icon: FolderCheck,
    value: "250+",
    label: "проектов внедрено",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "клиентов довольны",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-dark mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
