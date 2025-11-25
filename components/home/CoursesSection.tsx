import React from 'react';
import { COURSES, ICON_MAP } from '../../constants';
import { Reveal, SpotlightCard } from '../ui/Shared';

const CourseCard: React.FC<{ course: typeof COURSES[0], index: number }> = ({ course, index }) => {
  const Icon = ICON_MAP[course.icon];

  return (
    <Reveal delay={index * 0.05}>
      <SpotlightCard className="rounded-2xl h-full hover:shadow-2xl transition-all duration-300">
        <div className="p-8 h-full flex flex-col relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-brand-lightGray flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_20px_rgba(185,28,28,0.3)] group-hover:-translate-y-1">
            <Icon strokeWidth={1.5} className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
          </div>
          
          <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray bg-gray-50 px-2 py-1 rounded border border-gray-100 group-hover:border-brand-red/20 transition-colors">
              {course.category}
            </span>
          </div>

          <h3 className="text-xl font-black text-brand-red mb-3 font-display leading-tight group-hover:text-brand-darkRed transition-colors">
            {course.title}
          </h3>
          <p className="text-brand-darkGray text-sm leading-relaxed mb-6 font-medium text-gray-500 flex-grow group-hover:text-gray-600">
            {course.description}
          </p>
        </div>
      </SpotlightCard>
    </Reveal>
  );
};

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-black font-display text-brand-black mb-6">
                Hệ thống <span className="text-brand-red">Khoá học</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Giáo trình được tinh chỉnh để phù hợp với từng nhóm ngành nghề cụ thể, giúp bạn áp dụng ngay vào công việc.
              </p>
            </Reveal>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
         </div>
      </div>
    </section>
  );
};