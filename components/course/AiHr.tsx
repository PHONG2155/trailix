"use client";

import React from "react";
import { 
  ArrowRight, 
  UserPlus,     // Icon cho Tuyển dụng
  Heart,        // Icon cho Giữ chân/Gắn kết
  GraduationCap,// Icon cho Đào tạo/L&D
  Users,        // Icon cho Nhân sự chung
  FileSearch,   // Icon cho Lọc hồ sơ/JD
  Briefcase,    // Icon cho Công việc/Hành chính
  Zap,
  Target,
  Flame,
  MousePointerClick
} from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

// IMPORT COMPONENT NÚT DOWNLOAD DÙNG CHUNG
import DownloadButtonRoadmap from "../button/dowloadRoadmap";

export const AiHr = () => {
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
            <span className="text-sm font-bold text-red-700 tracking-wide uppercase">AI For Human Resources</span>
          </motion.div>

          <div className="max-w-screen-2xl mx-auto text-center space-y-6 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              // ĐÃ SỬA: Giảm size xuống 1 nấc (4xl -> 7xl) để nhỏ hơn 1 xíu
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-widest leading-normal text-slate-900 uppercase break-words"
            >
              AI CHO HR & NHÂN SỰ
              <span className="text-red-700 block mt-2 md:mt-4">
                TỪ TUYỂN DỤNG ĐẾN GIỮ CHÂN
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed mt-6"
            >
              Nâng Tầm Công Tác Nhân Sự Với <span className="text-slate-900 font-bold">Trợ Lý AI</span> Chuyên Nghiệp.
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
                 Thời lượng: 2 Buổi thực chiến
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
              “Nhân tài tốt nhất là người học hỏi nhanh nhất. <br />
              <span className="text-red-600">
                 AI giúp bạn tìm kiếm, đào tạo và giữ chân họ.
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
              {/* Value 1: Recruitment */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <UserPlus className="w-40 h-40 text-red-600" />
                </div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <UserPlus className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-slate-900">Tối ưu hóa Tuyển dụng</h4>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                      AI hỗ trợ viết JD hấp dẫn, tự động sàng lọc hàng trăm CV trong vài phút và gợi ý bộ câu hỏi phỏng vấn chuẩn năng lực.
                    </p>
                </div>
              </motion.div>

              {/* Value 2: Retention (Red Card) */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-red-700 text-white p-10 rounded-3xl shadow-xl shadow-red-900/10 flex flex-col justify-between group">
                <div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Giữ chân nhân tài</h4>
                    <p className="text-red-50 text-lg">
                      Phân tích dữ liệu để dự báo nguy cơ nghỉ việc và đo lường sự gắn kết, giúp HR có hành động giữ người kịp thời.
                    </p>
                </div>
              </motion.div>

              {/* Value 3: L&D */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all group">
                 <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Đào tạo & Phát triển</h4>
                <p className="text-slate-600 text-lg">
                  Cá nhân hóa lộ trình học tập và thăng tiến cho từng nhân viên, phát hiện sớm khoảng trống kỹ năng (Skill gaps).
                </p>
              </motion.div>

              {/* Value 4: Benefit */}
              <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-red-200 transition-all flex items-center gap-8">
                 <div className="hidden md:flex w-20 h-20 bg-red-50 text-red-600 rounded-2xl flex-shrink-0 items-center justify-center">
                    <Briefcase className="w-10 h-10" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">Giảm gánh nặng Hành chính</h4>
                    <p className="text-slate-600 text-lg">
                      Tự động hóa các tác vụ giấy tờ để HR tập trung tối đa vào yếu tố "Con người" và trải nghiệm nhân viên.
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
                 <p className="text-slate-500 text-lg">Quy trình nhân sự toàn diện dưới sự hỗ trợ của AI.</p>
             </motion.div>

             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="grid gap-4"
             >
                {[
                    { step: "01", title: "Tuyển dụng thông minh", content: "Tối ưu hóa mô tả công việc (JD), sàng lọc hồ sơ tự động để tìm ứng viên tốt nhất." },
                    { step: "02", title: "Đánh giá & Tuyển chọn", content: "So khớp năng lực ứng viên, hỗ trợ tạo bộ câu hỏi và kịch bản phỏng vấn." },
                    { step: "03", title: "Hội nhập (Onboarding)", content: "Tự động hóa quy trình đón nhân viên mới, giúp họ hòa nhập nhanh chóng." },
                    { step: "04", title: "Đào tạo (L&D)", content: "Đánh giá kỹ năng hiện tại, đề xuất khóa học và lộ trình phát triển phù hợp." },
                    { step: "05", title: "Quản lý hiệu suất", content: "Review nhân sự dựa trên dữ liệu khách quan, giảm thiểu thiên kiến cảm tính." },
                    { step: "06", title: "Gắn kết & Giữ chân", content: "Phân tích mức độ hài lòng, dự báo tỷ lệ nghỉ việc (Churn rate) để có phương án xử lý." },
                    { step: "07", title: "Trải nghiệm nhân viên", content: "Xây dựng môi trường làm việc tích cực, thấu hiểu nhân viên nhờ phân tích cảm xúc." }
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
                    {["Chuyên viên Tuyển dụng", "C&B", "L&D / Đào tạo", "HR Manager", "Giám đốc Nhân sự"].map((tag, i) => (
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
                    <Users className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 relative z-10">
                    Sẵn sàng bứt phá?
                </h2>
                <p className="text-slate-500 mb-12 text-xl relative z-10 max-w-2xl mx-auto">
                    Xây dựng đội ngũ nhân sự vững mạnh và gắn kết với sự hỗ trợ của công nghệ AI tiên tiến.
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