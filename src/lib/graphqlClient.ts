import { request, GraphQLClient } from 'graphql-request'

const DATO_CMS_URL = 'https://graphql.datocms.com'
const DATOCMS_CDA_TOKEN = import.meta.env.DATOCMS_CDA_TOKEN

export const graphqlClient = new GraphQLClient(DATO_CMS_URL, {
	headers: {
		Authorization: `Bearer ${DATOCMS_CDA_TOKEN}`
	}
})

// Helper function for simple requests
export const fetchGraphQL = async <T>(query: string, variables = {}): Promise<T> => {
	return request<T>(DATO_CMS_URL, query, variables, {
		Authorization: `Bearer ${DATOCMS_CDA_TOKEN}`
	})
}
