import { defineConfig, sharpImageService } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},
	image: {
		service: sharpImageService(),
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.datocms-assets.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'rstr.in',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'cdn.raster.app',
				pathname: '/**'
			}
		]
	},
	output: 'server',
	adapter: vercel({
		analytics: true,
		imageService: true,
		imagesConfig: {
			sizes: [150, 320, 640, 1280],
			domains: ['www.datocms-assets.com', 'images.unsplash.com', 'rstr.in', 'cdn.raster.app']
		}
	})
})
