import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { RoadmapGenerator } from './components/home/RoadmapGenerator';
import { CoursesSection } from './components/home/CoursesSection';
import { BusinessPage } from './components/BusinessPage';

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
    <div className="bg-white min-h-screen font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <div key={location.pathname} className="w-full">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/doanh-nghiep" element={<BusinessPage />} />
          </Routes>
        </div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;