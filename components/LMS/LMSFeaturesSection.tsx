import { motion } from "framer-motion";
import { Reveal } from "../ui/Shared";
import {
  Video,
  ClipboardCheck,
  Bot,
  BarChart3,
  ShoppingCart,
  ShieldCheck
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const features = [
  {
    title: "Quản lý khóa học đa dạng",
    desc: "Hệ thống hỗ trợ đầy đủ các định dạng học liệu như Video, Slide, PDF và chuẩn SCORM, giúp doanh nghiệp dễ dàng tổ chức, quản lý và cập nhật nội dung đào tạo tập trung trên một nền tảng duy nhất.",
    icon: Video
  },
  {
    title: "Kiểm tra & Đánh giá",
    desc: "Cho phép tạo bài kiểm tra trắc nghiệm và tự luận với hệ thống chấm điểm tự động, giúp đánh giá chính xác năng lực học viên và tiết kiệm thời gian cho giảng viên.",
    icon: ClipboardCheck
  },
  {
    title: "AI ChatBOT Độc quyền",
    desc: "Trợ lý ảo thông minh hỗ trợ học viên tra cứu thông tin khóa học, nội dung bài giảng 24/7, đồng thời giảm tải khối lượng công việc hỗ trợ cho giảng viên và bộ phận đào tạo.",
    icon: Bot,
    highlight: true
  },
  {
    title: "Báo cáo chi tiết",
    desc: "Cung cấp dashboard trực quan giúp theo dõi tiến độ học tập, kết quả đào tạo của từng cá nhân và phòng ban, hỗ trợ nhà quản lý đưa ra quyết định kịp thời.",
    icon: BarChart3
  },
  {
    title: "Tích hợp E-commerce",
    desc: "Hỗ trợ bán khóa học và thanh toán online, phù hợp cho các đơn vị kinh doanh giáo dục, trung tâm đào tạo hoặc cá nhân phát triển khóa học thương mại.",
    icon: ShoppingCart
  },
  {
    title: "Bảo mật & Backup",
    desc: "Hệ thống vận hành trên hạ tầng Cloud Server hiện đại, đảm bảo an toàn dữ liệu với cơ chế sao lưu định kỳ và các tiêu chuẩn bảo mật cao.",
    icon: ShieldCheck
  }
];

export const LMSFeaturesSection = () => {
  const { t } = useTranslation('lms');
  const features = t('features.items', { returnObjects: true }) as any[];
  const icons = [Video, ClipboardCheck, Bot, BarChart3, ShoppingCart, ShieldCheck];

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              {t('features.title')}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 160 }}
                className={`bg-white rounded-2xl p-10 border
                  ${item.highlight
                    ? "border-brand-red shadow-xl shadow-red-100"
                    : "border-gray-200 hover:shadow-lg"}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                    ${item.highlight
                      ? "bg-brand-red text-white"
                      : "bg-gray-50 text-gray-600"}`}
                >
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                <h3
                  className={`text-lg font-black mb-4
                    ${item.highlight ? "text-brand-red" : "text-gray-900"}`}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  {item.desc}
                </p>

                {item.highlight && (
                  <div className="mt-6 inline-block text-xs font-bold uppercase tracking-wide text-brand-red bg-red-50 px-4 py-1.5 rounded-full">
                    {t('features.exclusiveBadge')}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
