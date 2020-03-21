import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioApi = () => {
  const { datoCmsPortfolio } = useStaticQuery(graphql`
    query {
      datoCmsPortfolio {
        seo {
          title
          description
        }
        bannerData {
          angle
          height
          textTop
          textBottom
          buttonText
          buttonUrl
          buttonVariant
          image {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
        }
        portfolioIntroData {
          introTitle
          text
        }
        outroData {
          buttonText
          buttonUrl
          text
          textBottom
          textTop
        }
      }
    }
  `)

  return datoCmsPortfolio
}
