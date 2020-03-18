import { useStaticQuery, graphql } from 'gatsby'

export const useEmployeeApi = () => {
  const { allDatoCmsEmployee } = useStaticQuery(graphql`
    query {
      allDatoCmsEmployee(sort: {fields: position, order: ASC}) {
        employee: nodes {
          profilePicture {
            fluid(maxWidth: 960) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
          firstName
          lastName
          jobTitle
          linkedin
          quote
          description
        }
      }
    }
  `)

  return allDatoCmsEmployee
}
