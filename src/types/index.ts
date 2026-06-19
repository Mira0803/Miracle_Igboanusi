import type { IconType } from 'react-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  color?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface NavBarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  isDark: boolean;
}

export interface ThemeProps {
  isDark: boolean;
}