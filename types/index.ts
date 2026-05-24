import type { IconType } from "react-icons";

export type TechCategory = "web" | "mobile" | "backend" | "ai";

export interface NavLink {
  id: string;
  label: string;
}

export interface TechItem {
  name: string;
  icon: IconType;
  category: TechCategory;
  accent: string;
}

export interface StackLogoItem {
  name: string;
  icon: IconType;
  accent: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  category: TechCategory | "cross-platform";
  url: string;
  repo: string;
}

export interface Skill {
  label: string;
  level: number;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
