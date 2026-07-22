import { Compass, PenTool, Code2, Rocket } from 'lucide-react';
import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
    {
        number: '01',
        title: 'Discover',
        description: 'We dive deep into your business, goals, and technical landscape to understand what needs to be built and why.',
        icon: Compass,
        image: 'https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877298/cgt-robot/public/images/process/discover.jpg',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Architecture, data flows, and user experience — mapped out before a single line of code is written.',
        icon: PenTool,
        image: 'https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877297/cgt-robot/public/images/process/design.jpg',
    },
    {
        number: '03',
        title: 'Build',
        description: 'Agile sprints with transparent progress. You see working software every week, not just at the end.',
        icon: Code2,
        image: 'https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877295/cgt-robot/public/images/process/build.jpg',
    },
    {
        number: '04',
        title: 'Deploy',
        description: 'Production-grade deployment with monitoring, documentation, and ongoing support. We don\'t just launch and leave.',
        icon: Rocket,
        image: 'https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877296/cgt-robot/public/images/process/deploy.jpg',
    },
];
