
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, PlayCircle, Terminal, BrainCircuit } from 'lucide-react';

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-brand-red/10 to-transparent rounded-full blur-3xl opacity-50 animate-blob"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-gradient-to-tr from-brand-black/5 to-transparent rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
  </div>
);

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 bg-white overflow-hidden">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-black font-display text-brand-black leading-[1.1] mb-6 tracking-tight">
            MASTER AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-orange-500 to-brand-red animate-gradient-x background-size-200">
              MASTER YOUR FUTURE
            </span>
          </h1>

          <p className="text-lg md:text-xl text-brand-gray mb-10 leading-relaxed font-medium max-w-lg">
            Đào tạo chuyên sâu về <strong>Prompt Engineering</strong> & <strong>Tự động hóa</strong>. Biến AI thành lợi thế cạnh tranh độc quyền của bạn trong kỷ nguyên số.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#roadmap" 
              className="relative overflow-hidden px-8 py-4 bg-brand-red text-white font-bold rounded-lg shadow-xl shadow-brand-red/30 flex items-center justify-center gap-3 uppercase tracking-wide text-sm group"
            >
              <span className="relative z-10 flex items-center gap-3">
                 <Cpu className="w-5 h-5" />
                 Tạo lộ trình học
              </span>
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-shine" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#courses" 
              className="px-8 py-4 bg-white border-2 border-brand-darkGray text-brand-black font-bold rounded-lg hover:border-brand-red hover:text-brand-red transition-colors flex items-center justify-center gap-3 uppercase tracking-wide text-sm"
            >
              <PlayCircle className="w-5 h-5" />
              Xem Demo
            </motion.a>
          </div>
        </motion.div>

        {/* 3D Animated Visuals */}
        <motion.div 
          className="relative hidden lg:block h-[600px] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Black Card (Background layer) */}
          <motion.div 
            animate={{ 
              y: [-15, 15, -15], 
              rotate: [-1, 2, -1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 right-0 z-10"
          >
            <div className="w-80 bg-black rounded-3xl p-8 shadow-2xl border border-gray-800 relative overflow-hidden">
               <div className="flex justify-between items-center mb-10">
                  <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center shadow-lg shadow-red-900/50">
                     <Terminal className="text-white w-6 h-6" />
                  </div>
                  <div className="h-2 w-12 bg-gray-800 rounded-full"></div>
               </div>

               <div className="space-y-4 mb-10">
                  <div className="h-2.5 w-full bg-gray-800 rounded-full"></div>
                  <div className="h-2.5 w-full bg-gray-800 rounded-full"></div>
                  <div className="h-2.5 w-3/4 bg-gray-800 rounded-full"></div>
               </div>

               <div className="bg-gray-900/80 rounded-xl p-5 border border-gray-800 mb-10 font-mono text-xs text-green-400 leading-relaxed shadow-inner">
                  <p className="mb-1"><span className="text-gray-600 mr-2">&gt;</span>Generating strategy...</p>
                  <p className="mb-1"><span className="text-gray-600 mr-2">&gt;</span>Analyzing data...</p>
                  <p><span className="text-gray-600 mr-2">&gt;</span>Optimized.</p>
               </div>

               <div className="text-right">
                  <h3 className="text-white font-black text-xl tracking-wide leading-tight">
                    PROMPT<br/>ENGINEERING
                  </h3>
               </div>
            </div>
          </motion.div>

          {/* Color Card (Foreground layer) */}
          <motion.div 
            animate={{ 
              y: [20, -20, 20], 
              rotate: [1, -3, 1], 
              scale: [0.98, 1.02, 0.98] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6, 
              ease: "easeInOut" 
            }}
            className="absolute top-56 right-64 z-20"
          >
             <div className="w-72 bg-white rounded-[2rem] p-5 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.15)] border border-gray-100">
                 <div className="w-full h-40 bg-gradient-to-bl from-[#ff512f] to-[#dd2476] rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-pink-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/10 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <BrainCircuit className="w-16 h-16 text-white drop-shadow-md" strokeWidth={1.5} />
                 </div>
                 
                 <h3 className="font-black text-2xl text-gray-900 mb-3 tracking-tight">AI Prompt</h3>
                 <div className="h-1.5 w-full bg-brand-red rounded-full mb-8"></div>

                 <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#4285F4] border-[3px] border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-[#FBBC05] border-[3px] border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-[#34A853] border-[3px] border-white"></div>
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-bold shadow-sm">
                        Active
                    </div>
                 </div>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
