export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Kỹ thuật' | 'Sáng tạo' | 'Kinh doanh' | 'Cốt lõi';
}

export interface RoadmapStep {
  week: number;
  title: string;
  focus: string;
  topics: string[];
}

export interface Roadmap {
  role: string;
  level: string;
  steps: RoadmapStep[];
}

export enum JobRole {
  Marketing = 'Marketing / Tiếp thị',
  Sales = 'Sales / Bán hàng',
  Developer = 'Lập trình viên',
  HR = 'Nhân sự (HR)',
  Manager = 'Quản lý / Giám đốc',
  Designer = 'Thiết kế đồ họa',
  ContentCreator = 'Sáng tạo nội dung',
  DataAnalyst = 'Phân tích dữ liệu',
  Educator = 'Giáo dục / Đào tạo',
  EventPlanner = 'Tổ chức sự kiện',
  Admin = 'Hành chính / Trợ lý'
}

export enum ExperienceLevel {
  Beginner = 'Mới bắt đầu (Beginner)',
  Intermediate = 'Đã có kinh nghiệm (Intermediate)',
  Advanced = 'Chuyên gia (Advanced)'
}
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail: string;
  created_at: string;
}