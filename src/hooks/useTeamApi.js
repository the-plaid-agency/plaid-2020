import { useStaticQuery, graphql } from 'gatsby'

export const useTeamApi = () => {
  const { datoCmsTeam } = useStaticQuery(graphql`
    query {
      datoCmsTeam {
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
        pillarsTitleData {
          title
          subTitle
        }
        serviceTitleData {
          title
          subTitle
        }
        teamGridData {
          title
          description
          workHereTitle
          workHereDescription
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

  return datoCmsTeam
}
