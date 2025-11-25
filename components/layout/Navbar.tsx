
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

// Logo
const LOGO_SRC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 550 130'%3E%3Cdefs%3E%3Cstyle%3E.text-main{font-family:'Montserrat','Arial Black',sans-serif;font-weight:900;font-size:75px;fill:black;}.text-sub{font-family:'Montserrat','Arial',sans-serif;font-weight:800;font-size:16px;fill:black;letter-spacing:1px;}%3C/style%3E%3C/defs%3E%3Cg transform='translate(10, 10)'%3E%3Cpath d='M10,15 Q10,0 25,0 L65,0 Q75,0 75,10 L75,90 Q75,100 65,100 L25,100 Q10,100 10,85 Z' fill='%23B91C1C' /%3E%3Cpath d='M80,0 L120,0 Q135,0 135,15 L135,85 Q135,100 120,100 L80,100 Z' fill='%237F1D1D' /%3E%3Cpath d='M35,100 L35,120 L60,100 Z' fill='%23B91C1C' /%3E%3C/g%3E%3Ctext x='160' y='80' class='text-main'%3ETR%3Ctspan fill='%23B91C1C'%3EA%3C/tspan%3EILIX%3C/text%3E%3Ctext x='162' y='110' class='text-sub'%3ETRAINING CENTER%3C/text%3E%3Ctext x='162' y='128' class='text-sub'%3E%3C/text%3E%3C/svg%3E";

export const Navbar = ({ currentPage, setPage }: { currentPage: string, setPage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  const handleNavClick = (page: string, href?: string) => {
    setPage(page);
    setIsOpen(false);
    if (page === 'home' && href) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNavClick('home')} className="flex-shrink-0 cursor-pointer">
            <img src={LOGO_SRC} alt="Trailix Training Center" className="h-16 w-auto object-contain" />
          </button>
          
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => handleNavClick('home')}
                className={`font-bold text-sm uppercase tracking-wider transition-colors font-display relative group ${currentPage === 'home' ? 'text-brand-red' : 'text-brand-darkGray hover:text-brand-red'}`}
              >
                Trang chủ
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all ${currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
              <button 
                onClick={() => handleNavClick('business')}
                className={`font-bold text-sm uppercase tracking-wider transition-colors font-display relative group ${currentPage === 'business' ? 'text-brand-red' : 'text-brand-darkGray hover:text-brand-red'}`}
              >
                Doanh nghiệp
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all ${currentPage === 'business' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
              <button 
                onClick={() => handleNavClick('home', '#roadmap')}
                className="text-brand-darkGray hover:text-brand-red font-bold text-sm uppercase tracking-wider transition-colors font-display relative group"
              >
                Bảng giá
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-brand-red text-white hover:bg-brand-darkRed px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-brand-red/30 flex items-center gap-2 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Đăng ký ngay <ChevronRight className="w-4 h-4" />
              </span>
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
            </motion.button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-darkGray p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => handleNavClick('home')} className="text-brand-darkGray hover:text-brand-red block w-full text-left px-3 py-4 rounded-md text-base font-bold font-display uppercase border-b border-gray-50">
                Trang chủ
              </button>
              <button onClick={() => handleNavClick('business')} className="text-brand-darkGray hover:text-brand-red block w-full text-left px-3 py-4 rounded-md text-base font-bold font-display uppercase border-b border-gray-50">
                Doanh nghiệp
              </button>
              <button onClick={() => handleNavClick('home', '#roadmap')} className="text-brand-darkGray hover:text-brand-red block w-full text-left px-3 py-4 rounded-md text-base font-bold font-display uppercase border-b border-gray-50">
                Bảng giá
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
