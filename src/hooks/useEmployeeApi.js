import { useStaticQuery, graphql } from 'gatsby'

export const useEmployeeApi = () => {
  const { allDatoCmsEmployee } = useStaticQuery(graphql`
    query {
      allDatoCmsEmployee(sort: {fields: position, order: ASC}) {
        employees: nodes {
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
          linkedIn
          quote
          description
        }
      }
    }
  `)

  return allDatoCmsEmployee
}
