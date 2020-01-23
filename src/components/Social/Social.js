import React from 'react'
import styled from 'styled-components'
import { SocialIcon as SocialIcon_ } from 'components'
import { useStaticQuery, graphql } from 'gatsby'

export const Social = props => {
  const { allDatoCmsSocialInfo: social } = useStaticQuery(graphql`
    query {
      allDatoCmsSocialInfo(sort: { fields: position }) {
        nodes {
          url
          profileType
        }
      }
    }
  `)

  return (
    <StyledSocial {...props}>
      {social.nodes.map((data, i) => (
        <SocialIcon
          key={i}
          href={data.url}
          icon={data.profileType}
        />
      ))}
    </StyledSocial>
  )
}

const StyledSocial = styled.div`
  display: inline-flex;
`
const SocialIcon = styled(SocialIcon_)`
  margin-left: ${props => props.theme.layout.margin};
  :first-child {
    margin-left: 0;
  }
`
