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
    { label: 'Case Studies & Work', href: 'work' },
    { label: 'CGT × Syncrobiz Partnership', href: '/partnership/syncrobiz', isRouterLink: true },
    { label: 'Engineering Blog', href: '/blog', isRouterLink: true },
];

export const footerSections: FooterSection[] = [
    {
        title: 'Studio',
        links: [
            { label: 'Capabilities', href: 'services' },
            { label: 'Architecture Process', href: 'process' },
            { label: 'Selected Work', href: 'work' },
            { label: 'Start a Project', href: 'contact' },
        ],
    },
    {
        title: 'Ecosystem',
        links: [
            { label: 'CGT × Syncrobiz', href: '/partnership/syncrobiz', isRouterLink: true },
            { label: 'Engineering Insights', href: '/blog', isRouterLink: true },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy', isRouterLink: true },
            { label: 'Terms of Service', href: '/terms', isRouterLink: true },
        ],
    },
];
