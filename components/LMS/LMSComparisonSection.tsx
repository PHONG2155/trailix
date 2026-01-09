import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Shared";
import { useTranslation } from 'react-i18next';

const FeatureRow = ({ label, values }: any) => (
  <div className="grid grid-cols-4 gap-4 items-center py-4 border-t text-sm font-medium">
    <div className="text-gray-700">{label}</div>
    {values.map((v: boolean, i: number) => (
      <div key={i} className="flex justify-center">
        {v ? <Check className="text-green-600" /> : <X className="text-red-500" />}
      </div>
    ))}
  </div>
);

export const LMSComparisonSection = () => {
  const { t } = useTranslation('lms');
  const headers = t('comparison.headers', { returnObjects: true }) as string[];
  const rows = t('comparison.rows', { returnObjects: true }) as any[];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black uppercase">
                {t('comparison.title')}
              </h2>
              <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
            </Reveal>
          </div>

        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 font-black text-center mb-6">
            <div />
            {headers.map((header, idx) => (
              <div key={idx} className={idx === 2 ? "text-brand-red" : ""}>{header}</div>
            ))}
          </div>

          {rows.map((row, idx) => (
            <FeatureRow key={idx} label={row.label} values={row.values} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
