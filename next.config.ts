import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'www.kulturportali.gov.tr',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'yozgatlisesi.meb.k12.tr',
                pathname: '**',
            }
        ],
    },
};

export default withNextIntl(nextConfig);
