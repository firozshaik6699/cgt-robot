import { Palette, Code, Search, BrainCircuit, Database, MessageSquare, Cloud, LineChart } from "lucide-react";
import { ServiceCarousel, type Service } from "@/components/ui/services-card";
import Reveal from "@/components/ui/Reveal";

const services: Service[] = [
  {
    number: "001",
    title: "Branding",
    description: "We craft logos and brand systems that leave a lasting impression.",
    icon: Palette,
    gradient: "from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877301/cgt-robot/public/images/service_branding.jpg",
  },
  {
    number: "002",
    title: "Development",
    description: "Beautiful and functional websites built with purpose and precision.",
    icon: Code,
    gradient: "from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877305/cgt-robot/public/images/service_development.jpg",
  },
  {
    number: "003",
    title: "SEO Optimization",
    description: "Get found faster with tailored SEO strategies backed by real data.",
    icon: Search,
    gradient: "from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877306/cgt-robot/public/images/service_seo.jpg",
  },
  {
    number: "004",
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces designed for seamless user experiences.",
    icon: Palette,
    gradient: "from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877307/cgt-robot/public/images/service_uiux.jpg",
  },
  {
    number: "005",
    title: "AI Automation",
    description: "Custom AI agents, workflow automation, and intelligent systems that eliminate manual processes.",
    icon: BrainCircuit,
    gradient: "from-orange-100 to-orange-200 dark:from-[#F4751E]/50 dark:to-[#F4751E]/30",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877299/cgt-robot/public/images/service_ai_automation.jpg",
  },
  {
    number: "006",
    title: "CRM & Business Systems",
    description: "End-to-end CRM solutions, ERP integrations, and custom business tools that streamline your operations.",
    icon: Database,
    gradient: "from-amber-100 to-amber-200 dark:from-[#A16207]/50 dark:to-[#A16207]/30",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877303/cgt-robot/public/images/service_crm.jpg",
  },
  {
    number: "007",
    title: "WhatsApp & AI Bots",
    description: "Conversational AI bots for WhatsApp, web, and messaging platforms driving engagement and support.",
    icon: MessageSquare,
    gradient: "from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/30",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877308/cgt-robot/public/images/service_whatsapp_bots.jpg",
  },
  {
    number: "008",
    title: "Cloud Infrastructure",
    description: "Secure, scalable cloud architectures and DevOps solutions ensuring high availability and performance.",
    icon: Cloud,
    gradient: "from-slate-100 to-slate-200 dark:from-slate-800/50 dark:to-slate-700/30",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877302/cgt-robot/public/images/service_cloud.jpg",
  },
  {
    number: "009",
    title: "Data Analytics",
    description: "Transforming raw data into actionable business intelligence through advanced analytics.",
    icon: LineChart,
    gradient: "from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/30",
    image: "https://res.cloudinary.com/uz4o66yy/image/upload/f_auto,q_auto/v1783877304/cgt-robot/public/images/service_data_analytics.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(10,6,3,0.82)_16%,rgba(6,5,4,0.95)_58%,rgba(0,0,0,0)_100%)]">
      <div className="absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-[#F4751E]/25 to-transparent" />
      <div className="absolute left-[-12%] top-24 h-72 w-72 rounded-full bg-[#F4751E]/[0.08] blur-[80px]" style={{ contain: 'strict' }} />
      <div className="absolute right-[-10%] bottom-10 h-80 w-80 rounded-full bg-[#A16207]/[0.08] blur-[90px]" style={{ contain: 'strict' }} />

      <div className="container-main relative z-10">
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
              Engineering solutions<br />
              <span className="text-white/45">that move the needle.</span>
            </h2>
            <p className="text-base text-white/55 leading-relaxed max-w-lg font-light">
              We don't do cookie-cutter. Every system we build is purpose-engineered for your business outcomes.
            </p>
          </div>
        </Reveal>

        <ServiceCarousel services={services} />
      </div>

      <div className="section-divider mt-16 md:mt-20" />
    </section>
  );
};

export default Services;
