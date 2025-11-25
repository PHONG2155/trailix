import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const BusinessHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 lg:py-24 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Đối tác chiến lược
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-brand-black mb-6 leading-tight">
              ĐÀO TẠO AI <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">
                CHO DOANH NGHIỆP
              </span>
            </h1>
            
            <div className="space-y-4 mb-10">
              {[
                "Chương trình đào tạo chuyên sâu & may đo riêng",
                "Đào tạo đúng trọng tâm, thực chiến 100%",
                "Giảng viên chuyên gia nhiều năm kinh nghiệm",
                "Cam kết: 85% nhân sự ứng dụng được ngay"
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <p className="text-gray-600 font-medium text-lg leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.button 
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-brand-red text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-red/30 hover:bg-brand-darkRed transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                ĐĂNG KÝ TƯ VẤN
                <motion.span 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Right Image Collage */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Training" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

              {/* Floating Images */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-12 w-48 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white transform -rotate-3 z-20 hidden md:block"
              >
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team" className="w-full h-auto" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-8 w-44 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white transform rotate-6 z-0 hidden md:block"
              >
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Meeting" className="w-full h-auto" />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute top-1/2 right-[-20px] w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform translate-x-1/2 z-30"
              >
                <Sparkles className="text-white w-7 h-7 animate-pulse" />
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};