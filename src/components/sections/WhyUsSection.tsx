"use client";

import { motion } from "framer-motion";
import { FileCheck, Lightbulb, Users, HeadphonesIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  { icon: FileCheck, title: "Работаем по договору", description: "Официально, без скрытых платежей, с гарантией на выполненную работу. Прозрачные условия сотрудничества.", gradient: "from-primary-500 to-primary-700" },
  { icon: Lightbulb, title: "Собственные решения", description: "Разрабатываем уникальные интеграции под задачи вашего бизнеса. Не шаблонные решения, а индивидуальный подход.", gradient: "from-accent-500 to-accent-700" },
  { icon: Users, title: "Штатная команда экспертов", description: "Не привлекаем фрилансеров. Все специалисты в штате, сертифицированы и обучены по стандартам партнеров.", gradient: "from-green-500 to-green-700" },
  { icon: HeadphonesIcon, title: "Поддержка после внедрения", description: "Не бросаем клиента после завершения проекта. Развиваем систему вместе с ростом вашей компании.", gradient: "from-purple-500 to-purple-700" },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-surface-800" id="why-us">
      <div className="container-custom">
        <SectionHeading badge="Преимущества" title="Почему выбирают нас" description="Мы ценим доверие каждого клиента и стремимся превзойти ожидания" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {reasons.map((reason, index) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
              className="group bg-surface-700 rounded-2xl p-6 border border-surface-500 hover:border-surface-400 transition-all duration-300 hover:-translate-y-2">
              <div className={`w-14 h-14 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
