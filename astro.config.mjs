import { defineConfig, sharpImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: { applyBasestyles: false }
		})
	],
	image: {
		service: sharpImageService()
	},

	output: 'server',
	adapter: vercel({
		analytics: true,
		imageService: true,
		imagesConfig: {
			sizes: [150, 320, 640, 1280]
		}
	})
})
