import type { Stat, NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_ROLES: string[] = [
  'Frontend Developer',
  'UI Engineer',
  'React Specialist',
  'Creative Coder',
];

export const HERO_STATS: Stat[] = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'UI Projects' },
  { value: '5+', label: 'GIS Projects' },
];
