import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiGo,
  SiTailwindcss, SiSupabase, SiPostgresql, SiMongodb, SiRedis,
  SiFastapi, SiNodedotjs, SiPython, SiVercel, SiDocker,
  SiGithub, SiStripe, SiFramer
} from 'react-icons/si';
import type { TechItem } from '@/types';

export const techStackRow1: TechItem[] = [
  { name: 'Python', tag: 'Backend & Data', icon: SiPython, color: '#3776AB' },
  { name: 'TypeScript', tag: 'Type Safety', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', tag: 'UI Engine', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', tag: 'Full-Stack Web', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'PostgreSQL', tag: 'Relational DB', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Node.js', tag: 'API Runtime', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Docker', tag: 'Containers', icon: SiDocker, color: '#2496ED' },
  { name: 'Tailwind CSS', tag: 'Design System', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Go (Golang)', tag: 'Concurrency', icon: SiGo, color: '#00ADD8' },
];

export const techStackRow2: TechItem[] = [
  { name: 'Supabase', tag: 'Real-Time DB', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'MongoDB', tag: 'NoSQL Store', icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', tag: 'In-Memory Cache', icon: SiRedis, color: '#DC382D' },
  { name: 'FastAPI', tag: 'Async APIs', icon: SiFastapi, color: '#009688' },
  { name: 'JavaScript', tag: 'Web Core', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Vercel', tag: 'Edge Cloud', icon: SiVercel, color: '#ffffff' },
  { name: 'GitHub CI/CD', tag: 'DevOps', icon: SiGithub, color: '#ffffff' },
  { name: 'Stripe', tag: 'Payments', icon: SiStripe, color: '#008CDD' },
  { name: 'Framer Motion', tag: 'Animations', icon: SiFramer, color: '#0055FF' },
];
