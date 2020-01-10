import React from 'react'
import styled from 'styled-components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const NavLink = ({ text = "Link", to = "/" }) => (
  <AniLink cover direction="left" bg="#FF671D" activeClassName="active" to={to}>
    {text}
  </AniLink>
)

const AniLink = styled(AniLink_)`
  background-color: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-weight: 900;
  font-size: 1.25em;
  font-size: 33px;
  text-transform: uppercase;
  line-height: 60px;
  padding: 0 3.75rem 0 0;
  justify-content: right;
  transition: ${props => props.theme.transitions.default};

  &.active,
  :hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
  }
`
