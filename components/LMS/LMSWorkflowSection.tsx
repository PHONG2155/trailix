import { motion } from "framer-motion";
import { Reveal } from "../ui/Shared";
import {
  BarChart3,
  FileText,
  Layers,
  LayoutTemplate,
  Video,
  Mic,
  Box,
  CheckCircle
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const steps = [
  { title: "Tư vấn", desc: "Phân tích nhu cầu đào tạo", icon: BarChart3 },
  { title: "Demo", desc: "Triển khai bài mẫu", icon: FileText },
  { title: "Kịch bản", desc: "Tối ưu nội dung", icon: Layers },
  { title: "Slide", desc: "Thiết kế học liệu", icon: LayoutTemplate },
  { title: "Animation", desc: "Sản xuất video", icon: Video },
  { title: "Voice AI", desc: "Lồng tiếng tự nhiên", icon: Mic },
  { title: "Quiz", desc: "Tương tác học tập", icon: Box },
  { title: "SCORM", desc: "Bàn giao & tích hợp", icon: CheckCircle }
];

export const LMSWorkflowSection = () => {
  const { t } = useTranslation('lms');
  const steps = t('workflow.steps', { returnObjects: true }) as any[];
  const icons = [BarChart3, FileText, Layers, LayoutTemplate, Video, Mic, Box, CheckCircle];

  return (
    <section className="bg-white py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              {t('workflow.title')}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-20">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative group text-center"
              >
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-brand-red text-white text-sm font-black flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6 group-hover:bg-brand-red group-hover:text-white transition">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {step.desc}
                  </p>
                </div>

                {index % 4 !== 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.15 }}
                    className="hidden md:block absolute top-1/2 -right-10 text-gray-300 text-2xl"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
