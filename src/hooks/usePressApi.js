import { useStaticQuery, graphql } from 'gatsby'

export const usePressApi = () => {
  const { datoCmsPress } = useStaticQuery(graphql`
    query {
      datoCmsPress {
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

  return datoCmsPress
}
