import React from 'react'
import styled from 'styled-components'
import { SocialIcon as SocialIcon_ } from 'components'
import { useStaticQuery, graphql } from 'gatsby'

export const Social = props => {
  const { social } = useStaticQuery(graphql`
    query {
      social: allDatoCmsSocialInfo(sort: { fields: position }) {
        nodes {
          slug
          url
          profileType
        }
      }
    }
  `)

  return (
    <StyledSocial {...props}>
      {social.nodes.map((data, i) => (
        <SocialIcon key={i} icon={data.profileType} href={data.url} target="_blank" />
      ))}
    </StyledSocial>
  )
}

const StyledSocial = styled.div`
  display: inline-flex;
`
const SocialIcon = styled(SocialIcon_)`
  color: ${props => props.theme.colors.white};
  font-size: 26px;
  margin-left: ${props => props.theme.layout.margin};
  transition: ${props => props.theme.transitions.default};

  :first-child {
    margin-left: 0;
  }
  :hover {
    opacity: 0.75;
  }
`
