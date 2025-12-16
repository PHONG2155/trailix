import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_CATEGORIES } from '../../data/businessData';
import { Reveal } from '../ui/Shared';

// Variants cho hiệu ứng reveal của từng khối Category (Giữ lại hiệu ứng trượt vào cho khối)
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        }
    }
};

// Component riêng cho từng Logo (Đã loại bỏ motion.div để logo hiển thị ngay)
const ClientLogoCard = ({ client, cIdx }: { client: any, cIdx: number }) => (
    <div // Đã thay thế motion.div bằng div
        key={cIdx}
        className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 h-28 relative transition-all duration-300 hover:shadow-lg hover:border-brand-red/50 cursor-pointer"
    >
        {/* Logo (Luôn hiển thị màu) */}
        <img 
            src={client.logo} 
            alt={client.name} 
            title={client.name}
            className="max-h-20 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Hiệu ứng Mô tả Pop-up (Tooltip style) */}
        <div 
            className="absolute top-full mt-2 w-full max-w-sm bg-brand-lightRed text-white rounded-lg p-2 text-xs text-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 z-50"
        >
            <p className="font-bold mb-1">{client.name}</p>
            <p className="line-clamp-2">{client.desc}</p> 
            
            {/* Mũi tên Tooltip */}
            <div 
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-brand-lightRed"
            ></div>
        </div>
    </div>
);

export const ClientSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase">
              Đối Tác & Khách Hàng
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
          </Reveal>
        </div>

        {/* Lặp qua tất cả Categories và hiển thị dưới dạng các Section */}
        <div className="space-y-16">
          {CLIENT_CATEGORIES.map((cat, idx) => (
            <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants} // Khối lớn có hiệu ứng trượt
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Tiêu đề Category - Phong cách hiện đại */}
                <div className="flex items-center mb-8">
                    <h3 className="text-xl md:text-2xl font-black text-brand-darkGray uppercase tracking-wider bg-gray-100 px-5 py-2 rounded-r-full border-l-4 border-brand-red shadow-sm">
                        {cat.title}
                    </h3>
                    <div className="flex-grow h-px bg-gray-200 ml-4"></div>
                </div>

                {/* Lưới Logo cho từng Category */}
                <div 
                    // ĐÃ SỬA: Tăng số lượng cột lên 5 (md) và 6 (lg)
                    className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6"
                >
                    {cat.clients.map((client, cIdx) => (
                        <ClientLogoCard key={cIdx} client={client} cIdx={cIdx} />
                    ))}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};