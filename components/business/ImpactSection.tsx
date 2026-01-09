import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Check, TrendingUp, Clock } from 'lucide-react';
import { Reveal } from '../ui/Shared';
import { useTranslation } from 'react-i18next';

export const ImpactSection = () => {
  const { t } = useTranslation('business');
  const employeeBenefits = t('impact.employee.benefits', { returnObjects: true }) as any[];
  const managerBenefits = t('impact.manager.benefits', { returnObjects: true }) as any[];

  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase tracking-tight">
              {t('impact.title')}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Nhan Vien */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] p-10 shadow-xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600 shadow-inner">
                <Building2 size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 font-display uppercase tracking-wide">{t('impact.employee.title')}</h3>

              <div className="space-y-6">
                {employeeBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors">
                    <div className="bg-white p-2 rounded-full shadow-sm text-brand-red">
                      {idx === 0 ? <Clock className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 font-bold">{benefit.title}</p>
                      <p className="text-sm text-gray-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Quan Ly */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-10 shadow-xl shadow-red-900/5 border border-red-50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-8 text-brand-red shadow-inner">
                <Briefcase size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 font-display uppercase tracking-wide">{t('impact.manager.title')}</h3>

              <div className="space-y-6">
                {managerBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 hover:bg-red-50 transition-colors">
                    <div className="bg-white p-2 rounded-full shadow-sm text-brand-red">
                      {idx === 0 ? <TrendingUp className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 font-bold">{benefit.title}</p>
                      <p className="text-sm text-gray-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};