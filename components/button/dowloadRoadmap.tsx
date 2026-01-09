import React from 'react';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DownloadButtonRoadmap = () => {
  const { t } = useTranslation('common');

  return (
    <a
      href="/document/TRAILIX_AI_Training_Roadmap.pdf" // Đảm bảo đường dẫn đúng
      download="Trailix_AI_Training_Roadmap.pdf"
      target="_blank"
      rel="noopener noreferrer"
      // CLASS ĐÃ ĐỒNG BỘ KÍCH THƯỚC VỚI NÚT ĐĂNG KÝ:
      // - w-full md:w-[280px]: Rộng bằng nhau
      // - h-16: Cao bằng nhau
      // - rounded-full, font-bold, text-lg: Font và bo góc y hệt
      className="group flex items-center justify-center gap-3 w-full md:w-[280px] min-h-16 h-auto py-2 px-6 bg-white text-red-700 border-2 border-red-700 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      <div className="text-left leading-tight">
        {t('buttons.downloadRoadmap')}
      </div>
      <Download className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
    </a>
  );
};

export default DownloadButtonRoadmap;