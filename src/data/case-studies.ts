import type { CaseStudyItem } from '@/types';

import fleetMasterImg from '@/assets/fleet-master-msmt.png';
import muhasibImg from '@/assets/muhasib.png';
import nexoraImg from '@/assets/nexora.png';
import pizzaImg from '@/assets/pizza.png';
import toonhubImg from '@/assets/toonhub.png';

export const caseStudies: CaseStudyItem[] = [
    {
        id: 1,
        title: 'Fleet Master MSMT',
        description: 'Enterprise fleet management & real-time tracking platform',
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
        description: 'Immersive gaming ecosystem & interactive demo platform',
        imageSrc: nexoraImg,
        href: 'https://nexora-six-green-83.vercel.app/',
        tag: 'Web3 & Gaming',
    },
    {
        id: 4,
        title: 'Pizza Ordering Platform',
        description: 'Full-stack food ordering & instant delivery management system',
        imageSrc: pizzaImg,
        href: 'https://pizza-nu-navy.vercel.app/',
        tag: 'Full-Stack App',
    },
    {
        id: 5,
        title: 'ToonHub',
        description: 'Creative content marketplace & animation streaming platform',
        imageSrc: toonhubImg,
        href: 'https://toonhub-weld.vercel.app/',
        tag: 'Media Platform',
    },
];
