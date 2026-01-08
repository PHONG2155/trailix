import { link } from 'fs';
import { Briefcase, Users, Megaphone, TrendingUp, Palette, Calendar, Coffee, Ruler } from 'lucide-react';

export const CLIENT_CATEGORIES = [
	{
		title: "Công nghệ & Viễn thông",
		clients: [
			{ name: "Google", logo: "/images/logo-business/google-logo-transparent.png", desc: "Tập đoàn công nghệ đa quốc gia.", cat: "Công nghệ" },
			{ name: "Viettel", logo: "/images/logo-business/viettel.png", desc: "Tập đoàn Công nghiệp - Viễn thông Quân đội.", cat: "Viễn thông" },
			{ name: "CMC Corp", logo: "/images/logo-business/CMC_logo.png", desc: "Tập đoàn công nghệ thông tin - viễn thông.", cat: "Công nghệ" },
			{ name: "Haravan", logo: "/images/logo-business/harvan.svg", desc: "Cung cấp giải pháp bán lẻ, thương mại điện tử và marketing.", cat: "SaaS" },
			{ name: "Grab", logo: "/images/logo-business/Grab_Logo.svg.png", desc: "Siêu ứng dụng (Gọi xe, giao hàng, đồ ăn...).", cat: "Tech" },
		]
	},
	{
		title: "Tài chính & Fintech",
		clients: [
			{ name: "MoMo", logo: "/images/logo-business/MoMo-Logo-New.png", desc: "Ví điện tử và thanh toán di động.", cat: "Fintech" },
			{ name: "NextPay", logo: "/images/logo-business/logo-nextpay-01.png", desc: "Giải pháp chuyển đổi số và thanh toán điện tử.", cat: "Fintech" },
		]
	},
	{
		title: "Bất động sản, Xây dựng & Vật liệu",
		clients: [
			{ name: "Becamex IDC", logo: "/images/logo-business/becamex1.png", desc: "Đầu tư và phát triển hạ tầng công nghiệp, đô thị.", cat: "BĐS" },
			{ name: "Kim Oanh Group", logo: "/images/logo-business/kimoanh.png", desc: "Phát triển bất động sản đất nền, căn hộ.", cat: "BĐS" },
			{ name: "Newtecons", logo: "/images/logo-business/Newtecons.png", desc: "Tổng thầu xây dựng.", cat: "Xây dựng" },
			{ name: "Saint-Gobain", logo: "/images/logo-business/Saint-Gobain_logo.svg.png", desc: "Sản xuất và phân phối vật liệu xây dựng.", cat: "Vật liệu" },
		]
	},
	{
		title: "Y tế, Dược phẩm & Chăm sóc sức khỏe",
		clients: [
			{ name: "Kim Dental", logo: "/images/logo-business/kimdental.jpg", desc: "Hệ thống nha khoa.", cat: "Y tế" },
			{ name: "Imexpharm", logo: "images/logo-business/ImexPharm.png", desc: "Công ty cổ phần dược phẩm.", cat: "Dược" },
			{ name: "Mitalab", logo: "/images/logo-business/mitalab.png", desc: "Cung cấp thiết bị và hóa chất xét nghiệm y tế.", cat: "Y tế" },
		]
	},
	{
		title: "Sản xuất, Hàng tiêu dùng & Nông nghiệp",
		clients: [
			{ name: "Thiên Long", logo: "/images/logo-business/Logo-Thien-Long.webp", desc: "Sản xuất văn phòng phẩm.", cat: "Sản xuất" },
			{ name: "HABECO", logo: "/images/logo-business/habeco.webp", desc: "Tổng công ty Bia - Rượu - Nước giải khát Hà Nội.", cat: "F&B" },
			{ name: "De Heus", logo: "/images/logo-business/deheus.webp", desc: "Sản xuất thức ăn chăn nuôi và dinh dưỡng động vật (Hà Lan).", cat: "Nông nghiệp" },
			{ name: "Yokogawa", logo: "/images/logo-business/Yokogawa_logo.svg.png", desc: "Giải pháp tự động hóa công nghiệp, đo lường.", cat: "Tự động hóa" },
			{ name: "ANT", logo: "/images/logo-business/ANT.jpg", desc: "Sản xuất thức ăn chăn nuôi và dinh dưỡng động vật.", cat: "Nông nghiệp" },
		]
	},
	{
		title: "Giáo dục, Đào tạo & Truyền thông",
		clients: [
			{ name: "Tập đoàn Nam Việt", logo: "/images/logo-business/namviet.png", desc: "Giáo dục đại học.", cat: "Giáo dục" },
			{ name: "AIMNEXT", logo: "/images/logo-business/AIMNEXT.jpg", desc: "Đào tạo và tư vấn quản lý nhân sự.", cat: "Đào tạo" },
			{ name: "Novaliches", logo: "/images/logo-business/novaliches.png", desc: "Đào tạo và tư vấn quản lý nhân sự.", cat: "Đào tạo" },
			{ name: "NodeX", logo: "/images/logo-business/NodeX.png", desc: "Đào tạo và tư vấn quản lý nhân sự.", cat: "Đào tạo" },
			{ name: "FBNC Vietnam", logo: "/images/logo-business/FBNC_Vietnam_Logo.png", desc: "Kênh truyền hình tin tức tài chính và kinh doanh.", cat: "Media" },
			{ name: "PG Group", logo: "/images/logo-business/Pggroup.webp", desc: "Tổ chức sự kiện", cat: "Sự kiện" },
			{ name: "Lotus Ocean", logo: "/images/logo-business/lotus-ocean.jpg", desc: "Chuyên đào tạo và cung ứng nhân lực cho Nhật Bản", cat: "Giáo dục" },
		]
	}
];

export const TRAINING_PACKAGES = [
	{
		id: "01",
		title: "NỀN TẢNG AI – PROMPT & TRỢ LÝ CÁ NHÂN",
		duration: "01 Ngày",
		target: "Toàn bộ nhân viên",
		link: "/prompt-advanced",
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
		link: "/office-ai",
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
		link: "/ai-data",
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
		link: "/ai-to-event",
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
	"/images/image-activities/0e7ddefb38f0b0aee9e1.jpg",
	"/images/image-activities/4d7bbac25cc9d4978dd8.jpg",
	"/images/image-activities/296d3bc1ddca55940cdb.jpg",
	"/images/image-activities/8870b39f5594ddca8485.jpg",
	"/images/image-activities/84019a9b7c90f4cead81.jpg",
	"/images/image-activities/b78e10e3efe867b63ef9.jpg",
	"/images/image-activities/b88f06e6f9ed71b328fc.jpg",
	"/images/image-activities/b54799ca7fc1f79faed0.jpg",
	"/images/image-activities/c8573423cb2843761a39.jpg",
	"/images/image-activities/d511e4b702bc8ae2d3ad.jpg",
	"/images/image-activities/fa1b74a692ad1af343bc.jpg"
];