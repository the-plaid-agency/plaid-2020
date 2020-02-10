import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioItemApi = () => {
  const { allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioItem(sort: {order: ASC, fields: position}) {
        itemData: nodes {
          name
          tags
          shortDescription
          fullDescription
          fullName
          featured
          logo {
            url
            alt
            title
          }
          featuredImage {
            fluid(maxWidth: 960) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
        }
      }
    }
  `)

  return allDatoCmsPortfolioItem
}
