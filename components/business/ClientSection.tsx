import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLIENT_CATEGORIES } from '../../data/businessData';
import { Reveal } from '../ui/Shared';

export const ClientSection = () => {
  const [activeTab, setActiveTab] = useState(0);

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {CLIENT_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
                activeTab === idx 
                  ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/30' 
                  : 'bg-white border-gray-100 text-gray-600 hover:border-brand-red/50 hover:text-brand-red'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Logos Grid */}
        <div className="min-h-[200px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
                >
                  {CLIENT_CATEGORIES[activeTab].clients.map((client, cIdx) => (
                    <div 
                      key={cIdx} 
                      className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-brand-red/20 hover:shadow-lg transition-all duration-300 h-32 relative"
                    >
                       <img 
                         src={client.logo} 
                         alt={client.name} 
                         title={client.name}
                         className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                       />
                       {/* Subtle name indicator on hover for clarity if logo is obscure */}
                       <span className="absolute bottom-2 text-[9px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                          {client.name}
                       </span>
                    </div>
                  ))}
                </motion.div>
             </AnimatePresence>
        </div>

      </div>
    </section>
  );
};