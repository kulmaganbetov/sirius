"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Link2,
  Database,
  Globe,
  BarChart3,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const solutions = [
  {
    icon: ShoppingBag,
    name: "МойСклад + Kaspi",
    description:
      "Полная интеграция МойСклад с Kaspi Магазин. Автоматическая синхронизация товаров, заказов и остатков.",
    price: "от 18 000 тг/мес",
    badge: "Популярное",
    color: "primary",
  },
  {
    icon: Users,
    name: "amoCRM + Kaspi",
    description:
      "Интеграция amoCRM с Kaspi для автоматизации обработки заявок и ведения клиентской базы.",
    price: "от 3 500 тг/мес",
    badge: "14 дней бесплатно",
    color: "accent",
  },
  {
    icon: Database,
    name: "МойСклад + 1С",
    description:
      "Двусторонняя синхронизация данных между МойСклад и 1С. Бухгалтерия и склад в единой системе.",
    price: "от 25 000 тг/мес",
    badge: null,
    color: "green",
  },
  {
    icon: Globe,
    name: "Интеграция с Wildberries",
    description:
      "Подключение МойСклад к маркетплейсу Wildberries. Управление каталогом, заказами и поставками.",
    price: "от 15 000 тг/мес",
    badge: null,
    color: "purple",
  },
  {
    icon: BarChart3,
    name: "Автоматизация склада",
    description:
      "Комплексная настройка складского учета: приемка, отгрузка, инвентаризация, серийный учет.",
    price: "от 200 000 тг",
    badge: null,
    color: "primary",
  },
  {
    icon: Link2,
    name: "CRM для отдела продаж",
    description:
      "Настройка воронки продаж, автоматизация рутинных задач, интеграция с телефонией и мессенджерами.",
    price: "от 150 000 тг",
    badge: null,
    color: "accent",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; badge: string }> = {
  primary: {
    bg: "hover:border-primary-200",
    iconBg: "bg-primary-50 text-primary-600",
    badge: "bg-primary-50 text-primary-700 border-primary-100",
  },
  accent: {
    bg: "hover:border-accent-200",
    iconBg: "bg-accent-50 text-accent-600",
    badge: "bg-accent-50 text-accent-700 border-accent-100",
  },
  green: {
    bg: "hover:border-green-200",
    iconBg: "bg-green-50 text-green-600",
    badge: "bg-green-50 text-green-700 border-green-100",
  },
  purple: {
    bg: "hover:border-purple-200",
    iconBg: "bg-purple-50 text-purple-600",
    badge: "bg-purple-50 text-purple-700 border-purple-100",
  },
};

export default function SolutionsGrid() {
  return (
    <section className="section-padding bg-gray-50" id="solutions">
      <div className="container-custom">
        <SectionHeading
          badge="Продукты"
          title="Наши решения"
          description="Готовые интеграции и решения для автоматизации вашего бизнеса"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {solutions.map((solution, index) => {
            const colors = colorMap[solution.color];
            return (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${colors.bg} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <solution.icon className="w-6 h-6" />
                  </div>
                  {solution.badge && (
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${colors.badge}`}
                    >
                      {solution.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {solution.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="text-lg font-bold text-dark">
                    {solution.price}
                  </span>
                  <Button size="sm" variant="ghost">
                    Подробнее &rarr;
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
