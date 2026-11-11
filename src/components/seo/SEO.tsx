import { useEffect } from 'react';
import { siteConfig } from '@/data/site-config';

interface SEOProps {
    title?: string;
    description?: string;
    path?: string;
    noindex?: boolean;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonicalLink(url: string) {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', url);
}

export const SEO = ({
    title,
    description = 'Continental Grand Technologies (cgtofficial.com) engineers production-grade full-stack platforms, autonomous AI agents, custom CRM systems, and scalable enterprise software.',
    path = '/',
    noindex = false,
}: SEOProps) => {
    useEffect(() => {
        const fullTitle = title
            ? `${title} | Continental Grand Technologies`
            : 'Continental Grand Technologies (CGT) | AI Automation & Digital Engineering Studio';

        const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
        const canonicalUrl = `${siteConfig.siteUrl}${normalizedPath}`;

        document.title = fullTitle;

        setMetaTag('name', 'description', description);
        setMetaTag(
            'name',
            'robots',
            noindex
                ? 'noindex, nofollow'
                : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        );

        setMetaTag('property', 'og:title', fullTitle);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:url', canonicalUrl);

        setMetaTag('name', 'twitter:title', fullTitle);
        setMetaTag('name', 'twitter:description', description);

        setCanonicalLink(canonicalUrl);
    }, [title, description, path, noindex]);

    return null;
};

export default SEO;

