import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Rocket, Zap, Layout, CheckCircle2, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { JobRole, ExperienceLevel, Roadmap } from '../../types';
import { generateLearningRoadmap } from '../../services/geminiService';
import { useTranslation } from 'react-i18next';

const TerminalLoader = () => {
  const { t } = useTranslation('home');
  const [text, setText] = useState<string[]>([]);
  const logs = [
    t('roadmap.loader.init'),
    t('roadmap.loader.analyze'),
    t('roadmap.loader.fetch'),
    t('roadmap.loader.optimize'),
    t('roadmap.loader.compile')
  ];

  useEffect(() => {
    let delay = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    logs.forEach((log, index) => {
      const t = setTimeout(() => {
        setText(prev => [...prev, log]);
      }, delay);
      timers.push(t);
      delay += 800;
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="bg-[#0F172A] rounded-xl p-6 font-mono text-xs text-green-400 h-full min-h-[300px] border border-gray-800 shadow-inner flex flex-col justify-center relative">
      <div className="flex gap-4 mb-4 absolute top-5 left-5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-3 mt-6">
        {text.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <span className="opacity-50 mr-2 text-gray-500">$</span>{t}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-green-400 inline-block align-middle ml-1"
        />
      </div>
    </div>
  );
};

const ModernSelect = ({
  options,
  value,
  onChange,
  placeholder,
  icon: Icon
}: {
  options: string[],
  value: string,
  onChange: (val: string) => void,
  placeholder: string,
  icon: any
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border text-left rounded-xl pl-12 pr-4 py-3.5 font-bold flex items-center justify-between transition-all shadow-sm outline-none ${isOpen ? 'border-brand-red ring-2 ring-brand-red/20 shadow-md' : 'border-gray-200 hover:border-brand-red/60 hover:shadow-md'
          }`}
      >
        <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isOpen || value ? 'text-brand-red' : 'text-gray-400'}`} size={20} />
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden max-h-[300px] overflow-y-auto custom-scrollbar p-1"
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 cursor-pointer flex items-center justify-between group transition-all rounded-lg mb-0.5 ${value === option ? 'bg-red-50 text-brand-red' : 'hover:bg-gray-50 text-gray-700'
                  }`}
              >
                <span className={`font-medium group-hover:translate-x-1 transition-transform ${value === option ? 'font-bold' : ''}`}>
                  {option}
                </span>
                {value === option && <Check className="w-4 h-4 text-brand-red" />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const RoadmapGenerator = () => {
  const { t } = useTranslation('home');
  const [roleSelection, setRoleSelection] = useState<string>('');
  const [customRole, setCustomRole] = useState<string>('');

  const [levelSelection, setLevelSelection] = useState<string>('');
  const [customLevel, setCustomLevel] = useState<string>('');

  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Translate role and level options
  const roleOptions = [
    ...Object.values(JobRole).map(role => t(`roadmap.roles.${role}`)),
    t('roadmap.form.other')
  ];
  const levelOptions = [
    ...Object.values(ExperienceLevel).map(level => t(`roadmap.levels.${level}`)),
    t('roadmap.form.other')
  ];

  const handleGenerate = async () => {
    const otherText = t('roadmap.form.other');
    const finalRole = roleSelection === otherText ? customRole : roleSelection;
    const finalLevel = levelSelection === otherText ? customLevel : levelSelection;

    if (!finalRole || !finalLevel) return;

    setLoading(true);
    setRoadmap(null);
    try {
      const result = await generateLearningRoadmap(finalRole as JobRole, finalLevel as ExperienceLevel);
      setTimeout(() => {
        setRoadmap(result);
        setLoading(false);
      }, 3000);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  // Cập nhật: Logic scroll chính xác theo mẫu Navbar của bạn
  const scrollToConsultation = () => {
    // Nếu KHÔNG phải trang doanh nghiệp -> Chuyển trang trước
    if (location.pathname !== '/doanh-nghiep') {
      navigate('/doanh-nghiep');
      // Thêm timeout để đợi trang load xong DOM mới tìm element để scroll
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      // Nếu đang ở trang doanh nghiệp rồi -> Cuộn luôn
      const element = document.getElementById('contact-form');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentRole = roleSelection === 'Khác' ? customRole : roleSelection;
  const currentLevel = levelSelection === 'Khác' ? customLevel : levelSelection;
  const isReady = currentRole && currentLevel && !loading;

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle bright background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display text-brand-black mb-6">
            {t('roadmap.title')} <span className="text-brand-red">{t('roadmap.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">

          {/* Controls */}
          <div className="lg:col-span-4 space-y-8 flex flex-col justify-center">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 ml-1">{t('roadmap.form.roleLabel')}</label>
              <ModernSelect
                options={roleOptions}
                value={roleSelection}
                onChange={(val) => setRoleSelection(val)}
                placeholder={t('roadmap.form.rolePlaceholder')}
                icon={Users}
              />
              <AnimatePresence>
                {roleSelection === t('roadmap.form.other') && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <input
                      type="text"
                      value={customRole}
                      onChange={(e) => setCustomRole(e.target.value)}
                      placeholder={t('roadmap.form.roleCustomPlaceholder')}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all text-gray-700 font-medium text-sm shadow-sm"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 ml-1">{t('roadmap.form.levelLabel')}</label>
              <ModernSelect
                options={levelOptions}
                value={levelSelection}
                onChange={(val) => setLevelSelection(val)}
                placeholder={t('roadmap.form.levelPlaceholder')}
                icon={Rocket}
              />
              <AnimatePresence>
                {levelSelection === t('roadmap.form.other') && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <input
                      type="text"
                      value={customLevel}
                      onChange={(e) => setCustomLevel(e.target.value)}
                      placeholder={t('roadmap.form.levelCustomPlaceholder')}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all text-gray-700 font-medium text-sm shadow-sm"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={!isReady}
              onClick={handleGenerate}
              className={`w-full py-5 rounded-xl font-black uppercase tracking-wide transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-red/20 ${!isReady ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                loading ? 'bg-brand-red/80 text-white cursor-wait' : 'bg-brand-red text-white hover:bg-brand-darkRed'
                }`}
            >
              {loading ? (
                <>{t('roadmap.form.thinking')}</>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-current" /> {t('roadmap.form.generate')}
                </>
              )}
            </motion.button>
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-8 bg-gray-50 rounded-2xl border border-gray-200 min-h-[450px] relative overflow-hidden p-1">
            {loading ? (
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                  <TerminalLoader />
                </div>
              </div>
            ) : roadmap ? (
              <div className="h-full overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-display">{t('roadmap.result.title')}</h3>
                    <p className="text-brand-red text-sm font-bold mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      {roadmap.role} • {roadmap.level}
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    <Layout className="text-brand-red" size={24} />
                  </div>
                </div>

                <div className="space-y-4">
                  {roadmap.steps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 }}
                      className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-red/5 text-brand-red flex items-center justify-center flex-shrink-0 font-bold border border-brand-red/10 group-hover:bg-brand-red group-hover:text-white transition-colors">
                          {step.week}
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                            <span className="hidden md:inline text-gray-300">|</span>
                            <span className="text-sm text-gray-500">{step.focus}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {step.topics.map((t, i) => (
                              <span key={i} className="text-xs font-medium bg-gray-50 text-gray-600 px-3 py-1.5 rounded-md border border-gray-100 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-green-500" /> {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Nút đăng ký tư vấn - Trỏ về Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: roadmap.steps.length * 0.15 + 0.3 }}
                  className="mt-10 mb-4 pt-6 border-t border-gray-200 text-center flex justify-center"
                >
                  <div>
                    <p className="text-gray-600 mb-4">{t('roadmap.result.consultation')}</p>
                    <motion.button
                      onClick={scrollToConsultation}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative overflow-hidden bg-brand-red text-white hover:bg-brand-darkRed px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-brand-red/30 flex items-center gap-2 group cursor-pointer"
                    >
                      <span>{t('roadmap.result.registerBtn')}</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </motion.div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-60">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <Layout className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{t('roadmap.emptyState.title')}</h3>
                <p className="text-sm text-gray-500">{t('roadmap.emptyState.subtitle')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};