"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Асхат К.",
    company: "ТОО «ProKitchen»",
    rating: 5,
    text: "Команда Sirius Lab помогла нам полностью автоматизировать складской учет и интегрировать Kaspi Магазин с МойСклад. Теперь все заказы обрабатываются автоматически, ошибки сведены к нулю. Рекомендую!",
  },
  {
    name: "Марат Б.",
    company: "ТОО «TechStore KZ»",
    rating: 5,
    text: "Внедрили amoCRM за неделю. Воронка продаж настроена идеально, менеджеры перестали терять заявки. Интеграция с WhatsApp — просто огонь. Конверсия выросла на 35%.",
  },
  {
    name: "Айгуль Т.",
    company: "ИП «Bloom»",
    rating: 5,
    text: "Долго искали подрядчика для интеграции 1С с МойСклад. Sirius Lab справились блестяще. Все данные синхронизируются, бухгалтерия довольна. Поддержка на высшем уровне.",
  },
  {
    name: "Дамир О.",
    company: "ТОО «AutoParts»",
    rating: 5,
    text: "Подключили Wildberries и Ozon через МойСклад. Теперь управляем всеми маркетплейсами из одного окна. Экономия времени колоссальная. Спасибо команде!",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        <SectionHeading
          badge="Отзывы"
          title="Что говорят клиенты"
          description="Реальные отзывы наших клиентов из 2GIS и Google"
        />

        <div className="max-w-3xl mx-auto mt-14">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-accent-400 fill-accent-400"
                      />
                    )
                  )}
                </div>

                {/* Text */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="font-heading font-bold text-dark text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current
                        ? "bg-primary-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Отзыв ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                aria-label="Следующий отзыв"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* 2GIS link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="https://2gis.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Читать все отзывы на 2GIS
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
