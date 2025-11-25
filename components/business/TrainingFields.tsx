import React from 'react';
import { motion } from 'framer-motion';
import { TRAINING_FIELDS } from '../../data/businessData';
import { Reveal } from '../ui/Shared';

const TrainingFieldCard: React.FC<{ icon: any, title: string, desc: string, index: number }> = ({ icon: Icon, title, desc, index }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="h-full"
  >
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 text-center group h-full flex flex-col items-center hover:-translate-y-2 cursor-default">
      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 mb-5 group-hover:bg-gradient-to-br group-hover:from-brand-red group-hover:to-red-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-red-500/30">
        <Icon strokeWidth={1.5} className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-brand-red transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 font-medium">{desc}</p>
    </div>
  </motion.div>
);

export const TrainingFields = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase">
              Lĩnh Vực Đào Tạo
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
          </Reveal>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {TRAINING_FIELDS.map((field, idx) => (
            <TrainingFieldCard key={idx} index={idx} icon={field.icon} title={field.title} desc={field.desc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};