import { Check, X } from "lucide-react";

export const ChatbotComparisonSection = () => {
  const rows = [
    { label: "Phản hồi 24/7", values: [false, true, true] },
    { label: "Hiểu ngữ cảnh hội thoại", values: [false, false, true] },
    { label: "Huấn luyện theo dữ liệu DN", values: [false, false, true] },
    { label: "Tăng doanh thu tự động", values: [false, false, true] },
    { label: "Không cần nhân sự trực chat", values: [false, true, true] },
  ];

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            So Sánh Giải Pháp
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <div className="grid grid-cols-4 font-black text-center mb-6">
            <div />
            <div>Nhân sự CSKH</div>
            <div>Rule Bot</div>
            <div className="text-brand-red">Trailix AI</div>
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
