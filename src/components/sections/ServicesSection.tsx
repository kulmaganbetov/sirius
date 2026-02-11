"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Package, Users, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const services = [
  { icon: Package, title: "Внедрение МойСклад", description: "Полная настройка системы складского учета для вашего бизнеса. От первичной настройки до обучения сотрудников.", features: ["Настройка справочников и номенклатуры", "Загрузка остатков и контрагентов", "Настройка шаблонов документов", "Интеграция с онлайн-кассой", "Настройка прав доступа", "Обучение персонала работе в системе"], color: "primary" },
  { icon: Users, title: "Внедрение amoCRM", description: "Настройка CRM-системы для автоматизации продаж. Воронки, аналитика, интеграции с мессенджерами.", features: ["Настройка воронки продаж", "Интеграция с телефонией (IP-АТС)", "Подключение WhatsApp, Telegram", "Настройка автоматических задач", "Виджеты для сайта", "Дашборды и отчеты для руководителя"], color: "accent" },
  { icon: Globe, title: "Интеграция с маркетплейсами", description: "Подключение вашего бизнеса к ведущим маркетплейсам Казахстана и России. Единое управление из одного окна.", features: ["Kaspi Магазин — полная интеграция", "Wildberries — управление поставками", "Ozon — синхронизация каталога", "Автоматическое обновление остатков", "Единый центр управления заказами", "Аналитика продаж по каналам"], color: "green" },
];

const colorConfig: Record<string, { iconBg: string; iconColor: string; checkColor: string }> = {
  primary: { iconBg: "bg-primary-500/10", iconColor: "text-primary-400", checkColor: "text-primary-400" },
  accent: { iconBg: "bg-accent-500/10", iconColor: "text-accent-400", checkColor: "text-accent-400" },
  green: { iconBg: "bg-green-500/10", iconColor: "text-green-400", checkColor: "text-green-400" },
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-surface-800" id="services">
      <div className="container-custom">
        <SectionHeading badge="Услуги" title="Что мы делаем" description="Комплексная автоматизация бизнеса от анализа до внедрения и поддержки" />
        <div className="space-y-20 mt-14">
          {services.map((service, index) => {
            const colors = colorConfig[service.color];
            const isReversed = index % 2 !== 0;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-5`}><service.icon className={`w-7 h-7 ${colors.iconColor}`} /></div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (<li key={feature} className="flex items-start gap-3"><CheckCircle2 className={`w-5 h-5 ${colors.checkColor} flex-shrink-0 mt-0.5`} /><span className="text-sm text-gray-300">{feature}</span></li>))}
                  </ul>
                  <Button><a href="#contact">Узнать подробнее</a></Button>
                </div>
                <div className={isReversed ? "lg:order-1" : ""}>
                  <div className="bg-surface-700 border border-surface-500 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <div className="bg-surface-600 rounded-xl shadow-lg border border-surface-400 p-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}><service.icon className={`w-5 h-5 ${colors.iconColor}`} /></div>
                          <div><div className="h-3 bg-surface-400 rounded w-32 mb-1" /><div className="h-2 bg-surface-500 rounded w-20" /></div>
                        </div>
                        <div className="space-y-2"><div className="h-2 bg-surface-500 rounded w-full" /><div className="h-2 bg-surface-500 rounded w-4/5" /><div className="h-2 bg-surface-500 rounded w-3/5" /></div>
                        <div className="grid grid-cols-3 gap-2">{[1, 2, 3].map((i) => (<div key={i} className="bg-surface-700 rounded-lg p-3 text-center"><div className="h-4 bg-surface-400 rounded w-8 mx-auto mb-1" /><div className="h-2 bg-surface-500 rounded w-12 mx-auto" /></div>))}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
