"use client";

import React from "react";
import { 
  ArrowRight, 
  Terminal, Zap, FileText, UserPlus, TrendingUp, 
  Palette, Video, BarChart3, ShieldCheck, Compass, 
  Layers, UserCheck, Search, Database
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

// --- DỮ LIỆU 12 KHÓA HỌC ---
// Bro nhớ kiểm tra lại đường dẫn (link) cho khớp với router của bro nhé
const COURSES = [
  // --- NHÓM 1: NỀN TẢNG & KỸ NĂNG ---
  {
    id: 1,
    title: "PROMPT ENGINEERING CƠ BẢN",
    desc: "Viết lệnh hiệu quả lần đầu – Bước chân vào thế giới AI.",
    icon: <Terminal className="w-8 h-8" />,
    link: "/prompt-basic" // Sửa lại link này theo router của bro
  },
  {
    id: 2,
    title: "PROMPT NÂNG CAO & AGENT",
    desc: "Xây dựng AI Agent và quy trình tự động hóa doanh nghiệp.",
    icon: <Zap className="w-8 h-8" />,
    link: "/prompt-advanced"
  },
  {
    id: 3,
    title: "AI CHO DÂN VĂN PHÒNG",
    desc: "Tăng tốc soạn thảo, xử lý dữ liệu và làm việc thông minh hơn.",
    icon: <FileText className="w-8 h-8" />,
    link: "/office-ai"
  },
  {
    id: 4,
    title: "AI CHO NHÂN VIÊN",
    desc: "Tối ưu hóa hiệu suất cá nhân, giảm tải công việc lặp lại.",
    icon: <UserCheck className="w-8 h-8" />,
    link: "/ai-employee"
  },

  // --- NHÓM 2: CHUYÊN MÔN NGHIỆP VỤ ---
  {
    id: 5,
    title: "AI CHO HR & NHÂN SỰ",
    desc: "Từ tuyển dụng, sàng lọc CV đến giữ chân nhân tài.",
    icon: <UserPlus className="w-8 h-8" />,
    link: "/ai-hr"
  },
  {
    id: 6,
    title: "AI SALES & MARKETING",
    desc: "Tìm kiếm khách hàng, chăm sóc và bùng nổ doanh số.",
    icon: <TrendingUp className="w-8 h-8" />,
    link: "/ai-sales-marketing"
  },
  {
    id: 7,
    title: "AI DESIGN SÁNG TẠO",
    desc: "Thiết kế Banner, Poster, ấn phẩm truyền thông không cần kỹ năng vẽ.",
    icon: <Palette className="w-8 h-8" />,
    link: "/ai-design"
  },
  {
    id: 8,
    title: "AI VIDEO PRODUCTION",
    desc: "Sản xuất video marketing chuyên nghiệp từ kịch bản đến hậu kỳ.",
    icon: <Video className="w-8 h-8" />,
    link: "/ai-video"
  },
  {
    id: 9,
    title: "AI EVENT & STAGE",
    desc: "Lên Concept, Visual 3D sân khấu và sự kiện siêu tốc.",
    icon: <Layers className="w-8 h-8" />,
    link: "/ai-event"
  },
  {
    id: 10,
    title: "AI PHÂN TÍCH DỮ LIỆU",
    desc: "Biến dữ liệu thô thành báo cáo và chiến lược kinh doanh.",
    icon: <BarChart3 className="w-8 h-8" />,
    link: "/ai-data"
  },

  // --- NHÓM 3: QUẢN LÝ & LÃNH ĐẠO ---
  {
    id: 11,
    title: "AI CHO QUẢN LÝ (MANAGER)",
    desc: "Lãnh đạo bằng dữ liệu, tối ưu nguồn lực và hiệu suất team.",
    icon: <ShieldCheck className="w-8 h-8" />,
    link: "/ai-manager"
  },
  {
    id: 12,
    title: "AI CHO C-LEVEL (LÃNH ĐẠO)",
    desc: "Chiến lược chuyển đổi số và kiến tạo lợi thế cạnh tranh.",
    icon: <Compass className="w-8 h-8" />,
    link: "/ai-c-level"
  },
];

export const CoursesList = () => {
  const navigate = useNavigate();

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
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Training Programs</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-widest leading-normal uppercase">
            HỆ THỐNG <br className="md:hidden" />
            <span className="text-red-700">12 KHÓA HỌC AI</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Giải pháp đào tạo toàn diện từ tư duy, kỹ năng nền tảng đến ứng dụng chuyên sâu cho từng vị trí.
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
          {COURSES.map((course) => (
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
                  {course.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {course.desc}
                </p>
              </div>

              {/* Button Fake */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  Xem chi tiết
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