import { Check, X } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const ChatbotComparisonSection = () => {
  const { t } = useTranslation('chatbot');
  const headers = t('comparison.headers', { returnObjects: true }) as string[];
  const rows = t('comparison.rows', { returnObjects: true }) as any[];

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            {t('comparison.title')}
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <div className="grid grid-cols-4 font-black text-center mb-6">
            <div />
            {headers.map((header, idx) => (
              <div key={idx} className={idx === 2 ? "text-brand-red" : ""}>{header}</div>
            ))}
          </div>

          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-4 py-4 border-t text-sm">
              <div className="font-medium">{row.label}</div>
              {row.values.map((v, idx) => (
                <div key={idx} className="flex justify-center">
                  {v ? (
                    <Check className="text-green-600" />
                  ) : (
                    <X className="text-red-500" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
