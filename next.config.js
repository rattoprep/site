/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   remotePatterns: [
    {
     protocol: "https",
     hostname: 'lh3.googleusercontent.com',
    },
    {
      protocol: 'https',
      hostname: 'drive.google.com'
    },
    {
     protocol: "https",
     hostname: 'img.freepik.com',
    },
   ]
  }
 }
 
 module.exports = nextConfig
