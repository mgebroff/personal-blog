/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["tailwindui.com", "images.unsplash.com", "eincode.com", "thrangra.sirv.com", "media-exp1.licdn.com", "partners.adobe.com", "localhost:3001"]
  }
}

module.exports = nextConfig
