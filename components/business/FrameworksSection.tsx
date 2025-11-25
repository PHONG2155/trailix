import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Users, CheckCircle2 } from 'lucide-react';
import { TRAINING_PACKAGES } from '../../data/businessData';
import { Reveal } from '../ui/Shared';

export const FrameworksSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase leading-tight">
              Khung Đào Tạo <span className="text-brand-red">Thực Chiến</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
          </Reveal>
        </div>

        <div className="space-y-16">
          {TRAINING_PACKAGES.map((pkg, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="transform-gpu bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group hover:border-brand-red/20 transition-colors duration-300"
            >
              {/* Background Number */}
              <div className="absolute -top-10 -right-10 text-[12rem] md:text-[15rem] font-black text-gray-50 leading-none pointer-events-none select-none group-hover:text-red-50/50 transition-colors duration-500">
                  {pkg.id}
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-10 border-b border-gray-100 pb-8">
                    <h3 className="text-2xl md:text-4xl font-black font-display text-gray-900 mb-6 uppercase tracking-tight">
                      {pkg.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="px-5 py-2.5 bg-red-50 text-brand-red rounded-full font-bold text-sm border border-red-100 flex items-center gap-2 shadow-sm">
                        <PlayCircle size={18} fill="currentColor" className="text-red-200" /> 
                        <span className="text-gray-900">Thời lượng:</span> {pkg.duration}
                      </div>
                      <div className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full font-bold text-sm border border-blue-100 flex items-center gap-2 shadow-sm">
                        <Users size={18} fill="currentColor" className="text-blue-200" />
                        <span className="text-gray-900">Đối tượng:</span> {pkg.target}
                      </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {pkg.modules.map((mod, mIdx) => (
                    <div key={mIdx} className="group/module">
                        <h4 className="text-lg font-black text-brand-red uppercase mb-4 flex items-center gap-2">
                           <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-xs border border-red-200">
                              {mIdx + 1}
                           </span>
                           {mod.title}
                        </h4>
                        <ul className="space-y-3 pl-2">
                          {mod.items.map((item, iIdx) => (
                            <li key={iIdx} className="text-gray-600 text-sm font-medium flex items-start gap-3 group-hover/module:text-gray-900 transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 opacity-50 group-hover/module:opacity-100" />
                              {item}
                            </li>
                          ))}
                        </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};