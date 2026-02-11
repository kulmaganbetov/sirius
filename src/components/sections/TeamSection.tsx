"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  { name: "Ербол", role: "Founder & Business Analyst", initials: "ЕМ", color: "from-primary-500 to-primary-700" },
  { name: "Эльмира", role: "Director", initials: "ЭК", color: "from-accent-500 to-accent-700" },
  { name: "Нурсултан", role: "1C Developer", initials: "НА", color: "from-green-500 to-green-700" },
  { name: "Вадим", role: "Backend Developer", initials: "ВК", color: "from-purple-500 to-purple-700" },
  { name: "Бекберген", role: "System Analyst", initials: "БС", color: "from-red-500 to-red-700" },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-surface-900" id="team">
      <div className="container-custom">
        <SectionHeading badge="Команда" title="Наши специалисты" description="Сертифицированные эксперты с опытом работы в крупных проектах" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14">
          {team.map((member, index) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }} className="group text-center">
              <div className="relative mb-4 mx-auto w-28 h-28 md:w-32 md:h-32">
                <div className={`w-full h-full bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl md:text-3xl font-bold text-white">{member.initials}</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-white text-lg">{member.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
