/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['placeimg.com', 'localhost'],
	},
};

module.exports = nextConfig;
