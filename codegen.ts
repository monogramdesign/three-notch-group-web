import { type CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			'https://graphql.datocms.com': {
				headers: {
					Authorization: `Bearer ${process.env.DATOCMS_CDA_TOKEN}`
				}
			}
		}
	],
	documents: 'src/queries/**/*.graphql',
	generates: {
		'src/generated/graphql.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
			config: {
				namingConvention: 'change-case#pascalCase'
			}
		}
	}
}

export default config
