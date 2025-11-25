
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { RoadmapGenerator } from './components/home/RoadmapGenerator';
import { CoursesSection } from './components/home/CoursesSection';
import { BusinessPage } from './components/BusinessPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-red selection:text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <RoadmapGenerator />
          <CoursesSection />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BusinessPage />
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default App;
