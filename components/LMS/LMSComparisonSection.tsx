import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Shared";

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
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-20">
  <Reveal>
    <h2 className="text-3xl md:text-5xl font-black uppercase">
      So Sánh Giải Pháp LMS
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
            <div>LMS SaaS</div>
            <div>Moodle</div>
            <div className="text-brand-red">Trailix LMS</div>
          </div>

          <FeatureRow label="Sở hữu vĩnh viễn" values={[false, true, true]} />
          <FeatureRow label="Không phí thuê bao" values={[false, true, true]} />
          <FeatureRow label="Bàn giao source code" values={[false, true, true]} />
          <FeatureRow label="UX/UI hiện đại" values={[true, false, true]} />
          <FeatureRow label="May đo theo yêu cầu" values={[false, true, true]} />
          <FeatureRow label="AI Chatbot đào tạo" values={[false, false, true]} />
          <FeatureRow label="Hỗ trợ kỹ thuật riêng" values={[true, false, true]} />
        </motion.div>
      </div>
    </section>
  );
};
