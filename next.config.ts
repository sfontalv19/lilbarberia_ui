/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,      // Buenas prácticas de desarrollo      //  Necesario para despliegue en Amplify o Docker
  images: {
    domains: [],              // Puedes agregar dominios si usas imágenes externas
  }
};

export default nextConfig;
