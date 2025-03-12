/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/portfolio", // Substitua pelo nome exato do repositório
    assetPrefix: "./",
    images: {
        unoptimized: true, // GitHub Pages não suporta otimização de imagens Next.js
    },
    trailingSlash: true,
};

module.exports = nextConfig;
