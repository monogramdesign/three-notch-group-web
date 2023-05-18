module.exports = {
	plugins: [require.resolve('prettier-plugin-astro')],
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	bracketSameLine: false,
	semi: false,
	overrides: [
		{
			files: ['*.astro'],
			options: {
				parser: 'astro'
			}
		}
	]
}
