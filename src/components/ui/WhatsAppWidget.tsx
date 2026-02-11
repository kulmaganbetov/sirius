"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "77000200959";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-80"
          >
            <div className="bg-green-500 p-4 text-white">
              <h3 className="font-semibold text-lg">Sirius Solutions Lab</h3>
              <p className="text-sm text-green-100">
                Обычно отвечаем в течение 30 минут
              </p>
            </div>
            <div className="p-4">
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">
                  Здравствуйте! Чем можем помочь? Напишите нам, и мы ответим в
                  ближайшее время.
                </p>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  "Здравствуйте! Хочу узнать подробнее об услугах Sirius Solutions Lab."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Начать чат в WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="Открыть WhatsApp чат"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
