import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

export const TestMe = () => {
  const { social } = useStaticQuery(graphql`
    query {
      social: allDatoCmsSocialInfo(sort: { fields: position }) {
        nodes {
          slug
          url
          profileType
          icon
        }
      }
    }
  `)

  return (
    <StyledTestMe>
      <a href="https://www.google.com/">Google</a>
    </StyledTestMe>
  )
}

const StyledTestMe = styled.div``
