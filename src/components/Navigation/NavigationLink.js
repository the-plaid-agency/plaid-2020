import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const NavigationLink = ({ to = "/", children, ...props }) => (
  <AniLink cover direction="left" bg="#FF671D" activeClassName="active" to={to} {...props}>
    {children}
  </AniLink>
)

NavigationLink.propTypes = {
  to: PropTypes.string
}

const AniLink = styled(AniLink_)`
  background-color: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-weight: ${props => props.theme.fonts.bold900};
  font-size: 2.0625em; /* 33px */
  justify-content: flex-end;
  line-height: 3.75rem; /* 60px */
  padding: 0 ${props => props.theme.layout.paddingBig} 0 0;
  text-transform: uppercase;
  transition: ${props => props.theme.transitions.default};
  user-select: none;
  &.active,
  :hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
  }
`
