/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains:['seeklogo.com', 'github.githubassets.com','cdn-icons-png.flaticon.com' ]
  }
}

module.exports = nextConfig
