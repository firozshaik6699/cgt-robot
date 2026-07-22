import type React from 'react';

// ─── Service ───────────────────────────────────────────────
export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  image?: string;
}

// ─── Process Step ──────────────────────────────────────────
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

// ─── Case Study / Card Stack Item ──────────────────────────
export interface CaseStudyItem {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
}

// ─── Testimonial ───────────────────────────────────────────
export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
  industry: string;
}

// ─── Tech Stack ────────────────────────────────────────────
export interface TechItem {
  name: string;
  tag: string;
  icon: any;
  color: string;
}

// ─── Audience ──────────────────────────────────────────────
export interface AudienceItem {
  title: string;
  description: string;
}

// ─── Navigation ────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  /** If true, renders as a React Router <Link> instead of <a> */
  isRouterLink?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

// ─── Site Config ───────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
  /** SVG path data for the icon */
  svgPath: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  whatsappUrl: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  socials: SocialLink[];
}
