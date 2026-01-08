import { Clock, Bot } from "lucide-react";

export const ChatbotIntroSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Vấn Đề & Giải Pháp
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
              Khách hàng chờ đợi – Doanh thu bị bỏ lỡ
            </h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>• Khách nhắn tin ngoài giờ làm việc</li>
              <li>• CSKH phản hồi chậm do quá tải</li>
              <li>• Mất khách vì không tư vấn kịp thời</li>
              <li>• Nhân sự lặp lại cùng câu hỏi mỗi ngày</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-2xl p-10 border border-brand-red/30 shadow-xl shadow-red-100">
            <div className="w-12 h-12 bg-brand-red text-white rounded-xl flex items-center justify-center mb-6">
              <Bot />
            </div>
            <h3 className="text-xl font-black mb-4 text-brand-red">
              Giải pháp AI Chatbot Trailix
            </h3>
            <p className="text-gray-700 font-medium mb-4">
              AI Chatbot giúp doanh nghiệp tự động hóa tư vấn khách hàng 24/7,
              trả lời chính xác dựa trên dữ liệu nội bộ.
            </p>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>• Phản hồi ngay tức thì</li>
              <li>• Giảm tải nhân sự CSKH</li>
              <li>• Tăng tỷ lệ chuyển đổi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
