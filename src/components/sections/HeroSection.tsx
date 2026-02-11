"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  BarChart3,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-300">
                ТОП-1 партнер МойСклад в Казахстане
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Автоматизация{" "}
              <span className="gradient-text">бизнеса</span>{" "}
              под ключ
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              Внедряем МойСклад, amoCRM и Bitrix24. Интегрируем с Kaspi, WB,
              Ozon и 1С. Настраиваем за 7 дней с гарантией.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  Бесплатная консультация
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#pricing" className="flex items-center gap-2">
                  Посмотреть тарифы
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>

            {/* Partner logos */}
            <div className="flex flex-wrap items-center gap-6 opacity-60">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Партнеры:
              </span>
              <div className="flex items-center gap-6">
                {["МойСклад", "amoCRM", "Bitrix24"].map((name) => (
                  <div
                    key={name}
                    className="px-3 py-1.5 bg-surface-600 rounded-md text-xs font-semibold text-gray-400"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-surface-700 rounded-2xl shadow-2xl shadow-black/40 border border-surface-500 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 h-6 bg-surface-500 rounded-md flex-1" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={18} className="text-primary-400" />
                    <span className="text-xs text-gray-400">Продажи</span>
                  </div>
                  <p className="text-2xl font-bold text-white">12.4M</p>
                  <p className="text-xs text-accent-400 font-medium">+23% за месяц</p>
                </div>
                <div className="bg-accent-500/10 border border-accent-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingCart size={18} className="text-accent-400" />
                    <span className="text-xs text-gray-400">Заказы</span>
                  </div>
                  <p className="text-2xl font-bold text-white">1,847</p>
                  <p className="text-xs text-accent-400 font-medium">+12% за месяц</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-green-400" />
                    <span className="text-xs text-gray-400">Клиенты</span>
                  </div>
                  <p className="text-2xl font-bold text-white">3,291</p>
                  <p className="text-xs text-accent-400 font-medium">+8% за месяц</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={18} className="text-purple-400" />
                    <span className="text-xs text-gray-400">Автоматизация</span>
                  </div>
                  <p className="text-2xl font-bold text-white">98%</p>
                  <p className="text-xs text-accent-400 font-medium">процессов</p>
                </div>
              </div>

              <div className="bg-surface-600 rounded-xl p-4 h-32 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                      className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-sm opacity-80"
                    />
                  )
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-surface-700 rounded-xl shadow-xl shadow-black/30 border border-surface-500 p-4 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Kaspi подключен</p>
                <p className="text-xs text-gray-400">Синхронизация активна</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
