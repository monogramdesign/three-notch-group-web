type CardData = {
	title: string
	imageUrl: string
	slug: string
}

export function extractCardData(item: any, contentType: string): CardData {
	let title = ''
	let imageUrl = ''
	let slug = ''

	if (contentType === 'pages' && 'name' in item) {
		title = item.name || ''
		imageUrl = item.thumbnailImage?.[0]?.url || ''
		slug = item.slug || ''
	} else if (contentType === 'articles' && 'title' in item) {
		title = item.title || ''
		imageUrl = item.thumbnailImage?.[0]?.url || ''
		slug = 'slug' in item ? item.slug || '' : ''
	} else if ('title' in item && 'image' in item) {
		// InfoCard
		title = item.title || ''
		imageUrl = item.image?.[0]?.url || ''
	}

	return { title, imageUrl, slug }
}
