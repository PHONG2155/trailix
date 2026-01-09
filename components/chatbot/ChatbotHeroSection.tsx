import { ArrowRight, MessageSquare } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const ChatbotHeroSection = () => {
  const { t } = useTranslation('chatbot');

  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white py-20">

      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-100 rounded-full blur-[220px] opacity-40" />

      {/* ===== CONTENT ===== */}
      {/* ĐÃ SỬA: max-w-6xl -> max-w-screen-2xl để khung rộng hơn, không bị bó hẹp */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-8">
          <MessageSquare className="w-4 h-4 text-brand-red" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            {t('hero.badge')}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase mb-6">
          <span className="block leading-tight">
            {t('hero.title.line1')}
          </span>

          <span className="block text-brand-red mt-2 md:mt-4 leading-tight md:whitespace-nowrap">
            {t('hero.title.line2')}
          </span>
        </h1>

        {/* Sub headline */}
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-12">
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-red-500/40 hover:bg-red-700 transition"
          >
            {t('hero.demoCTA')}
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-gray-300 text-gray-800 hover:border-brand-red hover:text-brand-red transition"
          >
            {t('hero.consultCTA')}
          </button>
        </div>
      </div>
    </section>
  );
};