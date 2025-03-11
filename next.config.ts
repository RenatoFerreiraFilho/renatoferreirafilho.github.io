/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/portfolio", // Substitua pelo nome exato do repositório
    images: {
        unoptimized: true, // GitHub Pages não suporta otimização de imagens Next.js
    },
};

module.exports = nextConfig;
