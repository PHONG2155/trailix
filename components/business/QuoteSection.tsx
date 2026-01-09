import React from 'react';
import { Reveal } from '../ui/Shared';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const QuoteSection = () => {
  const { t } = useTranslation('business');

  return (
    <section className="bg-white py-24 relative overflow-visible">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <Reveal>
          <div className="relative p-12 md:p-24 border-y-2 border-gray-50 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <Quote className="w-16 h-16 md:w-20 md:h-20 text-brand-red fill-current opacity-30" />
            </div>

            {/* ĐÃ SỬA: Giảm kích thước chữ từ 5xl xuống 4xl và 3xl xuống 2xl */}
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 italic leading-snug font-display">
              {t('quote.text')}
            </h3>

            <div className="mt-10 flex justify-center">
              <div className="h-2 w-32 bg-brand-red/20 rounded-full"></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};