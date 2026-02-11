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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-700">
                ТОП-1 партнер МойСклад в Казахстане
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-6">
              Автоматизация{" "}
              <span className="gradient-text">бизнеса</span>{" "}
              под ключ
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
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
                    className="px-3 py-1.5 bg-gray-100 rounded-md text-xs font-semibold text-gray-500"
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
            {/* Main dashboard mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 lg:p-8">
              {/* Dashboard header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 h-6 bg-gray-100 rounded-md flex-1" />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={18} className="text-primary-600" />
                    <span className="text-xs text-gray-500">Продажи</span>
                  </div>
                  <p className="text-2xl font-bold text-dark">12.4M</p>
                  <p className="text-xs text-green-600 font-medium">+23% за месяц</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingCart size={18} className="text-accent-600" />
                    <span className="text-xs text-gray-500">Заказы</span>
                  </div>
                  <p className="text-2xl font-bold text-dark">1,847</p>
                  <p className="text-xs text-green-600 font-medium">+12% за месяц</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-green-600" />
                    <span className="text-xs text-gray-500">Клиенты</span>
                  </div>
                  <p className="text-2xl font-bold text-dark">3,291</p>
                  <p className="text-xs text-green-600 font-medium">+8% за месяц</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={18} className="text-purple-600" />
                    <span className="text-xs text-gray-500">Автоматизация</span>
                  </div>
                  <p className="text-2xl font-bold text-dark">98%</p>
                  <p className="text-xs text-green-600 font-medium">процессов</p>
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="bg-gray-50 rounded-xl p-4 h-32 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                      className="flex-1 bg-primary-500 rounded-t-sm opacity-80"
                    />
                  )
                )}
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-gray-100 p-4 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark">Kaspi подключен</p>
                <p className="text-xs text-gray-500">Синхронизация активна</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
