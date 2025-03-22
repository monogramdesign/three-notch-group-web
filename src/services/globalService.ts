import { fetchGraphQL } from '../lib/graphqlClient'
import { GlobalNavFooterDocument, type GlobalNavFooterQuery } from '../generated/graphql'

export const getGlobalNavFooter = async (): Promise<GlobalNavFooterQuery> => {
	return fetchGraphQL<GlobalNavFooterQuery>(GlobalNavFooterDocument)
}
