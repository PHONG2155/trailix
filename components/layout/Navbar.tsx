import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LOGO_SRC = "/images/logo-page/Trailix.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  // ========================================================
  // ✨ PHẦN MỚI THÊM: Tự động cuộn lên đầu khi chuyển trang ✨
  // ========================================================
  useEffect(() => {
    // Không áp dụng logic này nếu đang thực hiện hành động cuộn xuống form liên hệ
    // (Logic cuộn form liên hệ đã được xử lý riêng bằng setTimeout ở dưới)
    if (!location.hash) { 
        window.scrollTo(0, 0);
    }
  }, [location.pathname]); // Chạy mỗi khi pathname thay đổi


  // Hàm xử lý khi click vào menu (giữ nguyên như cũ)
  const handlePageNavigation = (path) => {
    setIsOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Hàm xử lý cuộn xuống form (giữ nguyên như cũ)
  const handleScrollToContact = () => {
    setIsOpen(false);
    if (location.pathname !== '/doanh-nghiep') {
      navigate('/doanh-nghiep');
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const element = document.getElementById('contact-form');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            onClick={() => handlePageNavigation('/')}
            className="flex-shrink-0 cursor-pointer"
          >
            <img src={LOGO_SRC} alt="Trailix Training Center" className="h-16 w-auto object-contain" />
          </Link>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              <Link 
                to="/"
                onClick={() => handlePageNavigation('/')}
                className={`font-bold text-sm uppercase tracking-wider transition-colors font-display relative group ${isActive('/') ? 'text-brand-red' : 'text-brand-darkGray hover:text-brand-red'}`}
              >
                Trang chủ
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              
              <Link 
                to="/doanh-nghiep"
                onClick={() => handlePageNavigation('/doanh-nghiep')}
                className={`font-bold text-sm uppercase tracking-wider transition-colors font-display relative group ${isActive('/doanh-nghiep') ? 'text-brand-red' : 'text-brand-darkGray hover:text-brand-red'}`}
              >
                Doanh nghiệp
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all ${isActive('/doanh-nghiep') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              
              <button 
                onClick={handleScrollToContact}
                className="text-brand-darkGray hover:text-brand-red font-bold text-sm uppercase tracking-wider transition-colors font-display relative group"
              >
               Nhận báo giá
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </button>
            </div>

            <motion.button 
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-brand-red text-white hover:bg-brand-darkRed px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-brand-red/30 flex items-center gap-2 group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Đăng ký ngay <ChevronRight className="w-4 h-4" />
              </span>
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
            </motion.button>
          </div>
          
          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={handleScrollToContact}
              className="bg-brand-red text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md active:scale-95 transition-transform uppercase tracking-wide"
            >
              Đăng ký
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-darkGray p-1">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link 
                to="/" 
                onClick={() => handlePageNavigation('/')} 
                className="text-brand-darkGray hover:text-brand-red block w-full text-left px-3 py-4 rounded-md text-base font-bold font-display uppercase border-b border-gray-50"
              >
                Trang chủ
              </Link>
              <Link 
                to="/doanh-nghiep" 
                onClick={() => handlePageNavigation('/doanh-nghiep')} 
                className="text-brand-darkGray hover:text-brand-red block w-full text-left px-3 py-4 rounded-md text-base font-bold font-display uppercase border-b border-gray-50"
              >
                Doanh nghiệp
              </Link>
              <button onClick={handleScrollToContact} className="text-brand-darkGray hover:text-brand-red block w-full text-left px-3 py-4 rounded-md text-base font-bold font-display uppercase border-b border-gray-50">
                Nhận báo giá
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};