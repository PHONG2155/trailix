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
  Marketing = 'marketing',
  Sales = 'sales',
  Developer = 'developer',
  HR = 'hr',
  Manager = 'manager',
  Designer = 'designer',
  ContentCreator = 'content_creator',
  DataAnalyst = 'data_analyst',
  Educator = 'educator',
  EventPlanner = 'event_planner',
  Admin = 'admin'
}

export enum ExperienceLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced'
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