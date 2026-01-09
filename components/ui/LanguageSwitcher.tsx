import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'vi';

    const toggleLanguage = () => {
        const newLang = currentLang === 'vi' ? 'en' : 'vi';
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-brand-darkGray hover:border-brand-red hover:text-brand-red transition-colors font-medium text-sm uppercase tracking-wide"
            aria-label="Switch Language"
        >
            <Languages className="w-4 h-4" />
            <span>{currentLang === 'vi' ? 'EN' : 'VI'}</span>
        </motion.button>
    );
};
