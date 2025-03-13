import { executeQuery as libExecuteQuery } from '@datocms/cda-client'

export async function executeQuery(query: string, options: any) {
	return await libExecuteQuery(query, {
		...options,
		token: import.meta.env.DATOCMS_CDA_TOKEN
	})
}
