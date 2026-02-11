import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Sirius Solutions Lab — Автоматизация бизнеса в Казахстане",
  description:
    "Официальный партнер МойСклад, amoCRM и Bitrix24. Внедряем системы учета и CRM за 7 дней. Интегрируем с Kaspi, Wildberries, Ozon и 1С.",
  keywords: [
    "автоматизация бизнеса",
    "МойСклад Казахстан",
    "amoCRM внедрение",
    "Bitrix24",
    "интеграция Kaspi",
    "CRM система",
    "1С интеграция",
    "складской учет",
  ],
  openGraph: {
    title: "Sirius Solutions Lab — Автоматизация бизнеса в Казахстане",
    description:
      "Официальный партнер МойСклад, amoCRM и Bitrix24. 500+ успешных внедрений.",
    url: "https://siriuslab.kz",
    siteName: "Sirius Solutions Lab",
    locale: "ru_KZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
