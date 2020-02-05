import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioItemApi = () => {
  const { allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioItem {
        itemData: nodes {
          name
          tags
          shortDescription
          fullDescription
          fullName
          featured
          logo {
            alt
            title
          }
          featuredImage {
            alt
            title
          }
        }
      }
    }
  `)

  return allDatoCmsPortfolioItem
}
