/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: './',
    basePath: '/<your-repo-name>',
};

module.exports = nextConfig;