import type { NavLink, FooterSection } from '@/types';

export const desktopNavLinks: NavLink[] = [
    { label: 'Services', href: 'services' },
    { label: 'Process', href: 'process' },
    { label: 'Work', href: 'work' },
    { label: 'Partnership', href: '/partnership/syncrobiz', isRouterLink: true },
    { label: 'Blog', href: '/blog', isRouterLink: true },
];

export const mobileNavLinks: NavLink[] = [
    { label: 'Services', href: 'services' },
    { label: 'Process', href: 'process' },
    { label: 'Case Studies / Work', href: 'work' },
    { label: 'CGT x Syncrobiz Partnership', href: '/partnership/syncrobiz', isRouterLink: true },
    { label: 'Blog & Insights', href: '/blog', isRouterLink: true },
];

export const footerSections: FooterSection[] = [
    {
        title: 'Company',
        links: [
            { label: 'Services', href: 'services' },
            { label: 'Case Studies', href: 'work' },
            { label: 'Process', href: 'process' },
            { label: 'CGT x Syncrobiz', href: '/partnership/syncrobiz', isRouterLink: true },
            { label: 'Contact', href: 'contact' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'AI Automation', href: 'services' },
            { label: 'Full Stack Dev', href: 'services' },
            { label: 'CRM Systems', href: 'services' },
            { label: 'AI Bots', href: 'services' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Partnership Announcement', href: '/partnership/syncrobiz', isRouterLink: true },
            { label: 'Privacy Policy', href: '/privacy', isRouterLink: true },
            { label: 'Terms of Service', href: '/terms', isRouterLink: true },
            { label: 'Blog', href: '/blog', isRouterLink: true },
        ],
    },
];
