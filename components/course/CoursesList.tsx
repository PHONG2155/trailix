"use client";

import React from "react";
import {
  ArrowRight,
  Terminal, Zap, FileText, UserPlus, TrendingUp,
  Palette, Video, BarChart3, ShieldCheck, Compass,
  Layers, UserCheck
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export const CoursesList = () => {
  const { t } = useTranslation('courses');
  const navigate = useNavigate();

  // Define course structure with icons and links (data that isn't translated)
  // Maps to keys in courses.json: list.items.[key]
  const COURSES_DATA = [
    // --- GROUP 1 ---
    { id: 1, key: 'prompt-basic', icon: <Terminal className="w-8 h-8" />, link: "/courses/prompt-basic" },
    { id: 2, key: 'prompt-advanced', icon: <Zap className="w-8 h-8" />, link: "/courses/prompt-advanced" },
    { id: 3, key: 'office-ai', icon: <FileText className="w-8 h-8" />, link: "/courses/office-ai" },
    { id: 4, key: 'ai-employee', icon: <UserCheck className="w-8 h-8" />, link: "/courses/ai-employee" },

    // --- GROUP 2 ---
    { id: 5, key: 'ai-hr', icon: <UserPlus className="w-8 h-8" />, link: "/courses/ai-hr" },
    { id: 6, key: 'ai-sales-marketing', icon: <TrendingUp className="w-8 h-8" />, link: "/courses/ai-sales-marketing" },
    { id: 7, key: 'ai-design', icon: <Palette className="w-8 h-8" />, link: "/courses/ai-design" },
    { id: 8, key: 'ai-video', icon: <Video className="w-8 h-8" />, link: "/courses/ai-video" },
    { id: 9, key: 'ai-event', icon: <Layers className="w-8 h-8" />, link: "/courses/ai-event" },
    { id: 10, key: 'ai-data', icon: <BarChart3 className="w-8 h-8" />, link: "/courses/ai-data" },

    // --- GROUP 3 ---
    { id: 11, key: 'ai-manager', icon: <ShieldCheck className="w-8 h-8" />, link: "/courses/ai-manager" },
    { id: 12, key: 'ai-c-level', icon: <Compass className="w-8 h-8" />, link: "/courses/ai-c-level" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/60 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">{t('list.badge')}</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-widest leading-normal uppercase">
            {t('list.title.main')} <br className="md:hidden" />
            <span className="text-red-700">{t('list.title.highlight')}</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            {t('list.subtitle')}
          </p>
        </motion.div>

        {/* GRID KHÓA HỌC */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {COURSES_DATA.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-red-900/5 hover:border-red-100 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
              onClick={() => navigate(course.link)}
            >
              {/* Hover Line Top */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {course.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wider group-hover:text-red-700 transition-colors">
                  {t(`list.items.${course.key}.title`)}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {t(`list.items.${course.key}.desc`)}
                </p>
              </div>

              {/* Button Fake */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  {t('list.viewDetail')}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-red-100 group-hover:text-red-600 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};