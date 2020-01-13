import React from 'react'
import styled from 'styled-components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const NavigationLink = ({ to = "/", children }) => (
  <AniLink cover direction="left" bg="#FF671D" activeClassName="active" to={to}>
    {children}
  </AniLink>
)

const AniLink = styled(AniLink_)`
  background-color: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-weight: 900;
  font-size: 2.0625em; /* 33px */
  text-transform: uppercase;
  line-height: 3.75rem; /* 60px */
  padding: 0 ${props => props.theme.layout.paddingBig} 0 0;
  justify-content: right;
  transition: ${props => props.theme.transitions.default};

  &.active,
  :hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
  }
`
