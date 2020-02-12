import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioListApi = () => {
  const { allDatoCmsPortfolioList } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioList(sort: {order: ASC, fields: position}) {
        portfolioList: nodes {
          name
          logo {
            url
            alt
            title
          }
        }
      }
    }
  `)

  return allDatoCmsPortfolioList
}
