import { fetchGraphQL } from '../lib/graphqlClient'
import { PageDocument, HomePageDocument, type PageQuery } from '../generated/graphql'

export const getPage = async (slug: string): Promise<PageQuery> => {
	return fetchGraphQL<PageQuery>(PageDocument, { slug })
}

export const getHomePage = async (): Promise<PageQuery> => {
	return fetchGraphQL<PageQuery>(HomePageDocument)
}
