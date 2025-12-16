import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITY_IMAGES } from '../../data/businessData';
import { Reveal } from '../ui/Shared';

export const ActivitiesSlider = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="text-center mb-12">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase">
            HOẠT ĐỘNG ĐÀO TẠO
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
        </Reveal>
      </div>

      <div className="relative w-full">
        <div className="flex overflow-hidden">
          {/* Animated Track */}
          <motion.div
            className="flex gap-6 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 120, // ĐÃ SỬA: Tăng thời gian từ 30s lên 60s để chạy chậm hơn
            }}
            style={{ width: "max-content" }}
          >
            {/* Render images twice to create seamless loop */}
            {[...ACTIVITY_IMAGES, ...ACTIVITY_IMAGES].map((src, idx) => (
              <div 
                key={idx} 
                className="w-[300px] md:w-[450px] aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0"
              >
                <img 
                  src={src} 
                  alt={`Activity ${idx}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* ĐÃ XÓA KHỐI CSS TẠO VIỀN/DẢI MỜ TRẮNG Ở ĐÂY */}
      </div>
    </section>
  );
};