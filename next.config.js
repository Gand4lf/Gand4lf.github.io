/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '', // If your site is at username.github.io, leave empty
    // basePath: '/repo-name', // If your site is at username.github.io/repo-name
    images: {
        unoptimized: true,
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}

module.exports = nextConfig