import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LOGO_SRC = "/images/logo-page/Trailix.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openBusiness, setOpenBusiness] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  // --- Logic 1: Scroll nền Navbar ---
  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  // --- Logic 2: FIX SCROLL GIẬT (Dùng useLayoutEffect) ---
  useLayoutEffect(() => {
    // Tắt cơ chế tự động cuộn của trình duyệt
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Cuộn lên đầu NGAY LẬP TỨC trước khi màn hình kịp vẽ ra
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  // ----------------------------------------------

  const handleScrollToContact = () => {
    setIsOpen(false);
    if (location.pathname !== '/doanh-nghiep') {
      navigate('/doanh-nghiep');
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">
            <img src={LOGO_SRC} alt="Trailix" className="h-12 md:h-16" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">

              {/* Trang chủ */}
              <Link
                to="/"
                className={`nav-link ${isActive('/') && 'active'}`}
              >
                Trang chủ
              </Link>

              {/* DOANH NGHIỆP DROPDOWN (Đã FIX FLICKERING & SCROLL) */}
              <div
                className="relative h-full flex items-center" // Thêm h-full để bắt sự kiện hover tốt hơn
                onMouseEnter={() => setOpenBusiness(true)}
                onMouseLeave={() => setOpenBusiness(false)}
              >
                <button
                  className={`nav-link flex items-center gap-1 ${
                    location.pathname.includes('doanh-nghiep') ||
                    location.pathname.includes('so-hoa-bai-giang')
                      ? 'active'
                      : ''
                  }`}
                >
                  Doanh nghiệp 
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${openBusiness ? 'rotate-180' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {openBusiness && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 w-64 pt-4" // Dùng pt-4 làm "cầu nối vô hình" thay vì mt-2
                    >
                      {/* Container chứa nội dung menu */}
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2 space-y-1">
                        <Link
                          to="/doanh-nghiep"
                          onClick={() => setOpenBusiness(false)} // Đóng menu ngay khi click
                          className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-brand-red font-semibold text-sm transition-colors duration-200"
                        >
                          Đào tạo In-house
                        </Link>
                        <Link
                          to="/so-hoa-bai-giang"
                          onClick={() => setOpenBusiness(false)} // Đóng menu ngay khi click
                          className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-brand-red font-semibold text-sm transition-colors duration-200"
                        >
                          Số hóa bài giảng
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Nhận báo giá */}
              <button
                onClick={handleScrollToContact}
                className="nav-link"
              >
                Nhận báo giá
              </button>
            </div>

            {/* CTA */}
            <motion.button
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.05 }}
              className="bg-brand-red text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              Đăng ký ngay <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={handleScrollToContact}
              className="bg-brand-red text-white px-4 py-2 rounded-full text-xs font-bold"
            >
              Đăng ký
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              <Link to="/" className="mobile-link">Trang chủ</Link>

              {/* MOBILE SUBMENU */}
              <button
                onClick={() => setOpenBusiness(!openBusiness)}
                className="mobile-link flex justify-between items-center w-full"
              >
                Doanh nghiệp 
                <ChevronDown className={`transform transition-transform ${openBusiness ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openBusiness && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-4 border-l-2 border-gray-100 pl-4 space-y-2 py-2">
                      <Link to="/doanh-nghiep" className="mobile-sub block py-2 text-gray-600 hover:text-brand-red">
                        Đào tạo In-house
                      </Link>
                      <Link to="/so-hoa-bai-giang" className="mobile-sub block py-2 text-gray-600 hover:text-brand-red">
                        Số hóa bài giảng
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={handleScrollToContact} className="mobile-link w-full text-left">
                Nhận báo giá
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};