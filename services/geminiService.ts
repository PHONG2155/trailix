import { Roadmap, JobRole, ExperienceLevel } from '../types';

// API Endpoint
const API_ENDPOINT = 'https://trailix.ai/api/gemini_proxy.php';

const getRandomSubset = (arr: string[], count: number): string[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
const ROLE_DATA_POOLS: Record<JobRole, { basic: string[], tools: string[], advanced: string[], project: string[] }> = {
    [JobRole.Marketing]: {
        basic: ["Tư duy AI Marketing", "Prompting cơ bản cho Marketer", "Đạo đức sử dụng AI", "Cài đặt ChatGPT/Claude", "Phân tích chân dung khách hàng", "Nghiên cứu từ khóa SEO với AI"],
        tools: ["Viết Blog chuẩn SEO tự động", "Tạo kịch bản TikTok Viral", "Thiết kế ảnh quảng cáo với Midjourney", "Tự động hóa Email Marketing", "Sử dụng Canva Magic Studio", "Tóm tắt tin tức thị trường"],
        advanced: ["Phân tích dữ liệu đối thủ", "Dự báo xu hướng Social", "Xây dựng Persona AI", "Tối ưu hóa tỷ lệ chuyển đổi (CRO)", "Chiến lược đa kênh Omni-channel", "Phân tích Sentiment khách hàng"],
        project: ["Xây dựng kế hoạch Marketing 3 tháng", "Tạo trợ lý ảo chăm sóc khách hàng", "Chiến dịch Viral Content tổng lực", "Landing Page bán hàng tự động"]
    },
    [JobRole.Sales]: {
        basic: ["Tâm lý học hành vi khách hàng", "Soạn email chào hàng (Cold Email)", "Kỹ năng đặt câu hỏi với AI", "Xử lý từ chối cơ bản", "Tư duy bán hàng hiện đại", "Tổng quan về CRM"],
        tools: ["Tự động hóa nhập liệu CRM", "Phân tích cuộc gọi bán hàng", "Tạo kịch bản Telesale tự động", "Tìm kiếm khách hàng tiềm năng (Lead Gen)", "Viết Proposal nhanh chóng", "Lên lịch hẹn tự động"],
        advanced: ["Dự báo doanh số (Forecasting)", "Đàm phán thương lượng nâng cao", "Quản trị đường ống bán hàng (Pipeline)", "Cá nhân hóa trải nghiệm khách hàng", "Chiến lược Upsell/Cross-sell", "Phân tích đối thủ cạnh tranh"],
        project: ["Xây dựng quy trình Sales tự động", "Sổ tay xử lý từ chối thông minh", "Bot hỗ trợ chốt đơn trên Messenger", "Dashboard theo dõi KPI Sales"]
    },
    [JobRole.Developer]: {
        basic: ["Cấu trúc Prompt cho Coder", "Giải thích code (Code Explainer)", "Tạo Test Case tự động", "Làm quen với GitHub Copilot", "Refactoring code cơ bản", "Viết Documentation tự động"],
        tools: ["Debug lỗi nhanh với AI", "Chuyển đổi ngôn ngữ (VD: Java sang Go)", "Tạo Regex phức tạp", "Tối ưu câu truy vấn SQL", "Scaffold dự án nhanh chóng", "Review code tự động"],
        advanced: ["Tối ưu thuật toán (Big O)", "Kiến trúc Microservices", "Bảo mật code (Security Audit)", "System Design với AI", "DevOps & CI/CD Automation", "Design Patterns nâng cao"],
        project: ["Xây dựng VS Code Extension", "Tạo CLI Tool hỗ trợ team", "Viết thư viện Open Source", "Tích hợp AI vào sản phẩm thực tế"]
    },
    [JobRole.HR]: {
        basic: ["Viết JD tuyển dụng hấp dẫn", "Sàng lọc CV tự động", "Soạn câu hỏi phỏng vấn", "Quy trình Onboarding nhân viên mới", "Luật lao động cơ bản", "Giao tiếp nội bộ hiệu quả"],
        tools: ["Tạo bài test năng lực", "Viết thư mời nhận việc/từ chối", "Lên lịch phỏng vấn tự động", "Phân tích văn hóa doanh nghiệp", "Khảo sát ý kiến nhân viên", "Quản lý hồ sơ nhân sự"],
        advanced: ["Xây dựng thương hiệu tuyển dụng", "Dự báo nhu cầu nhân sự", "Phân tích dữ liệu nghỉ việc", "Lộ trình thăng tiến (Career Path)", "Đánh giá hiệu suất (KPI/OKRs)", "Giải quyết xung đột nội bộ"],
        project: ["Xây dựng Cổng thông tin nội bộ", "Bot giải đáp thắc mắc nhân sự", "Sổ tay văn hóa công ty số hóa", "Quy trình tuyển dụng không giấy tờ"]
    },
    [JobRole.ContentCreator]: {
        basic: ["Nguyên lý Storytelling", "Tìm ý tưởng (Brainstorming) với AI", "Cấu trúc bài viết chuẩn SEO", "Phân loại định dạng nội dung", "Viết Caption mạng xã hội", "Tạo tiêu đề thu hút (Hooks)"],
        tools: ["Edit video ngắn với AI", "Chuyển văn bản thành giọng nói (TTS)", "Tạo ảnh thumbnail YouTube", "Tái sử dụng nội dung (Repurpose)", "Lên lịch đăng bài tự động", "Kiểm tra đạo văn/ngữ pháp"],
        advanced: ["Xây dựng thương hiệu cá nhân", "Phân tích chỉ số tương tác", "Chiến lược nội dung dài hạn", "Hợp tác Affiliate/Booking", "Tối ưu hóa thuật toán nền tảng", "Quản lý cộng đồng (Community)"],
        project: ["Kênh TikTok/Youtube tự động hóa", "Ebook/Khoá học cá nhân", "Blog kiếm tiền (Monetization)", "Hệ sinh thái nội dung đa kênh"]
    },
    [JobRole.Manager]: { basic: [], tools: [], advanced: [], project: [] },
    [JobRole.Designer]: { basic: [], tools: [], advanced: [], project: [] },
    [JobRole.DataAnalyst]: { basic: [], tools: [], advanced: [], project: [] },
    [JobRole.Educator]: { basic: [], tools: [], advanced: [], project: [] },
    [JobRole.EventPlanner]: { basic: [], tools: [], advanced: [], project: [] },
    [JobRole.Admin]: { basic: [], tools: [], advanced: [], project: [] },
};
const DEFAULT_POOL = {
    basic: ["Khái niệm cơ bản về AI", "Cách đặt câu lệnh hiệu quả", "Tăng năng suất làm việc", "Quản lý thời gian", "Sắp xếp thông tin", "Kỹ năng tra cứu thông minh"],
    tools: ["Sử dụng ChatGPT/Gemini", "Tạo bài thuyết trình nhanh", "Tóm tắt văn bản dài", "Viết email chuyên nghiệp", "Lập kế hoạch công việc", "Dịch thuật tài liệu"],
    advanced: ["Tư duy chiến lược", "Giải quyết vấn đề phức tạp", "Ra quyết định dựa trên dữ liệu", "Lãnh đạo đội nhóm", "Quản trị rủi ro", "Đổi mới sáng tạo"],
    project: ["Dự án cá nhân cuối khóa", "Tối ưu quy trình làm việc", "Xây dựng biểu mẫu báo cáo", "Kế hoạch phát triển bản thân"]
};
const getFallbackRoadmap = (role: JobRole, level: ExperienceLevel): Roadmap => {
   
    let data = ROLE_DATA_POOLS[role];
    const isEmpty = !data || data.basic.length === 0;
    if (isEmpty) data = DEFAULT_POOL;

    
    const topicCount = level === ExperienceLevel.Advanced ? 5 : 4;

    const week1Topics = getRandomSubset(data.basic.length ? data.basic : DEFAULT_POOL.basic, topicCount);
    const week2Topics = getRandomSubset(data.tools.length ? data.tools : DEFAULT_POOL.tools, topicCount);
    const week3Topics = getRandomSubset(data.advanced.length ? data.advanced : DEFAULT_POOL.advanced, topicCount);
    const week4Topics = getRandomSubset(data.project.length ? data.project : DEFAULT_POOL.project, 3); // Tuần cuối lấy 3 ý thôi

    const levelPrefix = level === ExperienceLevel.Beginner ? "Nhập môn" 
                      : level === ExperienceLevel.Intermediate ? "Ứng dụng" 
                      : "Chuyên sâu";

    return {
        role: role,
        level: level,
        steps: [
            {
                week: 1,
                title: `${levelPrefix}: Nền tảng tư duy & Công cụ`,
                focus: `Xây dựng nền móng vững chắc về AI cho vị trí ${role}.`,
                topics: week1Topics
            },
            {
                week: 2,
                title: "Tự động hóa & Tăng tốc độ",
                focus: "Làm chủ các công cụ để loại bỏ tác vụ lặp lại nhàm chán.",
                topics: week2Topics
            },
            {
                week: 3,
                title: "Phân tích & Chiến lược nâng cao",
                focus: "Sử dụng dữ liệu và AI để giải quyết các bài toán khó.",
                topics: week3Topics
            },
            {
                week: 4,
                title: "Dự án thực tế & Tổng kết",
                focus: "Áp dụng toàn bộ kiến thức vào sản phẩm hoặc quy trình thực tế.",
                topics: week4Topics
            }
        ]
    };
};

// --- MAIN FUNCTION ---
export const generateLearningRoadmap = async (role: JobRole, level: ExperienceLevel): Promise<Roadmap> => {
    try {
        console.log(`🚀 Đang gửi yêu cầu tới: ${API_ENDPOINT}`);

        // Thêm timeout để không đợi quá lâu (ví dụ 8 giây)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role, level }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log("🔍 Dữ liệu thực tế nhận được từ Server:", data);

        if (data && data.steps && Array.isArray(data.steps) && data.steps.length > 0) {
            console.log("✅ Nhận dữ liệu thành công từ Gemini");
            return {
                role: data.role || role,
                level: data.level || level,
                steps: data.steps
            };
        } else {
            throw new Error("Dữ liệu trả về thiếu trường 'steps' hoặc sai định dạng.");
        }

    } catch (err) {
        console.error("⚠️ Lỗi gọi API (hoặc Timeout), đang kích hoạt dữ liệu dự phòng Random.", err);
        
        // Gọi hàm tạo dữ liệu dự phòng đã được nâng cấp
        return getFallbackRoadmap(role, level);
    }
};