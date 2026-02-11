"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    company: "Toyota Center",
    location: "Уральск",
    industry: "Автодилер",
    description:
      "Внедрение МойСклад для учета запчастей и аксессуаров. Интеграция с 1С для бухгалтерского учета.",
    results: [
      { icon: TrendingUp, text: "+40% скорость обработки" },
      { icon: Clock, text: "-60% время на учет" },
    ],
    color: "primary",
  },
  {
    company: "ProKitchen",
    location: "Алматы",
    industry: "E-commerce",
    description:
      "Настройка amoCRM и интеграция с Kaspi Магазин. Автоматизация обработки заказов и складского учета.",
    results: [
      { icon: TrendingUp, text: "+35% конверсия" },
      { icon: Clock, text: "-50% ручной работы" },
    ],
    color: "accent",
  },
  {
    company: "Bloom",
    location: "Алматы",
    industry: "Розничная торговля",
    description:
      "Комплексная автоматизация: МойСклад + amoCRM + Kaspi. Единая экосистема для управления бизнесом.",
    results: [
      { icon: TrendingUp, text: "+55% продаж" },
      { icon: Clock, text: "3x быстрее отгрузка" },
    ],
    color: "green",
  },
  {
    company: "TechStore KZ",
    location: "Нур-Султан",
    industry: "Электроника",
    description:
      "Интеграция с Wildberries и Ozon. Единое управление каталогом и остатками на всех маркетплейсах.",
    results: [
      { icon: TrendingUp, text: "+70% охват рынка" },
      { icon: Clock, text: "-80% ошибок в заказах" },
    ],
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary-50 text-primary-700",
  accent: "bg-accent-50 text-accent-700",
  green: "bg-green-50 text-green-700",
  purple: "bg-purple-50 text-purple-700",
};

export default function ProjectsSection() {
  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        <SectionHeading
          badge="Портфолио"
          title="Наши проекты"
          description="Реальные кейсы автоматизации бизнеса наших клиентов"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-dark">
                    {project.company}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.industry}, {project.location}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    colorMap[project.color]
                  }`}
                >
                  Кейс
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-50">
                {project.results.map((result) => (
                  <div
                    key={result.text}
                    className="flex items-center gap-2 text-sm font-medium text-green-600"
                  >
                    <result.icon size={16} />
                    {result.text}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Обсудить ваш проект
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
