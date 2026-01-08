import React from 'react';
import { Download } from 'lucide-react';

const DownloadButtonRoadmap = () => {
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
      className="group flex items-center justify-center gap-3 w-full md:w-[280px] h-16 bg-white text-red-700 border-2 border-red-700 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      <div className="text-left leading-tight">
          Tải AI Learning Roadmap
      </div>
      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default DownloadButtonRoadmap;