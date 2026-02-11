"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const services = [
  { name: "Внедрение МойСклад", href: "#services" },
  { name: "Внедрение amoCRM", href: "#services" },
  { name: "Внедрение Bitrix24", href: "#services" },
  { name: "Интеграция с 1С", href: "#services" },
  { name: "Интеграция с Kaspi", href: "#services" },
];

const navigation = [
  { name: "Решения", href: "#solutions" },
  { name: "Тарифы", href: "#pricing" },
  { name: "Проекты", href: "#projects" },
  { name: "О нас", href: "#team" },
  { name: "Контакты", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-dark">
                Sirius
              </span>
              <span className="text-xl font-heading font-bold text-primary-600">
                Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50">
                Услуги
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+77000200959"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone size={18} />
              +7 (700) 020-09-59
            </a>
            <Button size="sm">
              <a href="#contact">Обсудить проект</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Меню"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              <div className="pb-2 mb-2 border-b border-gray-100">
                <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Услуги
                </p>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+77000200959"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  <Phone size={18} />
                  +7 (700) 020-09-59
                </a>
                <div className="px-4">
                  <Button className="w-full" size="md">
                    <a href="#contact">Обсудить проект</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
