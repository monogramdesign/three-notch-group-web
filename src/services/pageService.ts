import { fetchGraphQL } from '../lib/graphqlClient'
import { PageDocument, type PageQuery } from '../generated/graphql'

export const getPage = async (): Promise<PageQuery> => {
	return fetchGraphQL<PageQuery>(PageDocument)
}
