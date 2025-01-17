/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        unoptimized: true,
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}

module.exports = nextConfig