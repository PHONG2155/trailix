// src/components/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center bg-white overflow-hidden">

      {/* SỐ 404 KHỔNG LỒ LÀM NỀN */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-10">
        <h1 className="text-[40vw] font-black text-transparent" style={{ WebkitTextStroke: '2px #000' }}>
          404
        </h1>
      </div>

      <div className="relative z-10 text-center">
        {/* Số 404 Chính (Màu đỏ Trailix) */}
        <h1 className="text-9xl md:text-[12rem] font-black text-red-600 leading-none tracking-tighter mb-4">
          404
        </h1>

        <div className="h-2 w-32 bg-black mx-auto mb-8"></div>

        <h2 className="text-3xl font-bold uppercase tracking-widest mb-2">
          {t('notFound.title')}
        </h2>


        <Link to="/">
          <button className="px-10 py-4 bg-black text-white font-bold text-lg uppercase hover:bg-red-600 transition-colors duration-300">
            {t('notFound.backHome')}
          </button>
        </Link>
      </div>
    </div>
  );
};