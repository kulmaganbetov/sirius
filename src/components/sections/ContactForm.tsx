"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Send, CheckCircle2, Building2, ListChecks, Settings, User } from "lucide-react";
import Button from "@/components/ui/Button";

const steps = [{ id: 1, title: "Чем занимается ваша компания?", icon: Building2 }, { id: 2, title: "Какие задачи нужно решить?", icon: ListChecks }, { id: 3, title: "Какие услуги интересуют?", icon: Settings }, { id: 4, title: "Контактные данные", icon: User }];
const companyTypes = ["Розничная торговля", "Оптовая торговля", "Онлайн-торговля", "Производство", "Услуги", "Другое"];
const tasks = ["Наладить учет товаров", "Автоматизировать отдел продаж", "Интегрировать Kaspi/WB/Ozon", "Настроить CRM-систему", "Интегрировать с 1С", "Автоматизировать складской учет"];
const serviceOptions = ["МойСклад", "amoCRM", "Битрикс24", "Интеграция с маркетплейсами", "Интеграция с 1С", "Комплексная автоматизация"];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ companyType: "", tasks: [] as string[], services: [] as string[], name: "", phone: "", email: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCompanyType = (type: string) => { setFormData((prev) => ({ ...prev, companyType: type })); setErrors({}); };
  const toggleTask = (task: string) => { setFormData((prev) => ({ ...prev, tasks: prev.tasks.includes(task) ? prev.tasks.filter((t) => t !== task) : [...prev.tasks, task] })); setErrors({}); };
  const toggleService = (service: string) => { setFormData((prev) => ({ ...prev, services: prev.services.includes(service) ? prev.services.filter((s) => s !== service) : [...prev.services, service] })); setErrors({}); };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 0 && !formData.companyType) newErrors.companyType = "Выберите тип компании";
    if (currentStep === 1 && formData.tasks.length === 0) newErrors.tasks = "Выберите хотя бы одну задачу";
    if (currentStep === 2 && formData.services.length === 0) newErrors.services = "Выберите хотя бы одну услугу";
    if (currentStep === 3) {
      if (!formData.name || formData.name.length < 2) newErrors.name = "Введите имя (минимум 2 символа)";
      if (!formData.phone || !/^\+?7\d{10}$/.test(formData.phone.replace(/[\s()-]/g, ""))) newErrors.phone = "Введите корректный номер телефона";
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Введите корректный email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => { if (validateStep() && currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1); };
  const handlePrev = () => { if (currentStep > 0) setCurrentStep((prev) => prev - 1); };

  const handleSubmit = () => {
    if (!validateStep()) return;
    const message = `Новая заявка с сайта Sirius Lab!%0A%0AТип компании: ${formData.companyType}%0AЗадачи: ${formData.tasks.join(", ")}%0AУслуги: ${formData.services.join(", ")}%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email || "не указан"}%0AГород: ${formData.city || "не указан"}`;
    window.open(`https://wa.me/77000200959?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-surface-900 border-t border-surface-600" id="contact">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-accent-400" /></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Заявка отправлена!</h2>
            <p className="text-lg text-gray-400 mb-8">Мы свяжемся с вами в ближайшее время. Обычно отвечаем в течение 30 минут в рабочее время.</p>
            <Button variant="secondary" onClick={() => { setSubmitted(false); setCurrentStep(0); setFormData({ companyType: "", tasks: [], services: [], name: "", phone: "", email: "", city: "" }); }}>Отправить ещё одну заявку</Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-surface-900 border-t border-surface-600" id="contact">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-300 bg-primary-500/10 rounded-full border border-primary-500/20">Оставить заявку</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">Получите бесплатную консультацию</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ответьте на несколько вопросов, и мы подберем оптимальное решение для вашего бизнеса</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${index <= currentStep ? "bg-primary-500 text-white" : "bg-surface-600 text-gray-500"}`}>{index < currentStep ? <CheckCircle2 size={20} /> : step.id}</div>
                  {index < steps.length - 1 && <div className={`hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 mx-2 transition-all ${index < currentStep ? "bg-primary-500" : "bg-surface-600"}`} />}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-700 rounded-2xl p-6 md:p-10 border border-surface-500">
            <AnimatePresence mode="wait">
              <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <h3 className="text-xl font-heading font-bold text-white mb-6">{steps[currentStep].title}</h3>
                {currentStep === 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {companyTypes.map((type) => (<button key={type} onClick={() => handleCompanyType(type)} className={`p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${formData.companyType === type ? "border-primary-500 bg-primary-500/10 text-primary-300" : "border-surface-400 text-gray-300 hover:border-surface-300 hover:bg-surface-600"}`}>{type}</button>))}
                    {errors.companyType && <p className="col-span-2 text-sm text-red-400 mt-1">{errors.companyType}</p>}
                  </div>
                )}
                {currentStep === 1 && (
                  <div className="space-y-3">
                    {tasks.map((task) => (<button key={task} onClick={() => toggleTask(task)} className={`w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all flex items-center gap-3 ${formData.tasks.includes(task) ? "border-primary-500 bg-primary-500/10 text-primary-300" : "border-surface-400 text-gray-300 hover:border-surface-300 hover:bg-surface-600"}`}><div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${formData.tasks.includes(task) ? "border-primary-500 bg-primary-500" : "border-surface-300"}`}>{formData.tasks.includes(task) && <CheckCircle2 size={14} className="text-white" />}</div>{task}</button>))}
                    {errors.tasks && <p className="text-sm text-red-400 mt-1">{errors.tasks}</p>}
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="space-y-3">
                    {serviceOptions.map((service) => (<button key={service} onClick={() => toggleService(service)} className={`w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all flex items-center gap-3 ${formData.services.includes(service) ? "border-primary-500 bg-primary-500/10 text-primary-300" : "border-surface-400 text-gray-300 hover:border-surface-300 hover:bg-surface-600"}`}><div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${formData.services.includes(service) ? "border-primary-500 bg-primary-500" : "border-surface-300"}`}>{formData.services.includes(service) && <CheckCircle2 size={14} className="text-white" />}</div>{service}</button>))}
                    {errors.services && <p className="text-sm text-red-400 mt-1">{errors.services}</p>}
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-300 mb-1.5">Имя *</label><input type="text" value={formData.name} onChange={(e) => { setFormData((prev) => ({ ...prev, name: e.target.value })); setErrors((prev) => ({ ...prev, name: "" })); }} placeholder="Как к вам обращаться?" className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors bg-surface-600 text-white placeholder-gray-500 ${errors.name ? "border-red-400 focus:border-red-400" : "border-surface-400 focus:border-primary-500"}`} />{errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}</div>
                    <div><label className="block text-sm font-medium text-gray-300 mb-1.5">Телефон *</label><input type="tel" value={formData.phone} onChange={(e) => { setFormData((prev) => ({ ...prev, phone: e.target.value })); setErrors((prev) => ({ ...prev, phone: "" })); }} placeholder="+7 (7XX) XXX-XX-XX" className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors bg-surface-600 text-white placeholder-gray-500 ${errors.phone ? "border-red-400 focus:border-red-400" : "border-surface-400 focus:border-primary-500"}`} />{errors.phone && <p className="text-sm text-red-400 mt-1">{errors.phone}</p>}</div>
                    <div><label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label><input type="email" value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value })); setErrors((prev) => ({ ...prev, email: "" })); }} placeholder="email@example.com" className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors bg-surface-600 text-white placeholder-gray-500 ${errors.email ? "border-red-400 focus:border-red-400" : "border-surface-400 focus:border-primary-500"}`} />{errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}</div>
                    <div><label className="block text-sm font-medium text-gray-300 mb-1.5">Город</label><input type="text" value={formData.city} onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))} placeholder="Алматы" className="w-full px-4 py-3 rounded-xl border-2 border-surface-400 bg-surface-600 text-white placeholder-gray-500 text-sm outline-none focus:border-primary-500 transition-colors" /></div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-surface-500">
              {currentStep > 0 ? <button onClick={handlePrev} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"><ArrowLeft size={16} />Назад</button> : <div />}
              {currentStep < steps.length - 1 ? <Button onClick={handleNext}>Далее<ArrowRight size={16} className="ml-2" /></Button> : <Button onClick={handleSubmit}><Send size={16} className="mr-2" />Отправить заявку</Button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
