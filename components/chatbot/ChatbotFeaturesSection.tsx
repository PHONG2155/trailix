import { MessageSquare, Bot, Database, BarChart3 } from "lucide-react";

export const ChatbotFeaturesSection = () => {
  const features = [
    {
      title: "Tư vấn khách hàng 24/7",
      desc: "Chatbot hoạt động liên tục, không bỏ sót khách hàng.",
      icon: MessageSquare,
    },
    {
      title: "AI hiểu ngữ cảnh",
      desc: "Phân tích ý định, trả lời chính xác như nhân sự thật.",
      icon: Bot,
      highlight: true,
    },
    {
      title: "Huấn luyện theo dữ liệu doanh nghiệp",
      desc: "Học từ website, tài liệu, FAQ nội bộ.",
      icon: Database,
    },
    {
      title: "Báo cáo & tối ưu chuyển đổi",
      desc: "Theo dõi hiệu quả tư vấn và hành vi khách hàng.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Tính Năng Nổi Bật
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition
                ${
                  f.highlight
                    ? "bg-white border-brand-red shadow-xl shadow-red-100"
                    : "bg-gray-50 border-gray-200 hover:shadow-lg"
                }`}
              >
                <div className="w-12 h-12 bg-brand-red text-white rounded-xl flex items-center justify-center mb-6">
                  <Icon />
                </div>
                <h3 className="font-black mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
