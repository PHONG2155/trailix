import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/businessData';
import { Reveal } from '../ui/Shared';

const TestimonialCard: React.FC<{ item: typeof TESTIMONIALS[0], index: number }> = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full overflow-hidden hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="p-8 flex-grow">
      <Quote className="w-8 h-8 text-brand-red mb-4 opacity-80" />
      <p className="text-gray-600 italic font-medium leading-relaxed">
        "{item.content}"
      </p>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          {item.course}
        </p>
      </div>
    </div>
    <div className="bg-brand-red py-4 px-6">
      <p className="text-white font-bold text-sm text-center uppercase tracking-wide">
        {item.name}
      </p>
    </div>
  </motion.div>
);

export const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase">
              PHẢN HỒI TỪ HỌC VIÊN
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <TestimonialCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};