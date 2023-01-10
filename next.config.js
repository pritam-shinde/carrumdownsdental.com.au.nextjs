/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      "https://pritams3.sg-host.com/"
    ]
  },
  trailingSlash: true,
}

module.exports = nextConfig
