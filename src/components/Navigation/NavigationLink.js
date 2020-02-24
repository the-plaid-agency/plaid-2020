import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Anchor as Anchor_ } from 'components'

export const NavigationLink = ({ to = '/', children, ...props }) => (
  <Anchor to={to} {...props}>
    {children}
  </Anchor>
)

NavigationLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
}

const Anchor = styled(Anchor_)`
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
