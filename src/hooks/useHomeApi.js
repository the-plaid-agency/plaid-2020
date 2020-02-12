import { useStaticQuery, graphql } from 'gatsby'

export const useHomeApi = () => {
  const { datoCmsHome } = useStaticQuery(graphql`
    query {
      datoCmsHome {
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
        introData {
          title
          subTitle
          text
          buttonText
          buttonUrl
        }
        partnerData {
          title
          subTitle
          text
          buttonText
          buttonUrl
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

  return datoCmsHome
}
