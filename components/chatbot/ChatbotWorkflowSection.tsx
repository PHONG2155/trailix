import { FileText, Database, Bot, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export const ChatbotWorkflowSection = () => {
  const { t } = useTranslation('chatbot');
  const steps = t('workflow.steps', { returnObjects: true }) as any[];
  const icons = [FileText, Database, Bot, Rocket];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-100 rounded-full blur-[200px] opacity-40" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-4"
      >
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900">
            {t('workflow.title')}
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-stretch">
          {steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative flex"
              >
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-1/2 right-[-36px] -translate-y-1/2 text-gray-300 text-3xl font-bold select-none"
                  >
                    →
                  </motion.div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex flex-col items-center text-center w-full bg-white/80 backdrop-blur rounded-2xl p-8 border border-gray-200 min-h-[230px]"
                >
                  {/* Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-14 h-14 bg-brand-red text-white rounded-xl flex items-center justify-center mb-5"
                  >
                    <Icon />
                  </motion.div>

                  <h3 className="font-black text-lg mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
