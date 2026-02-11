"use client";

import { motion } from "framer-motion";

const partners = ["МойСклад", "amoCRM", "Битрикс24", "Kaspi.kz", "1С", "Wildberries", "Ozon"];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-surface-900 border-y border-surface-600" id="partners">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Официальные партнеры</h2>
          <p className="text-gray-400">Работаем напрямую с ведущими платформами</p>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div key={partner} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="group">
              <div className="px-8 py-4 bg-surface-700 rounded-xl border border-surface-500 opacity-50 hover:opacity-100 transition-all duration-300 hover:border-primary-500/30 cursor-default">
                <span className="text-lg font-semibold text-gray-400 group-hover:text-primary-300 transition-colors">{partner}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
