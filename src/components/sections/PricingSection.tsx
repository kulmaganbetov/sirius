"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Базовый",
    price: "250 000",
    period: "разовый платеж",
    description: "Для небольших компаний, начинающих автоматизацию",
    popular: false,
    features: [
      { name: "Настройка системы МойСклад", included: true },
      { name: "Загрузка номенклатуры и остатков", included: true },
      { name: "Обучение до 4 сотрудников", included: true },
      { name: "Настройка шаблонов документов", included: true },
      { name: "Техподдержка 1 месяц", included: true },
      { name: "Интеграция с Kaspi", included: false },
      { name: "Интеграция с 1С", included: false },
      { name: "Настройка производства", included: false },
    ],
  },
  {
    name: "Бизнес",
    price: "300 000",
    period: "разовый платеж",
    description: "Оптимальный выбор для растущего бизнеса",
    popular: true,
    features: [
      { name: "Все из тарифа Базовый", included: true },
      { name: "Интеграция с Kaspi Магазин", included: true },
      { name: "Обучение до 7 сотрудников", included: true },
      { name: "Настройка прав доступа", included: true },
      { name: "Техподдержка 1 месяц", included: true },
      { name: "Интеграция с WhatsApp", included: true },
      { name: "Интеграция с 1С", included: false },
      { name: "Настройка производства", included: false },
    ],
  },
  {
    name: "Премиум",
    price: "450 000",
    period: "разовый платеж",
    description: "Полная автоматизация для крупных компаний",
    popular: false,
    features: [
      { name: "Все из тарифа Бизнес", included: true },
      { name: "Интеграция с 1С", included: true },
      { name: "Настройка производства", included: true },
      { name: "Технологические карты", included: true },
      { name: "Приоритетная поддержка", included: true },
      { name: "Обучение без ограничений", included: true },
      { name: "Выделенный менеджер", included: true },
      { name: "SLA-соглашение", included: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding bg-gray-50" id="pricing">
      <div className="container-custom">
        <SectionHeading
          badge="Тарифы"
          title="Прозрачные цены"
          description="Выберите подходящий тариф для вашего бизнеса. Без скрытых платежей."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border ${
                plan.popular
                  ? "border-primary-300 shadow-xl scale-105 z-10"
                  : "border-gray-100"
              } hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-primary-600 text-white text-sm font-semibold rounded-full">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-heading font-bold text-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-gray-500">от</span>
                  <span className="text-4xl font-heading font-bold text-dark">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">тг</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{plan.period}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
              >
                <a href="#contact">Оставить заявку</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          * Итоговая стоимость зависит от объема работ. Точный расчет после
          консультации.
        </motion.p>
      </div>
    </section>
  );
}
