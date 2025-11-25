
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { Reveal } from '../ui/Shared';

const SelectDropdown = ({ 
  options, 
  value, 
  onChange, 
  placeholder 
}: { 
  options: string[], 
  value: string, 
  onChange: (val: string) => void, 
  placeholder: string 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-50 border border-gray-200 text-left rounded-lg px-4 py-3.5 flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-red-50 transition-colors ${value === option ? 'text-brand-red bg-red-50 font-medium' : 'text-gray-700'}`}
              >
                {option}
                {value === option && <Check className="w-4 h-4 text-brand-red" />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    note: ''
  });

  const services = [
    "Đào tạo AI in-house",
    "Xây dựng hệ thống LMS",
    "Xây dựng công cụ AI ChatBot",
    "Khóa học AI cá nhân",
    "Tư vấn giải pháp khác"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.");
  };

  return (
    <section className="bg-white py-24" id="contact-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 uppercase">
              ĐĂNG KÝ TƯ VẤN
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
          </Reveal>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Top Red Decoration */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Họ và Tên <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Số điện thoại</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 pr-2 my-2">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" className="w-5 h-auto rounded-sm shadow-sm" />
                </div>
                <input 
                  type="tel" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-16 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                  placeholder="091 234 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Dịch vụ cần tư vấn <span className="text-red-500">*</span></label>
              <SelectDropdown 
                options={services}
                value={formData.service}
                onChange={(val) => setFormData({...formData, service: val})}
                placeholder="Chọn dịch vụ..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Ghi chú thêm (Nếu có)</label>
              <textarea 
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all resize-none"
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
              />
            </div>

            <div className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand-red text-white font-black text-lg py-4 rounded-full shadow-xl shadow-brand-red/30 hover:bg-brand-darkRed transition-colors uppercase tracking-wide"
              >
                GỬI
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
