import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import Differentiation from '@/components/sections/Differentiation';
import TechStackScroller from '@/components/sections/TechStackScroller';
import CTA from '@/components/sections/CTA';

const HomePage = () => (
    <>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Differentiation />
        <TechStackScroller />
        <CTA />
    </>
);

export default HomePage;
