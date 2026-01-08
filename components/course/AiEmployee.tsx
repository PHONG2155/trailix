"use client";

import React from "react";
import { 
  ArrowRight, 
  Clock,        // Icon cho Tiết kiệm thời gian
  Briefcase,    // Icon cho Công việc/Nghiệp vụ
  UserCheck,    // Icon cho Nhân viên/Role-based
  BrainCircuit, // Icon cho Tư duy/AI
  MessageSquare,// Icon cho Giao tiếp/Email
  Calendar,     // Icon cho Lịch trình
  Zap,
  Target,
  Flame,
  MousePointerClick
} from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

// IMPORT COMPONENT NÚT DOWNLOAD DÙNG CHUNG
import DownloadButtonRoadmap from "../button/dowloadRoadmap";

export const AiEmployee = () => {
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
            <span className="text-sm font-bold text-red-700 tracking-wide uppercase">AI For Employee Productivity</span>
          </motion.div>

          <div className="max-w-screen-2xl mx-auto text-center space-y-6 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-widest leading-normal text-slate-900 uppercase break-words"
            >
              AI CHO NHÂN VIÊN
              <span className="text-red-700 block mt-2 md:mt-4">
                TỐI ƯU HÓA HIỆU SUẤT
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              // ĐÃ SỬA: max-w-screen-lg (mở rộng khung) + md:whitespace-nowrap (ép 1 dòng)
              className="text-xl md:text-2xl font-medium text-slate-600 max-w-screen-lg mx-auto leading-relaxed mt-6 md:whitespace-nowrap"
            >
              Sử Dụng AI Như Công Cụ Hàng Ngày – <span className="text-slate-900 font-bold">Hiệu Quả Tức Thì</span> Cho Mọi Vị Trí.
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
                 Thời lượng: 1 - 2 Buổi
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
              “Đừng để công việc lặp lại bào mòn sự sáng tạo. <br />
              <span className="text-red-600">
                 Hãy để AI làm điều đó giúp bạn.
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
              {/* Value 1: Role-based */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <UserCheck className="w-40 h-40 text-red-600" />
                </div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <UserCheck className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-slate-900">Tư duy theo vai trò (Role-based)</h4>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                      Dù bạn làm Sales, HR, Admin hay Kế toán, khóa học sẽ chỉ ra chính xác cách AI giải quyết bài toán cụ thể của vị trí đó.
                    </p>
                </div>
              </motion.div>

              {/* Value 2: Tools (Red Card) */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-red-700 text-white p-10 rounded-3xl shadow-xl shadow-red-900/10 flex flex-col justify-between group">
                <div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Thành thạo công cụ</h4>
                    <p className="text-red-50 text-lg">
                      Làm chủ bộ công cụ AI phổ biến nhất hiện nay (ChatGPT, Copilot, Gemini) để tạo ra các "chiến thắng nhanh".
                    </p>
                </div>
              </motion.div>

              {/* Value 3: Process */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group">
                 <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Nhanh hơn - Tốt hơn</h4>
                <p className="text-slate-600 text-lg">
                  Xây dựng quy trình làm việc mới giúp tiết kiệm 2-3 giờ mỗi ngày và giảm thiểu áp lực công việc (burnout).
                </p>
              </motion.div>

              {/* Value 4: Benefit */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all flex items-center gap-8">
                 <div className="hidden md:flex w-20 h-20 bg-red-50 text-red-600 rounded-2xl flex-shrink-0 items-center justify-center">
                    <Zap className="w-10 h-10" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">Trợ lý ảo đắc lực</h4>
                    <p className="text-slate-600 text-lg">
                      Mỗi nhân viên sẽ có thêm một người "trợ lý" 24/7 để xử lý các tác vụ lặp lại, giải phóng sức lao động cho việc sáng tạo.
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
                 <p className="text-slate-500 text-lg">Lộ trình biến AI thành công cụ làm việc hàng ngày.</p>
             </motion.div>

             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="grid gap-4"
             >
                {[
                    { step: "01", title: "AI nơi công sở", content: "Giới thiệu ChatGPT, Copilot, Gemini... và các nguyên tắc sử dụng an toàn, bảo mật." },
                    { step: "02", title: "Tự động hóa tác vụ", content: "Xử lý giấy tờ hành chính, trả lời email, sắp xếp lịch trình họp tự động." },
                    { step: "03", title: "Sáng tạo nội dung", content: "Viết báo cáo nhanh, lên ý tưởng đề xuất (Proposal) và soạn thảo văn bản." },
                    { step: "04", title: "Phân tích dữ liệu cá nhân", content: "Tổng hợp thông tin từ nhiều nguồn, làm báo cáo tổng kết công việc cá nhân." },
                    { step: "05", title: "Học tập & Phát triển", content: "Biến AI thành gia sư riêng (Mentor) để tự học ngoại ngữ, kỹ năng mới." },
                    { step: "06", title: "Kỹ năng mềm", content: "Cải thiện kỹ năng giao tiếp, đàm phán và thuyết trình với sự hỗ trợ của AI." },
                    { step: "07", title: "Quản lý thời gian", content: "Lên kế hoạch làm việc (To-do list) thông minh và ưu tiên công việc hiệu quả." }
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
                    {["Sales", "HR/Tuyển dụng", "Admin/Hành chính", "Kế toán", "Mọi nhân viên muốn tăng năng suất"].map((tag, i) => (
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
                    Đừng bỏ lỡ cơ hội làm việc thông minh hơn, nhanh hơn và nhàn hơn cùng AI.
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