import { useStaticQuery, graphql } from 'gatsby'

export const usePillarListApi = () => {
  const { allDatoCmsPillarList } = useStaticQuery(graphql`
    query {
      allDatoCmsPillarList {
        pillarList: nodes {
          letter
          title
        }
      }
    }
  `)

  return allDatoCmsPillarList
}
