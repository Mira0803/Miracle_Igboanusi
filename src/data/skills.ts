import type { Skill } from '../types';

export const SKILLS: Skill[] = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML5 / CSS3', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'SCSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'REST APIs', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Git / GitHub', category: 'Tools' },
    { name: 'Figma', category: 'Tools' },
    { name: 'Wireframes', category: 'Tools' },
    { name: 'QGIS', category: 'GIS' },
    { name: 'ArcGIS', category: 'GIS' },
    { name: 'IP2WIN', category: 'GIS' },
];

export const SKILL_NAMES: string[] = SKILLS.map(s => s.name);