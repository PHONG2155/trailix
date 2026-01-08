"use client";

import React from "react";
import { 
  ArrowRight, 
  Video,        // Icon cho Video
  Clapperboard, // Icon cho Đạo diễn/Kịch bản
  Music,        // Icon cho Nhạc/Âm thanh
  Mic,          // Icon cho Giọng đọc/Voice
  Scissors,     // Icon cho Dựng phim/Edit
  MonitorPlay,  // Icon cho Youtube/Platform
  Zap,
  Target,
  Flame,
  MousePointerClick
} from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

// IMPORT COMPONENT NÚT DOWNLOAD DÙNG CHUNG
import DownloadButtonRoadmap from "../button/dowloadRoadmap"; 

export const AiVideo = () => {
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

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white overflow-hidden relative w-full">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-red-50 via-red-100 to-white opacity-60 blur-[100px] -z-10 rounded-full" 
      />

      <div className="relative z-10">
        
        {/* ================= HERO SECTION (FULL SCREEN) ================= */}
        <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-red-100 shadow-sm mb-8"
           >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="text-sm font-bold text-red-700 tracking-wide uppercase">AI Video Production</span>
          </motion.div>

          <div className="max-w-screen-2xl mx-auto text-center space-y-6 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-widest leading-normal text-slate-900 uppercase break-words"
            >
              AI CHO VIDEO
              <span className="text-red-700 block mt-2 md:mt-4">
                PRODUCTION
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed mt-6"
            >
              Từ Kịch Bản Đến Hậu Kỳ – Làm Video Marketing <span className="text-slate-900 font-bold">Không Cần Ê-kíp</span> Chuyên Nghiệp.
            </motion.p>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-10"
            >
                 <div className="text-sm font-bold text-slate-500 flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-slate-50 border border-slate-200 inline-flex hover:border-red-200 hover:bg-white transition-colors cursor-default">
                 <Flame className="w-4 h-4 text-red-600" />
                 Thời lượng: 2 - 4 Buổi thực chiến
              </div>
            </motion.div>
          </div>
        </section>
        {/* ================= MESSAGE ================= */}
        <section className="py-24 bg-white relative">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto px-6 text-center"
            >
            <h3 className="text-3xl md:text-4xl font-black leading-tight text-slate-900">
              “Video là tương lai của nội dung. <br />
              <span className="text-red-600">
                 AI bình dân hóa quy trình làm phim, giúp bạn tạo video ấn tượng chỉ trong 30 phút.
              </span>”
            </h3>
          </motion.div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Giá trị cốt lõi</h2>
              <h3 className="text-4xl font-black text-slate-900">Tại sao bạn cần khóa học này?</h3>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* Value 1: Storytelling */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Clapperboard className="w-40 h-40 text-red-600" />
                </div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <Clapperboard className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-slate-900">Tư duy đạo diễn</h4>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                      Học cách xây dựng kịch bản phân cảnh, nhịp điệu phim và nghệ thuật kể chuyện bằng hình ảnh (Visual Storytelling) thu hút.
                    </p>
                </div>
              </motion.div>

              {/* Value 2: Full Process (Red Card) */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-red-700 text-white p-10 rounded-3xl shadow-xl shadow-red-900/10 flex flex-col justify-between group">
                <div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                      <Video className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Quy trình trọn gói</h4>
                    <p className="text-red-50 text-lg">
                      Làm chủ từ A-Z: Kịch bản → Hình ảnh AI → Giọng đọc AI → Nhạc nền → Dựng phim hoàn chỉnh.
                    </p>
                </div>
              </motion.div>

              {/* Value 3: Practice */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group">
                 <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <MonitorPlay className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Sản phẩm thực tế</h4>
                <p className="text-slate-600 text-lg">
                  Thực hành tạo video quảng cáo, giới thiệu sản phẩm hoặc video đào tạo hoàn chỉnh ngay tại lớp.
                </p>
              </motion.div>

              {/* Value 4: Benefit */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all flex items-center gap-8">
                 <div className="hidden md:flex w-20 h-20 bg-red-50 text-red-600 rounded-2xl flex-shrink-0 items-center justify-center">
                    <Zap className="w-10 h-10" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">Tốc độ & Tiết kiệm</h4>
                    <p className="text-slate-600 text-lg">
                      Tăng tốc độ sản xuất lên gấp 10 lần, tiết kiệm tối đa ngân sách thuê quay dựng và lồng tiếng.
                    </p>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= NỘI DUNG CHÍNH ================= */}
        <section className="py-24 px-4 bg-white relative">
          <div className="max-w-5xl mx-auto">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="text-center mb-16"
             >
                 <h2 className="text-4xl font-black text-slate-900 mb-2">Nội dung chính</h2>
                 <p className="text-slate-500 text-lg">Lộ trình biến bạn thành nhà sản xuất video độc lập.</p>
             </motion.div>

             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="grid gap-4"
             >
                {[
                    { step: "01", title: "Tư duy đạo diễn", content: "Cấu trúc kịch bản, hành trình cảm xúc và nhịp điệu phim cơ bản." },
                    { step: "02", title: "Các thể loại video", content: "Phân tích TVC quảng cáo, video giới thiệu doanh nghiệp, video đào tạo, Shorts/Reels." },
                    { step: "03", title: "Kịch bản thu hút", content: "Công thức Hook (Điểm nhấn), Vấn đề, Giải pháp để giữ chân người xem." },
                    { step: "04", title: "Tạo nguyên liệu bằng AI", content: "Tạo ảnh/video minh họa, sinh giọng đọc (Text-to-speech) và nhạc nền (Suno/Udio)." },
                    { step: "05", title: "Dựng phim & Hiệu ứng", content: "Sử dụng CapCut, kỹ thuật chuyển cảnh, chỉnh màu và lồng ghép thành phần." },
                    { step: "06", title: "Tối ưu hóa đa kênh", content: "Tạo phụ đề tự động, xuất bản video chuẩn định dạng cho TikTok, YouTube, Facebook." },
                    { step: "07", title: "Sử dụng MC ảo", content: "Ứng dụng AI Avatar để làm video thuyết trình hoặc bản tin chuyên nghiệp." }
                ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      variants={fadeInUp}
                      whileHover={{ x: 10, backgroundColor: "#fff5f5" }}
                      className="group flex flex-col md:flex-row items-center bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
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
        <section className="py-24 bg-slate-50 relative overflow-hidden">
             <div className="absolute -right-20 top-20 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
             <div className="absolute -left-20 bottom-20 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="mb-16"
             >
                <h2 className="text-3xl font-black mb-8 text-slate-900">Dành cho ai?</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Marketer", "Content Creator", "Quản lý truyền thông", "Đào tạo viên", "Youtuber/TikToker"].map((tag, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-md hover:text-red-700 hover:border-red-200 cursor-default transition-all"
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
               className="bg-white rounded-[2.5rem] p-12 md:p-16 shadow-2xl shadow-red-900/5 border border-slate-100 relative overflow-hidden"
             >
                <div className="inline-flex justify-center items-center w-20 h-20 bg-red-600 rounded-2xl mb-8 shadow-lg shadow-red-600/30 text-white relative z-10">
                    <Target className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 relative z-10">
                    Sẵn sàng bứt phá?
                </h2>
                <p className="text-slate-500 mb-12 text-xl relative z-10 max-w-2xl mx-auto">
                    Đừng bỏ lỡ cơ hội tự tay sản xuất những thước phim chuyên nghiệp với sức mạnh của AI.
                </p>

                <div className="relative z-10 flex flex-col md:flex-row gap-5 justify-center items-center">
                    
                    {/* NÚT 1: ĐIỀN FORM */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleScrollToContact} 
                        className="w-full md:w-[280px] h-16 bg-red-700 text-white rounded-full font-bold text-lg shadow-lg shadow-red-700/20 flex justify-center items-center gap-3"
                    >
                        Đăng ký tư vấn ngay
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    {/* NÚT 2: TẢI ROADMAP */}
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