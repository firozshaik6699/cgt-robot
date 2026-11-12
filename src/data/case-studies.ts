import type { CaseStudyItem } from '@/types';

import fleetMasterImg from '@/assets/fleet-master-msmt.jpg';
import muhasibImg from '@/assets/muhasib.jpg';
import nexoraImg from '@/assets/nexora.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import toonhubImg from '@/assets/toonhub.jpg';

export const caseStudies: CaseStudyItem[] = [
    {
        id: 1,
        title: 'Fleet Master MSMT',
        description: 'Enterprise fleet management & real-time telemetry platform',
        imageSrc: fleetMasterImg,
        href: 'https://fleet-master-msmt.vercel.app/',
        tag: 'Enterprise SaaS',
    },
    {
        id: 2,
        title: 'Muhasib',
        description: 'AI-powered accounting & automated invoice processing',
        imageSrc: muhasibImg,
        href: 'https://muhasib-fawn.vercel.app/landing.html',
        tag: 'AI Automation',
    },
    {
        id: 3,
        title: 'Nexora',
        description: 'High-concurrency interactive gaming ecosystem',
        imageSrc: nexoraImg,
        href: 'https://nexora-six-green-83.vercel.app/',
        tag: 'Interactive Platform',
    },
    {
        id: 4,
        title: 'Pizza Ordering Platform',
        description: 'Full-stack ordering & real-time delivery dispatch system',
        imageSrc: pizzaImg,
        href: 'https://pizza-nu-navy.vercel.app/',
        tag: 'Full-Stack App',
    },
    {
        id: 5,
        title: 'ToonHub',
        description: 'Digital content marketplace & media streaming architecture',
        imageSrc: toonhubImg,
        href: 'https://toonhub-weld.vercel.app/',
        tag: 'Media Platform',
    },
];
