
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MapPin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2937] text-white py-8 relative z-10 font-sans border-t border-gray-800">
         {/* Contact Grid */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                {/* Item 1: Email */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-brand-red transition-all duration-300">
                         <Mail className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-xs uppercase tracking-wider mb-1 font-display text-white">Email</h4>
                    <p className="text-white text-sm">support@trailix.ai</p>
                </motion.div>

                {/* Item 2: Hotline */}
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="flex flex-col items-center group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-brand-red transition-all duration-300">
                         <Phone className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-xs uppercase tracking-wider mb-1 font-display text-white">Hotline</h4>
                    <p className="text-white text-sm">0888 491 591</p>
                </motion.div>

                {/* Item 3: Website */}
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="flex flex-col items-center group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-brand-red transition-all duration-300">
                         <Globe className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-xs uppercase tracking-wider mb-1 font-display text-white">Website</h4>
                    <p className="text-white text-sm">www.trailix.ai</p>
                </motion.div>

                {/* Item 4: Address */}
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="flex flex-col items-center group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-brand-red transition-all duration-300">
                         <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-xs uppercase tracking-wider mb-1 font-display text-white">Địa chỉ</h4>
                    <p className="text-white text-sm">Hồ Chí Minh, Việt Nam</p>
                </motion.div>
            </div>
         </div>

         {/* Copyright Bar */}
         <div className="border-t border-gray-700 pt-6 mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
                <p className="text-white text-xs text-center opacity-80">© 2025 Trailix - Trung tâm Nghiên cứu và Đào tạo AI. All rights reserved.</p>
                
                {/* Scroll Top Button - Absolutely Positioned Right */}
                 <button 
                    onClick={scrollToTop}
                    className="absolute right-4 p-2 bg-gray-700 hover:bg-brand-red rounded-lg transition-colors group"
                 >
                    <ArrowUp className="w-4 h-4 text-white" />
                 </button>
            </div>
         </div>
    </footer>
  );
};
