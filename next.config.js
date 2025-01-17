/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: 'https://gand4lf.github.io/',
    basePath: '/gand4lf.github.io',
};

module.exports = nextConfig;