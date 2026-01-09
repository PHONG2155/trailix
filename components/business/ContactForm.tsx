import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Loader2 } from 'lucide-react';
import { Reveal } from '../ui/Shared';
import { useTranslation } from 'react-i18next';

// --- CẤU HÌNH ---
const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbyj7zERNZ9ron9yf5EwEWW2gqI1RpbXgs5WvZUv4WcOnYQ-FuPGsiRflka14EWp2wGh/exec';

// --- Helper Validate Số điện thoại ---
const validatePhone = (phone: string) => {
  const regex = /^(0)([0-9]{9})$/;
  return regex.test(phone);
};

// --- Component SelectDropdown ---
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
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>{value || placeholder}</span>
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
                onClick={() => { onChange(option); setIsOpen(false); }}
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
  const { t } = useTranslation('business');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    customerType: '',
    position: '',
    companyName: '',
    service: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const customerTypes = t('contact.customerTypes', { returnObjects: true }) as string[];
  const services = t('contact.services', { returnObjects: true }) as string[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setStatus('idle');

    // --- 1. VALIDATION ---
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setMessage(t('contact.validation.nameEmail'));
      return;
    }

    if (!formData.phone) {
      setStatus('error');
      setMessage(t('contact.validation.phone'));
      return;
    }

    if (!validatePhone(formData.phone)) {
      setStatus('error');
      setMessage(t('contact.validation.phoneInvalid'));
      return;
    }

    if (!formData.customerType) {
      setStatus('error');
      setMessage(t('contact.validation.customerType'));
      return;
    }

    if (!formData.service) {
      setStatus('error');
      setMessage(t('contact.validation.service'));
      return;
    }

    // --- 2. GỬI DỮ LIỆU ---
    setIsSubmitting(true);

    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      formBody.append(key, String(value));
    });

    try {
      const response = await fetch(GAS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Phản hồi HTML lỗi:", text);
        throw new Error("Lỗi Server: Vui lòng kiểm tra quyền truy cập (Anyone) của Script.");
      }

      const result = await response.json();

      if (result.result === "success") {
        setStatus('success');
        setMessage(t('contact.messages.success'));
        // Reset form (bao gồm cả 2 trường mới)
        setFormData({ name: '', email: '', phone: '', customerType: '', position: '', companyName: '', service: '', note: '' });
        setTimeout(() => setMessage(''), 5000);
      } else {
        console.error("Lỗi Logic Server:", result.error);
        throw new Error("Hệ thống báo lỗi: " + result.error);
      }
    } catch (error: any) {
      console.error('Lỗi khi gửi:', error);
      setStatus('error');
      setMessage(t('contact.messages.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24" id="contact-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black font-display text-white uppercase tracking-tight">
              {t('contact.title')}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red" />
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* HÀNG 1: TÊN & EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.name')} <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.email')} <span className="text-red-500">*</span></label>
                <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>

            {/* HÀNG 2: PHONE & CUSTOMER TYPE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.phone')} <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 pr-2 my-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" className="w-5 h-auto rounded-sm shadow-sm" />
                  </div>
                  <input
                    type="tel"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-16 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                    placeholder={t('contact.form.phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      if (val.length <= 11) setFormData({ ...formData, phone: val });
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.customerType')} <span className="text-red-500">*</span></label>
                <SelectDropdown options={customerTypes} value={formData.customerType} onChange={(val) => setFormData({ ...formData, customerType: val })} placeholder={t('contact.form.customerTypePlaceholder')} />
              </div>
            </div>

            {/* HÀNG 3: [MỚI] CHỨC VỤ & TÊN CÔNG TY */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.position')}</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                  placeholder={t('contact.form.positionPlaceholder')}
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.companyName')}</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                  placeholder={t('contact.form.companyPlaceholder')}
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
            </div>

            {/* HÀNG 4: DỊCH VỤ */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.service')} <span className="text-red-500">*</span></label>
              <SelectDropdown options={services} value={formData.service} onChange={(val) => setFormData({ ...formData, service: val })} placeholder={t('contact.form.servicePlaceholder')} />
            </div>

            {/* HÀNG 5: GHI CHÚ */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.note')}</label>
              <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all resize-none" value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })} placeholder={t('contact.form.notePlaceholder')} />
            </div>

            <AnimatePresence>
              {message && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className={`p-4 rounded-lg flex items-center gap-3 text-sm font-medium ${status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {status === 'success' ? <Check className="w-5 h-5" /> : null}
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="pt-2">
              <motion.button whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }} type="submit" disabled={isSubmitting} className={`w-full text-white font-bold text-lg py-4 rounded-full shadow-lg uppercase tracking-wide transition-colors flex justify-center items-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-red shadow-brand-red/30 hover:bg-red-700'}`}>
                {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />{t('contact.form.submitting')}</>) : t('contact.form.submit')}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};