import { fetchGraphQL } from '../lib/graphqlClient'
import { AllCategoriesDocument, type AllCategoriesQuery } from '../generated/graphql'

export const getAllCategories = async (): Promise<AllCategoriesQuery> => {
	return fetchGraphQL<AllCategoriesQuery>(AllCategoriesDocument)
}
