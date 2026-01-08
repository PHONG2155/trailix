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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
            <img src={LOGO_SRC} alt="Trailix" className="h-10 md:h-16" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">

              {/* TRANG CHỦ */}
              <Link
                to="/"
                className={`nav-link ${isActive('/') && 'active'}`}
              >
                TRANG CHỦ
              </Link>

              {/* DOANH NGHIỆP DROPDOWN */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenBusiness(true)}
                onMouseLeave={() => setOpenBusiness(false)}
              >
                <button
                  className={`nav-link flex items-center gap-1 uppercase ${
                    location.pathname.includes('doanh-nghiep') ||
                    location.pathname.includes('so-hoa-bai-giang')
                      ? 'active'
                      : ''
                  }`}
                >
                  DOANH NGHIỆP 
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
                      className="absolute top-full left-0 w-64 pt-4"
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2 space-y-1">
                        <Link
                          to="/doanh-nghiep"
                          onClick={() => setOpenBusiness(false)}
                          className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-brand-red font-semibold text-sm transition-colors duration-200"
                        >
                          ĐÀO TẠO IN-HOUSE
                        </Link>
                        <Link
                          to="/so-hoa-bai-giang"
                          onClick={() => setOpenBusiness(false)}
                          className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-brand-red font-semibold text-sm transition-colors duration-200"
                        >
                          SỐ HÓA BÀI GIẢNG
                        </Link>
                        <Link
                          to="/lms"
                          onClick={() => setOpenBusiness(false)}
                          className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-brand-red font-semibold text-sm transition-colors duration-200"
                        >
                          GIẢI PHÁP LMS 
                        </Link>
                        <Link
                          to="/chatbot"
                          onClick={() => setOpenBusiness(false)}
                          className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-brand-red font-semibold text-sm transition-colors duration-200"
                        >
                          GIẢI PHÁP CHATBOT
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* --- MỚI THÊM: BLOG LINK --- */}
              <Link
                to="/blog"
                className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
              >
                BLOG
              </Link>

              {/* NHẬN BÁO GIÁ */}
              <button
                onClick={handleScrollToContact}
                className="nav-link"
              >
                NHẬN BÁO GIÁ
              </button>
            </div>

            {/* CTA */}
            <motion.button
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.05 }}
              className="bg-brand-red text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              ĐĂNG KÝ NGAY <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={handleScrollToContact}
              className="bg-brand-red text-white px-4 py-2 rounded-full text-xs font-bold"
            >
              ĐĂNG KÝ
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
              <Link to="/" className="mobile-link">TRANG CHỦ</Link>

              <button
                onClick={() => setOpenBusiness(!openBusiness)}
                className="mobile-link flex justify-between items-center w-full"
              >
                DOANH NGHIỆP 
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
                        ĐÀO TẠO IN-HOUSE
                      </Link>
                      <Link to="/so-hoa-bai-giang" className="mobile-sub block py-2 text-gray-600 hover:text-brand-red">
                        SỐ HÓA BÀI GIẢNG
                      </Link>
                       <Link to="/lms" className="mobile-sub block py-2 text-gray-600 hover:text-brand-red">
                        GIẢI PHÁP LMS
                      </Link>
                       <Link to="/chatbot" className="mobile-sub block py-2 text-gray-600 hover:text-brand-red">
                        GIẢI PHÁP CHATBOT
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* --- MỚI THÊM: BLOG LINK MOBILE --- */}
              <Link to="/blog" className="mobile-link block w-full text-left">
                BLOG
              </Link>

              <button onClick={handleScrollToContact} className="mobile-link w-full text-left">
                NHẬN BÁO GIÁ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};