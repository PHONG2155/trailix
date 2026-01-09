import { Clock, Bot } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const ChatbotIntroSection = () => {
  const { t } = useTranslation('chatbot');
  const problemItems = t('intro.problem.items', { returnObjects: true }) as string[];
  const solutionItems = t('intro.solution.items', { returnObjects: true }) as string[];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            {t('intro.title')}
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Problem */}
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
            <div className="w-12 h-12 bg-red-100 text-brand-red rounded-xl flex items-center justify-center mb-6">
              <Clock />
            </div>
            <h3 className="text-xl font-black mb-4">
              {t('intro.problem.title')}
            </h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              {problemItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-2xl p-10 border border-brand-red/30 shadow-xl shadow-red-100">
            <div className="w-12 h-12 bg-brand-red text-white rounded-xl flex items-center justify-center mb-6">
              <Bot />
            </div>
            <h3 className="text-xl font-black mb-4 text-brand-red">
              {t('intro.solution.title')}
            </h3>
            <p className="text-gray-700 font-medium mb-4">
              {t('intro.solution.description')}
            </p>
            <ul className="space-y-3 text-gray-600 font-medium">
              {solutionItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
