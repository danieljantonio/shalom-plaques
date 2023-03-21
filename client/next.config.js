/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['placeimg.com', 'localhost', '157.230.38.3', 'shalomplaques.com'],
	},
};

module.exports = nextConfig;
