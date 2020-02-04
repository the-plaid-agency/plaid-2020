import { useStaticQuery, graphql } from 'gatsby'

export const useContactApi = () => {
  const { datoCmsContact } = useStaticQuery(graphql`
    query {
      datoCmsContact {
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

  return datoCmsContact
}
