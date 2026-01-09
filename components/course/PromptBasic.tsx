"use client";

import React from "react";
import {
  ArrowRight,
  Terminal,
  PenTool,
  Zap,
  Target,
  Flame,
  MousePointerClick,
  //   MessageSquare, // Không dùng thì comment lại hoặc xóa cho gọn
  //   BrainCircuit 
} from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

// IMPORT COMPONENT NÚT DOWNLOAD
import DownloadButtonRoadmap from "../button/dowloadRoadmap";

// --- COMPONENT CON: HIỆU ỨNG HẠT PARTICLE ---
// Tạo ra các hạt nhỏ bay ngẫu nhiên
const FloatingParticles = () => {
  // Tạo mảng 20 hạt
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-5">
      {particles.map((_, i) => {
        // Tạo vị trí và thông số ngẫu nhiên cho mỗi hạt
        const randomLeft = Math.random() * 100; // 0% - 100%
        const randomTop = Math.random() * 100; // 0% - 100%
        const randomSize = Math.random() * 4 + 1; // 1px - 5px
        const randomDuration = Math.random() * 20 + 10; // 10s - 30s
        const randomDelay = Math.random() * 5;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-red-300"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              width: randomSize,
              height: randomSize,
              opacity: 0.2, // Mờ thôi cho đỡ rối
            }}
            animate={{
              y: [0, -100, 0], // Bay lên rồi xuống
              x: [0, Math.random() * 50 - 25, 0], // Bay ngang nhẹ
              opacity: [0.2, 0.5, 0.2], // Nhấp nháy nhẹ
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: randomDelay,
            }}
          />
        );
      })}
    </div>
  );
};
// ------------------------------------------


export const PromptBasic = () => {
  const { t } = useTranslation('courses');
  const navigate = useNavigate();
  const location = useLocation();

  // --- LOGIC CUỘN TRANG THÔNG MINH ---
  const handleScrollToContact = () => {
    if (location.pathname === '/doanh-nghiep') {
      const el = document.getElementById('contact-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/doanh-nghiep');
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  // --- VARIANTS ANIMATION ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Data for mapping icons to values
  const valuesData = t('detail.prompt-basic.values.items', { returnObjects: true }) as any[];
  const modulesData = t('detail.prompt-basic.modules.items', { returnObjects: true }) as any[];
  const targetTags = t('detail.prompt-basic.target.tags', { returnObjects: true }) as string[];

  // Icons for values
  const ValueIcons = [Terminal, Zap, PenTool, MousePointerClick];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white overflow-hidden relative w-full">

      {/* ================= BẮT ĐẦU PHẦN BACKGROUND EFFECTS MỚI ================= */}

      {/* 1. Nền lưới chấm (Giữ nguyên của bro) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* 2. Blob loang màu lớn ở TRÊN CÙNG (Giữ nguyên của bro) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-red-50 via-red-100/50 to-white opacity-60 blur-[120px] -z-10 rounded-full origin-center"
      />

      {/* 3. [MỚI] Blob loang màu bổ sung ở DƯỚI GÓC PHẢI để cân bằng */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-red-100 via-red-50/30 to-transparent opacity-40 blur-[100px] -z-10 rounded-full"
      />

      {/* 4. [MỚI] Hiệu ứng hạt Particles bay lơ lửng */}
      <FloatingParticles />

      {/* ================= KẾT THÚC PHẦN BACKGROUND EFFECTS ================= */}


      <div className="relative z-10">

        {/* ================= HERO SECTION (FULL SCREEN) ================= */}
        <section className="min-h-screen flex flex-col justify-center items-center relative px-4">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-red-100 shadow-sm mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="text-sm font-bold text-red-700 tracking-wide uppercase">{t('detail.prompt-basic.hero.badge')}</span>
          </motion.div>

          <div className="max-w-screen-2xl mx-auto text-center space-y-6 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-widest leading-normal text-slate-900 uppercase drop-shadow-sm break-words"
            >
              {t('detail.prompt-basic.hero.title.main')}
              <span className="text-red-700 block mt-2 md:mt-4">
                {t('detail.prompt-basic.hero.title.sub')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed mt-6"
            >
              {t('detail.prompt-basic.hero.subtitle.text')} <span className="text-slate-900 font-bold">{t('detail.prompt-basic.hero.subtitle.highlight')}</span> {t('detail.prompt-basic.hero.subtitle.suffix')}
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <div className="text-sm font-bold text-slate-500 flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-slate-50/80 backdrop-blur-md border border-slate-200 inline-flex hover:border-red-200 hover:bg-white transition-colors cursor-default">
                <Flame className="w-4 h-4 text-red-600" />
                {t('detail.prompt-basic.hero.duration')}
              </div>
            </motion.div>
            <div className="relative z-10 flex flex-col md:flex-row gap-5 justify-center items-center">

              {/* NÚT 1: ĐIỀN FORM */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToContact}
                className="w-full md:w-[280px] h-16 bg-red-700 text-white rounded-full font-bold text-lg shadow-lg shadow-red-700/20 flex justify-center items-center gap-3"
              >
                {t('detail.ai-c-level.cta.register')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* NÚT 2: TẢI ROADMAP */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-[280px]">
                <DownloadButtonRoadmap />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= MESSAGE ================= */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent -z-10"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-black leading-tight text-slate-900">
              {t('detail.prompt-basic.message.text')} <br />
              <span className="text-red-600">
                {t('detail.prompt-basic.message.highlight')}
              </span>”
            </h3>
          </motion.div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="py-24 px-4 bg-slate-50/80 backdrop-blur-sm relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-100/40 rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">{t('detail.prompt-basic.values.badge')}</h2>
              <h3 className="text-4xl font-black text-slate-900">{t('detail.prompt-basic.values.title')}</h3>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {valuesData.map((item, index) => {
                const Icon = ValueIcons[index];

                // Layout logic based on original design
                if (index === 0) { // Cấu trúc Prompt chuẩn
                  return (
                    <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Icon className="w-40 h-40 text-red-600" />
                      </div>
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-md">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                } else if (index === 1) { // Ứng dụng ngay
                  return (
                    <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-gradient-to-br from-red-600 to-red-800 text-white p-10 rounded-3xl shadow-xl shadow-red-900/20 flex flex-col justify-between group relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                        <p className="text-red-100 text-lg">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                } else if (index === 2) { // Kỹ năng viết sắc bén
                  return (
                    <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group">
                      <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-lg">{item.desc}</p>
                    </motion.div>
                  );
                } else { // Làm chủ công cụ
                  return (
                    <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all flex items-center gap-8">
                      <div className="hidden md:flex w-20 h-20 bg-red-50 text-red-600 rounded-2xl flex-shrink-0 items-center justify-center shadow-sm">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 text-lg">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                }
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= NỘI DUNG CHÍNH ================= */}
        <section className="py-24 px-4 bg-white/60 backdrop-blur-md relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-slate-900 mb-2">{t('detail.prompt-basic.modules.title')}</h2>
              <p className="text-slate-500 text-lg">{t('detail.prompt-basic.modules.subtitle')}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4"
            >
              {modulesData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10, backgroundColor: "rgba(255, 245, 245, 0.8)" }} // Màu nền hover có độ trong suốt
                  className="group flex flex-col md:flex-row items-center bg-white/90 backdrop-blur-sm border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-8 mb-4 md:mb-0 w-24">
                    <span className="text-5xl font-black text-red-100 group-hover:text-red-600 transition-colors duration-300 block text-center md:text-left">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-grow pt-2 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= TARGET & CTA ================= */}
        <section className="py-24 bg-slate-50/80 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute -right-20 top-20 w-64 h-64 bg-red-200/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute -left-20 bottom-20 w-64 h-64 bg-red-200/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-black mb-8 text-slate-900">{t('detail.prompt-basic.target.title')}</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {targetTags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="px-6 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-md hover:text-red-700 hover:border-red-200 cursor-default transition-all"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-12 md:p-16 shadow-2xl shadow-red-900/10 border border-slate-100 relative overflow-hidden"
            >
              {/* Hiệu ứng nền riêng cho thẻ CTA */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-white to-white -z-10 pointer-events-none"></div>

              <div className="inline-flex justify-center items-center w-20 h-20 bg-red-600 rounded-2xl mb-8 shadow-lg shadow-red-600/30 text-white relative z-10">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 relative z-10">
                {t('detail.prompt-basic.cta.title')}
              </h2>
              <p className="text-slate-500 mb-12 text-xl relative z-10 max-w-2xl mx-auto">
                {t('detail.prompt-basic.cta.desc')}
              </p>

              <div className="relative z-10 flex flex-col md:flex-row gap-5 justify-center items-center">

                {/* NÚT 1: ĐIỀN FORM */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(185 28 28 / 0.3)" }} // Tăng shadow khi hover
                  whileTap={{ scale: 0.95 }}
                  onClick={handleScrollToContact}
                  className="w-full md:w-[280px] h-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-lg shadow-lg shadow-red-700/20 flex justify-center items-center gap-3 transition-all"
                >
                  {t('detail.prompt-basic.cta.register')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                {/* NÚT 2: TẢI ROADMAP (Component dùng chung) */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-[280px]">
                  <DownloadButtonRoadmap />
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};