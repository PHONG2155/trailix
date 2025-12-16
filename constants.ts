import { Course } from './types';
import { 
  Terminal, BarChart3, Bot, Trello, Presentation, PenTool, 
  MessageSquare, GitGraph, Search, GraduationCap, Palette, 
  Video, Image, Lightbulb, MessageCircle
} from 'lucide-react';

export const COURSES: Course[] = [
  {
    id: 'prompt-eng',
    title: 'Học viết Prompt',
    description: 'Kỹ thuật ra lệnh cho AI, tối ưu hóa câu lệnh để nhận kết quả chính xác nhất cho từng tác vụ.',
    icon: 'Terminal',
    category: 'Cốt lõi'
  },
  {
    id: 'data-analysis',
    title: 'Phân tích dữ liệu',
    description: 'Sử dụng AI để đọc hiểu số liệu, làm sạch dữ liệu và tìm ra insight quan trọng từ báo cáo.',
    icon: 'BarChart3',
    category: 'Kỹ thuật'
  },
  {
    id: 'ai-assistants',
    title: 'Tạo trợ lý AI',
    description: 'Xây dựng các trợ lý ảo cá nhân hóa (GPTs) để tự động hóa quy trình làm việc lặp lại.',
    icon: 'Bot',
    category: 'Kỹ thuật'
  },
  {
    id: 'planning',
    title: 'Lập kế hoạch',
    description: 'Ứng dụng AI để lên chiến lược, roadmap dự án và quản lý thời gian hiệu quả.',
    icon: 'Trello',
    category: 'Kinh doanh'
  },
  {
    id: 'slides',
    title: 'Tạo Slide thuyết trình',
    description: 'Tự động hóa việc tạo nội dung và bố cục slide chuyên nghiệp trong vài phút.',
    icon: 'Presentation',
    category: 'Kinh doanh'
  },
  {
    id: 'content-creation',
    title: 'Tạo Content',
    description: 'Sáng tạo nội dung đa kênh, từ bài đăng Facebook đến bài viết SEO chuyên sâu.',
    icon: 'PenTool',
    category: 'Sáng tạo'
  },
  {
    id: 'sales-scripts',
    title: 'Kịch bản tư vấn bán hàng',
    description: 'Xây dựng kịch bản chốt sale, xử lý từ chối và chăm sóc khách hàng tự động.',
    icon: 'MessageSquare',
    category: 'Kinh doanh'
  },
  {
    id: 'diagrams',
    title: 'Tạo sơ đồ',
    description: 'Biến ý tưởng phức tạp thành sơ đồ tư duy, flowchart hoặc biểu đồ trực quan.',
    icon: 'GitGraph',
    category: 'Kỹ thuật'
  },
  {
    id: 'deepsearch',
    title: 'Nghiên cứu DeepSearch',
    description: 'Kỹ năng khai thác thông tin chuyên sâu, tổng hợp kiến thức từ hàng ngàn nguồn.',
    icon: 'Search',
    category: 'Cốt lõi'
  },
  {
    id: 'learning-ai',
    title: 'Học tập với AI',
    description: 'Biến AI thành gia sư riêng 1:1 để học bất kỳ kỹ năng mới nào với tốc độ gấp 5 lần.',
    icon: 'GraduationCap',
    category: 'Cốt lõi'
  },
  {
    id: 'design-uiux',
    title: 'Thiết kế',
    description: 'Hỗ trợ lên ý tưởng thiết kế, bố cục và màu sắc cho các ấn phẩm truyền thông.',
    icon: 'Palette',
    category: 'Sáng tạo'
  },
  {
    id: 'video-creation',
    title: 'Sáng tạo Video',
    description: 'Viết kịch bản, tạo nhân vật ảo và dựng video tự động với công nghệ AI.',
    icon: 'Video',
    category: 'Sáng tạo'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Tạo ra các tài nguyên đồ họa, vector và chỉnh sửa ảnh chất lượng cao.',
    icon: 'Image',
    category: 'Sáng tạo'
  },
  {
    id: 'event-creativity',
    title: 'Sáng tạo trong sự kiện',
    description: 'Lên concept, kịch bản MC và các hoạt động tương tác độc đáo cho sự kiện.',
    icon: 'Lightbulb',
    category: 'Sáng tạo'
  },
  {
    id: 'chatbots',
    title: 'Chatbot doanh nghiệp',
    description: 'Triển khai hệ thống CSKH tự động 24/7 cho doanh nghiệp.',
    icon: 'MessageCircle',
    category: 'Kỹ thuật'
  }
];

export const ICON_MAP: Record<string, any> = {
  Terminal, BarChart3, Bot, Trello, Presentation, PenTool, 
  MessageSquare, GitGraph, Search, GraduationCap, Palette, 
  Video, Image, Lightbulb, MessageCircle
};