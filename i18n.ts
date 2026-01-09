import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from './src/locales/en/common.json';
import viCommon from './src/locales/vi/common.json';
import enHome from './src/locales/en/home.json';
import viHome from './src/locales/vi/home.json';
import enBusiness from './src/locales/en/business.json';
import viBusiness from './src/locales/vi/business.json';
import enLms from './src/locales/en/lms.json';
import viLms from './src/locales/vi/lms.json';
import enChatbot from './src/locales/en/chatbot.json';
import viChatbot from './src/locales/vi/chatbot.json';
import enElearning from './src/locales/en/elearning.json';
import viElearning from './src/locales/vi/elearning.json';
import enCourses from './src/locales/en/courses.json';
import viCourses from './src/locales/vi/courses.json';
import enBlog from './src/locales/en/blog.json';
import viBlog from './src/locales/vi/blog.json';

// Configure i18next
i18n
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        resources: {
            en: {
                common: enCommon,
                home: enHome,
                business: enBusiness,
                lms: enLms,
                chatbot: enChatbot,
                elearning: enElearning,
                courses: enCourses,
                blog: enBlog,
            },
            vi: {
                common: viCommon,
                home: viHome,
                business: viBusiness,
                lms: viLms,
                chatbot: viChatbot,
                elearning: viElearning,
                courses: viCourses,
                blog: viBlog,
            },
        },
        fallbackLng: 'vi', // Default language
        defaultNS: 'common', // Default namespace
        ns: ['common', 'home', 'business', 'lms', 'chatbot', 'elearning', 'courses', 'blog'],

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false, // React already escapes values
        },

        react: {
            useSuspense: false, // Disable suspense for now
        },
    });

export default i18n;
