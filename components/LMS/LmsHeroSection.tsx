import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const LmsHeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // ĐÃ SỬA: Thêm min-h-screen, flex, justify-center để full màn hình và căn giữa
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white py-20">
      
      {/* ===== BACKGROUND (GIỐNG ELEARNING HERO) ===== */}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Red glow */}
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-100 rounded-full blur-[220px] opacity-45" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Giải pháp LMS trọn gói
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
        >
          GIẢI PHÁP <br />
          <span className="text-brand-red">
            XÂY DỰNG HỆ THỐNG LMS
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-12"
        >
          Tiết kiệm chi phí – Triển khai nhanh chóng – Vận hành trọn đời.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-red-500/40 hover:bg-red-700 transition"
          >
            Đăng ký Demo Miễn phí
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-gray-300 text-gray-800 hover:border-brand-red hover:text-brand-red transition"
          >
            Xem Bảng Giá
          </button>
        </motion.div>
      </div>
    </section>
  );
};