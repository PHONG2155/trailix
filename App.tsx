// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // 1. Import thêm 'motion'
import { HelmetProvider } from 'react-helmet-async'; 

// Import các component hiện có
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { RoadmapGenerator } from './components/home/RoadmapGenerator';
import { CoursesSection } from './components/home/CoursesSection';
import { BusinessPage } from './components/pages/BusinessPage';
import { BlogList } from './components/pages/BlogList';
import { BlogPostDetail } from './components/pages/BlogPostDetail';
import { ElearningPage } from './components/pages/ElearningPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { LmsPage } from './components/pages/LmsPage';
import { ChatbotPage } from './components/pages/ChatbotPage';

import { AiEvent } from './components/course/AiToEvent';
import { PromptBasic } from './components/course/PromptBasic';
import { AiCLevel } from './components/course/AiCLevel';
import { AiManager } from './components/course/AiManager';
import { AiEmployee } from './components/course/AiEmployee';
import { AiHr } from './components/course/AiHr';
import { AiSalesMarketing } from './components/course/AiSalesMarketing';
import { AiData } from './components/course/AiData';
import { AiDesign } from './components/course/AiDesign';
import { AiVideo } from './components/course/AiVideo';
import { OfficeAI } from './components/course/OfficeAI';
import { PromptAdvanced } from './components/course/PromptAdvanced';
import { CoursesList } from './components/course/CoursesList';

// Trang chủ
const HomePage = () => (
  <>
    <Hero />
    <RoadmapGenerator />
    <CoursesSection />
  </>
);

const App = () => {
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-brand-red selection:text-white">
        
        <Navbar />
        
        <AnimatePresence mode="wait">
          {/* 2. SỬA CHÍNH Ở ĐÂY: Dùng motion.div thay vì div thường */}
          <motion.div 
            key={location.pathname} 
            className="w-full flex-grow"
            initial={{ opacity: 0, y: 15 }}      // Bắt đầu: hơi mờ và thấp xuống một chút
            animate={{ opacity: 1, y: 0 }}       // Hiện ra: rõ nét và về vị trí chuẩn
            exit={{ opacity: 0, y: -15 }}        // Biến mất: mờ dần và bay nhẹ lên trên
            transition={{ duration: 0.3, ease: "easeInOut" }} // Thời gian chuyển cảnh 0.3s
          >
            <Routes location={location}>
              {/* Các Route chính */}
              <Route path="/" element={<HomePage />} />
              <Route path="/doanh-nghiep" element={<BusinessPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
      
              {/* Route cho trang Số hóa bài giảng */}
              <Route path="/so-hoa-bai-giang" element={<ElearningPage />} />

              {/* Route cho trang LMS */}
              <Route path="/lms" element={<LmsPage />} />
              {/* Route cho trang Chatbot */}
              <Route path="/chatbot" element={<ChatbotPage />} />

              {/* Route cho trang AI to Event */}
              <Route path="/ai-event" element={<AiEvent />} />
              {/* Route cho trang Prompt Basic */}
              <Route path="/prompt-basic" element={<PromptBasic />} />
              {/* Route cho trang AI dành cho C-Level */}
              <Route path="/ai-c-level" element={<AiCLevel />} />
              {/* Route cho trang AI dành cho Manager */}
              <Route path="/ai-manager" element={<AiManager />} />
              {/* Route cho trang AI dành cho Nhân viên */}
              <Route path="/ai-employee" element={<AiEmployee />} />
              {/* Route cho trang AI dành cho HR */}
              <Route path="/ai-hr" element={<AiHr />} />
              {/* Route cho trang AI dành cho Sales & Marketing */}
              <Route path="/ai-sales-marketing" element={<AiSalesMarketing />} />
              {/* Route cho trang AI về Dữ liệu */}
              <Route path="/ai-data" element={<AiData />} />
              {/* Route cho trang AI về Thiết kế */}
              <Route path="/ai-design" element={<AiDesign />} />
              {/* Route cho trang AI về Video */}
              <Route path="/ai-video" element={<AiVideo />} />    
              {/* Route cho trang Office AI */}
              <Route path="/office-ai" element={<OfficeAI />} />
              {/* Route cho trang Prompt Advanced */}
              <Route path="/prompt-advanced" element={<PromptAdvanced />} />
              {/* Route cho trang Danh sách Khóa học */}
              <Route path="/courses" element={<CoursesList />} />
              {/* Route bắt lỗi 404 */}

              <Route path="*" element={<NotFoundPage />} />
              
            </Routes>
          </motion.div>
        </AnimatePresence>
        
        <Footer />
        
      </div>
    </HelmetProvider>
  );
};

export default App;