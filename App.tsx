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

// [MỚI] Import trang 404 vừa tạo ở Bước 1
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
      <div className="bg-white min-h-screen font-sans selection:bg-brand-red selection:text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <div key={location.pathname} className="w-full">
            <Routes location={location}>
              {/* Các Route chính */}
              <Route path="/" element={<HomePage />} />
              <Route path="/doanh-nghiep" element={<BusinessPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />

              {/* [QUAN TRỌNG] Route bắt lỗi 404 - Luôn để cuối cùng */}
              <Route path="*" element={<NotFoundPage />} />
              
            </Routes>
          </div>
        </AnimatePresence>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;