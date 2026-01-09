import { motion } from "framer-motion";
import { Reveal } from "../ui/Shared";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const LMSIntroSection = () => {
  const { t } = useTranslation('lms');
  const problemItems = t('intro.problem.items', { returnObjects: true }) as string[];
  const solutionItems = t('intro.solution.items', { returnObjects: true }) as string[];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-display uppercase">
              {t('intro.title')}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
          </Reveal>
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* VẤN ĐỀ */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100 shadow-sm will-change-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-brand-red flex items-center justify-center mb-6">
              <AlertTriangle size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase">
              {t('intro.problem.title')}
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              {problemItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* GIẢI PHÁP */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-[2rem] p-10 border border-brand-red/20 shadow-xl shadow-red-100 will-change-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase text-brand-red">
              {t('intro.solution.title')}
            </h3>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              {t('intro.solution.description')}
            </p>
            <ul className="space-y-3 text-gray-600 font-medium">
              {solutionItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
