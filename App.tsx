// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
      {/* 1. SỬA Ở ĐÂY: Thêm "flex flex-col"
         Để biến div này thành flex container dọc, kết hợp min-h-screen để bao trọn màn hình 
      */}
      <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-brand-red selection:text-white">
        
        <Navbar />
        
        <AnimatePresence mode="wait">
          {/* 2. SỬA Ở ĐÂY: Thêm "flex-grow"
             Để phần này tự động giãn ra chiếm hết khoảng trống, đẩy Footer xuống đáy
          */}
          <div key={location.pathname} className="w-full flex-grow">
            <Routes location={location}>
              {/* Các Route chính */}
              <Route path="/" element={<HomePage />} />
              <Route path="/doanh-nghiep" element={<BusinessPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />

              {/* Route cho trang Số hóa bài giảng */}
              <Route path="/so-hoa-bai-giang" element={<ElearningPage />} />

              {/* Route bắt lỗi 404 */}
              <Route path="*" element={<NotFoundPage />} />
              
            </Routes>
          </div>
        </AnimatePresence>
        
        {/* Footer sẽ tự động nằm đáy nhờ flex-grow ở trên */}
        <Footer />
        
      </div>
    </HelmetProvider>
  );
};

export default App;