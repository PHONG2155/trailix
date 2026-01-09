import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Users, CheckCircle2 } from "lucide-react";
import { Reveal } from "../ui/Shared";
import { useTranslation } from 'react-i18next';

export const FrameworksSection = () => {
  const { t } = useTranslation('business');
  const packages = t('frameworks.packages', { returnObjects: true }) as any[];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== TITLE ===== */}
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase leading-tight">
              {t('frameworks.title')}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
          </Reveal>
        </div>

        {/* ===== PACKAGES ===== */}
        <div className="space-y-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative overflow-hidden bg-white rounded-[2rem] p-8 lg:p-12
                         shadow-xl shadow-gray-200/50 border border-gray-100
                         group hover:border-brand-red/20 transition-colors duration-300"
            >
              {/* Background Number */}
              <div className="absolute -top-10 -right-10 text-[12rem] md:text-[15rem]
                              font-black text-gray-50 leading-none
                              pointer-events-none select-none
                              group-hover:text-red-50/50 transition-colors duration-500">
                {pkg.id}
              </div>

              <div className="relative z-10">
                {/* ===== HEADER ===== */}
                <div className="mb-10 border-b border-gray-100 pb-8">
                  <h3 className="text-2xl md:text-4xl font-black font-display text-gray-900 mb-6 uppercase tracking-tight">
                    {pkg.title}
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    <div className="px-5 py-2.5 bg-red-50 text-brand-red rounded-full
                                    font-bold text-sm border border-red-100
                                    flex items-center gap-2 shadow-sm">
                      <PlayCircle
                        size={18}
                        fill="currentColor"
                        className="text-red-200"
                      />
                      <span className="text-gray-900">{t('frameworks.durationLabel')}:</span>{" "}
                      {pkg.duration}
                    </div>

                    <div className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full
                                    font-bold text-sm border border-blue-100
                                    flex items-center gap-2 shadow-sm">
                      <Users
                        size={18}
                        fill="currentColor"
                        className="text-blue-200"
                      />
                      <span className="text-gray-900">{t('frameworks.targetLabel')}:</span>{" "}
                      {pkg.target}
                    </div>
                  </div>
                </div>

                {/* ===== MODULES GRID ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {pkg.modules.map((mod, mIdx) => (
                    <div key={mIdx} className="group/module flex flex-col h-full">
                      {/* Tiêu đề Module */}
                      <h4 className="text-lg font-black text-brand-red uppercase mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-red-100
                                         flex items-center justify-center
                                         text-xs border border-red-200">
                          {mIdx + 1}
                        </span>
                        {mod.title}
                      </h4>

                      {/* Danh sách nội dung */}
                      <ul className="space-y-3 pl-2 mb-4 flex-grow">
                        {mod.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="text-gray-700 text-sm font-medium
                                       flex items-start gap-3"
                          >
                            <CheckCircle2
                              className="w-4 h-4 mt-0.5 flex-shrink-0
                                         text-green-500
                                         drop-shadow-[0_0_4px_rgba(34,197,94,0.4)]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* ĐÃ XÓA NÚT Ở ĐÂY ĐỂ KHÔNG BỊ LẶP */}
                    </div>
                  ))}
                </div>

                {/* ===== CTA BUTTON (CHUYỂN RA NGOÀI GRID ĐỂ CHỈ HIỆN 1 LẦN) ===== */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-start md:justify-end">
                  <a
                    href={pkg.link || "#"}
                    className="inline-flex items-center gap-2 px-6 py-3
                               bg-white border border-red-100 rounded-full
                               text-base font-bold text-brand-red shadow-sm
                               hover:bg-red-50 hover:border-red-200 hover:gap-3 
                               transition-all cursor-pointer group/btn"
                  >
                    {t('frameworks.viewDetailsBtn')}
                    <span className="text-xl leading-none transition-transform group-hover/btn:translate-x-1">→</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};