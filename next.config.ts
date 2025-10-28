/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Esto reemplaza el antiguo 'next export'
  images: {
    unoptimized: true, // 👈 Necesario si usas imágenes locales
  },
};

module.exports = nextConfig;
