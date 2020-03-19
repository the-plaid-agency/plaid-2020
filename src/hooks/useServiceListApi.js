import { useStaticQuery, graphql } from 'gatsby'

export const useServiceListApi = () => {
  const { allDatoCmsServiceList } = useStaticQuery(graphql`
    query {
      allDatoCmsServiceList(sort: {order: ASC, fields: position}) {
        serviceList: nodes {
          title
          serviceNameData {
            name
          }
        }
      }
    }
  `)

  return allDatoCmsServiceList
}
