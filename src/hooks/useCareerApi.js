import { useStaticQuery, graphql } from 'gatsby'

export const useCareerApis = () => {
  const { datoCmsCareer } = useStaticQuery(graphql`
    query {
      datoCmsCareer {
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

  return datoCmsCareer
}
