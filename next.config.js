/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}

module.exports = nextConfig