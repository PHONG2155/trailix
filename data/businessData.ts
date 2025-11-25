
import { Briefcase, Users, Megaphone, TrendingUp, Palette, Calendar, Coffee, Ruler } from 'lucide-react';

export const CLIENT_CATEGORIES = [
  {
    title: "Công nghệ & Viễn thông",
    clients: [
      { name: "Google", logo: "https://placehold.co/200x80?text=Google", desc: "Tập đoàn công nghệ đa quốc gia.", cat: "Công nghệ" },
      { name: "Viettel", logo: "https://placehold.co/200x80?text=Viettel", desc: "Tập đoàn Công nghiệp - Viễn thông Quân đội.", cat: "Viễn thông" },
      { name: "CMC Corp", logo: "https://placehold.co/200x80?text=CMC", desc: "Tập đoàn công nghệ thông tin - viễn thông.", cat: "Công nghệ" },
      { name: "Haravan", logo: "https://placehold.co/200x80?text=Haravan", desc: "Cung cấp giải pháp bán lẻ, thương mại điện tử và marketing.", cat: "SaaS" },
      { name: "Grab", logo: "https://placehold.co/200x80?text=Grab", desc: "Siêu ứng dụng (Gọi xe, giao hàng, đồ ăn...).", cat: "Tech" },
    ]
  },
  {
    title: "Tài chính & Fintech",
    clients: [
      { name: "MoMo", logo: "https://placehold.co/200x80?text=MoMo", desc: "Ví điện tử và thanh toán di động.", cat: "Fintech" },
      { name: "NextPay", logo: "https://placehold.co/200x80?text=NextPay", desc: "Giải pháp chuyển đổi số và thanh toán điện tử.", cat: "Fintech" },
    ]
  },
  {
    title: "Bất động sản, Xây dựng & Vật liệu",
    clients: [
      { name: "Becamex IDC", logo: "https://placehold.co/200x80?text=Becamex", desc: "Đầu tư và phát triển hạ tầng công nghiệp, đô thị.", cat: "BĐS" },
      { name: "Kim Oanh Group", logo: "https://placehold.co/200x80?text=Kim+Oanh", desc: "Phát triển bất động sản đất nền, căn hộ.", cat: "BĐS" },
      { name: "Newtecons", logo: "https://placehold.co/200x80?text=Newtecons", desc: "Tổng thầu xây dựng.", cat: "Xây dựng" },
      { name: "Saint-Gobain", logo: "https://placehold.co/200x80?text=Saint-Gobain", desc: "Sản xuất và phân phối vật liệu xây dựng.", cat: "Vật liệu" },
    ]
  },
  {
    title: "Y tế, Dược phẩm & Chăm sóc sức khỏe",
    clients: [
      { name: "Kim Dental", logo: "https://placehold.co/200x80?text=Kim+Dental", desc: "Hệ thống nha khoa.", cat: "Y tế" },
      { name: "Imexpharm", logo: "https://placehold.co/200x80?text=Imexpharm", desc: "Công ty cổ phần dược phẩm.", cat: "Dược" },
      { name: "Mitalab", logo: "https://placehold.co/200x80?text=Mitalab", desc: "Cung cấp thiết bị và hóa chất xét nghiệm y tế.", cat: "Y tế" },
    ]
  },
  {
    title: "Sản xuất, Hàng tiêu dùng & Nông nghiệp",
    clients: [
      { name: "Thiên Long", logo: "https://placehold.co/200x80?text=Thien+Long", desc: "Sản xuất văn phòng phẩm.", cat: "Sản xuất" },
      { name: "HABECO", logo: "https://placehold.co/200x80?text=HABECO", desc: "Tổng công ty Bia - Rượu - Nước giải khát Hà Nội.", cat: "F&B" },
      { name: "De Heus", logo: "https://placehold.co/200x80?text=De+Heus", desc: "Sản xuất thức ăn chăn nuôi và dinh dưỡng động vật (Hà Lan).", cat: "Nông nghiệp" },
      { name: "Lotus Group", logo: "https://placehold.co/200x80?text=Lotus", desc: "Tập đoàn đa ngành (nổi bật về thực phẩm/F&B và phân phối).", cat: "F&B" },
      { name: "Yokogawa", logo: "https://placehold.co/200x80?text=Yokogawa", desc: "Giải pháp tự động hóa công nghiệp, đo lường.", cat: "Tự động hóa" },
      { name: "ANT", logo: "https://placehold.co/200x80?text=ANT", desc: "Sản xuất thức ăn chăn nuôi và dinh dưỡng động vật.", cat: "Nông nghiệp" },
    ]
  },
  {
    title: "Giáo dục, Đào tạo & Truyền thông",
    clients: [
      { name: "Tập đoàn Nam Việt", logo: "https://placehold.co/200x80?text=Nam+Viet", desc: "Giáo dục đại học.", cat: "Giáo dục" },
      { name: "AIMNEXT", logo: "https://placehold.co/200x80?text=AIMNEXT", desc: "Đào tạo và tư vấn quản lý nhân sự.", cat: "Đào tạo" },
      { name: "Novaliches", logo: "https://placehold.co/200x80?text=Novaliches", desc: "Đào tạo và tư vấn quản lý nhân sự.", cat: "Đào tạo" },
      { name: "NodeX", logo: "https://placehold.co/200x80?text=NodeX", desc: "Đào tạo và tư vấn quản lý nhân sự.", cat: "Đào tạo" },
      { name: "FBNC Vietnam", logo: "https://placehold.co/200x80?text=FBNC", desc: "Kênh truyền hình tin tức tài chính và kinh doanh.", cat: "Media" },
      { name: "PG Group", logo: "https://placehold.co/200x80?text=PG+Group", desc: "Tổ chức sự kiện", cat: "Sự kiện" },
    ]
  }
];

export const TRAINING_PACKAGES = [
  {
    id: "01",
    title: "NỀN TẢNG AI – PROMPT & TRỢ LÝ CÁ NHÂN",
    duration: "01 Ngày",
    target: "Toàn bộ nhân viên",
    modules: [
       { title: "MODULE 1: NỀN TẢNG CƠ BẢN VỀ AI", items: ["Phân loại các khái niệm AI", "Ứng dụng thực tế của Generative AI", "Lưu ý quan trọng khi sử dụng AI", "Làm quen với các công cụ AI phổ biến"] },
       { title: "MODULE 2: CÔNG THỨC VIẾT PROMPT CƠ BẢN", items: ["Hiểu về Prompt và tầm quan trọng", "Công thức RTIO Framework", "Ngôn ngữ tối ưu khi viết prompt"] },
       { title: "MODULE 3: KỸ THUẬT PROMPT NÂNG CAO", items: ["Kỹ thuật viết prompt theo vai trò", "Định dạng markdown trong prompt", "Cung cấp thông tin đầu vào", "Ràng buộc kết quả đầu ra"] },
       { title: "MODULE 4: AI ASSISTANT", items: ["Phân biệt các loại AI cá nhân", "Các kỹ thuật học máy cho AI cá nhân", "Kỹ thuật few-shot learning", "Thiết kế AI Assistant cá nhân"] }
    ]
  },
  {
    id: "02",
    title: "AI TRONG HỌC TẬP & NGHIÊN CỨU",
    duration: "0.5 Ngày",
    target: "R&D, Vận hành, Nghiên cứu",
    modules: [
       { title: "MODULE 1: DEEP RESEARCH", items: ["Tính năng DeepSearch", "Cách sử dụng DeepSearch hiệu quả", "Khi nào nên và không nên dùng"] },
       { title: "MODULE 2: PHÂN TÍCH \"TÀI LIỆU DÀI\"", items: ["Mục đích và cách dùng NotebookLLM", "Tối ưu nội dung tài liệu đầu vào", "Tạo giọng đọc tóm tắt nội dung"] },
       { title: "MODULE 3: TẠO SƠ ĐỒ, QUY TRÌNH", items: ["Hiểu về định dạng Mermaid Diagram", "Sử dụng Claude để tạo sơ đồ", "Tối ưu, chỉnh sửa sơ đồ"] },
       { title: "MODULE 4: XÂY DỰNG KNOWLEDGE BASE", items: ["Xây dựng kho tri thức cho tổ chức", "Tối ưu hóa tìm kiếm nội bộ"] }
    ]
  },
  {
    id: "03",
    title: "PHÂN TÍCH DỮ LIỆU & QUẢN LÝ DỰ ÁN",
    duration: "01 Ngày",
    target: "Toàn bộ cán bộ nhân viên",
    modules: [
       { title: "MODULE 1: PHÂN TÍCH DỮ LIỆU VỚI AI", items: ["Các loại dữ liệu có thể phân tích", "Kỹ thuật Chain-of-thought", "Phân tích dữ liệu lớn có cấu trúc"] },
       { title: "MODULE 2: TẠO BÁO CÁO & SLIDE", items: ["Xây dựng cấu trúc báo cáo logic", "Trực quan hóa dữ liệu với AI", "Sử dụng Gamma để tạo slide"] },
       { title: "MODULE 3: LẬP KẾ HOẠCH & QLDA", items: ["Thiết lập mục tiêu mô hình SMART", "Phân bổ nguồn lực mô hình RACI", "Mô hình Eisenhower trong ưu tiên việc"] },
       { title: "TỰ ĐỘNG HÓA QUY TRÌNH", items: ["Kỹ thuật prompt Self-Consistency", "Tự động hóa quy trình báo cáo"] }
    ]
  },
  {
    id: "04",
    title: "SÁNG TẠO NỘI DUNG ĐA PHƯƠNG TIỆN",
    duration: "01 Ngày",
    target: "Marketing, Design, Content",
    modules: [
       { title: "MODULE 1: GIỚI THIỆU AI & PROMPT MKT", items: ["Vai trò AI trong chiến lược Marketing", "Xu hướng AI Marketing 2025", "Cấu trúc prompt nền tảng cho MKT"] },
       { title: "MODULE 2: CONTENT QUẢNG CÁO & CHUYỂN ĐỔI", items: ["Xây dựng nội dung quảng cáo", "Xây dựng Bộ câu hook, viral", "Framework 3-Second Hook", "Ma trận P-A-S cho video 15s"] },
       { title: "MODULE 3: SÁNG TẠO ĐA PHƯƠNG TIỆN", items: ["Thiết kế hình ảnh thương hiệu", "Xây dựng \"Model AI\" cho bản thân", "Sản xuất ấn phẩm hàng loạt"] },
       { title: "MODULE 4: VIDEO AI CHUYÊN NGHIỆP", items: ["Phát triển ý tưởng video quảng cáo", "Quy trình nhân bản hóa bản thân", "Tạo video từ văn bản và hình ảnh"] }
    ]
  }
];

export const TRAINING_FIELDS = [
  { icon: Briefcase, title: "AI Quản Trị", desc: "Tối ưu ra quyết định." },
  { icon: Users, title: "AI Nhân Sự", desc: "Tuyển dụng tự động." },
  { icon: Megaphone, title: "AI Marketing", desc: "Sáng tạo Content." },
  { icon: TrendingUp, title: "AI Sales", desc: "Tăng tỷ lệ chốt." },
  { icon: Palette, title: "AI Thiết Kế", desc: "Ấn phẩm tự động." },
  { icon: Calendar, title: "AI Sự Kiện", desc: "Kịch bản & Visual." },
  { icon: Coffee, title: "AI F&B", desc: "Menu & Vận hành." },
  { icon: Ruler, title: "Thiết Kế Riêng", desc: "Giải pháp may đo." },
];

export const TESTIMONIALS = [
  {
    content: "Trước cứ cật lực với Photoshop, giờ nhờ AI mà bùm! Cả thế giới mở ra. Ý tưởng cứ thế bay thành hình ảnh.",
    course: "AI CREATIVE MASTERY",
    name: "Bích Trâm - Freelancer"
  },
  {
    content: "Tiệm bánh nhỏ của mình giờ tự tay làm được logo, banner xịn sò không tốn tiền thuê ngoài.",
    course: "AI CREATIVE MASTERY",
    name: "Châu Oanh - Chủ Micro SME"
  },
  {
    content: "Hiệu quả công việc tăng gấp đôi, tôi được thăng chức lên Quản lý Marketing chỉ sau 6 tháng.",
    course: "AI MARKETING MASTERY",
    name: "Hạnh Nguyên - Chuyên viên MKT"
  },
  {
    content: "Doanh nghiệp của tôi gặp khó khăn trong quản lý dữ liệu. Sau khi áp dụng AI, năng suất tăng 30%.",
    course: "AI MARKETING MASTERY",
    name: "Minh Trung - GĐ Vận hành"
  },
  {
    content: "AI không phải là kẻ thù mà là công cụ. Tôi đã dùng AI để phân tích dữ liệu và cá nhân hóa nội dung.",
    course: "AI MARKETING MASTERY",
    name: "Ẩn Danh - Content"
  },
  {
    content: "Trước đây tôi lo lắng về tương lai. Nhưng sau khóa học, tôi hoàn toàn thay đổi suy nghĩ.",
    course: "AI MARKETING MASTERY",
    name: "Ẩn Danh - MKT"
  }
];

export const ACTIVITY_IMAGES = [
  "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1559223607-a43c990ed91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
];
