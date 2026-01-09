// Helper to use with i18n for dynamic data
import i18n from './i18n';
import { Course } from './types';
import {
  Terminal, BarChart3, Bot, Trello, Presentation, PenTool,
  MessageSquare, GitGraph, Search, GraduationCap, Palette,
  Video, Image, Lightbulb, MessageCircle
} from 'lucide-react';

// Icon mapping remains the same
export const ICON_MAP: Record<string, any> = {
  Terminal, BarChart3, Bot, Trello, Presentation, PenTool,
  MessageSquare, GitGraph, Search, GraduationCap, Palette,
  Video, Image, Lightbulb, MessageCircle
};

// Get courses from translations
export const getCourses = (): Course[] => {
  const coursesData = i18n.t('courses.items', { returnObjects: true, ns: 'home' }) as any[];
  return coursesData.map(course => ({
    ...course,
    icon: course.icon || 'Terminal'
  }));
};

// Dynamic getter for COURSES (for backwards compatibility)
export const COURSES = new Proxy([] as Course[], {
  get(target, prop) {
    const courses = getCourses();
    return courses[prop as any];
  },
  has(target, prop) {
    const courses = getCourses();
    return prop in courses;
  }
});

// Alternative: Direct export (simpler approach)
// Just use this in components:
// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation('home');
// const courses = t('courses.items', { returnObjects: true });