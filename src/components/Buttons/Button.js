import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Button = ({
  to = '/',
  text = 'Button',
  coverDir = 'left',
  coverBg = '#FF671D',
  ...props
}) => (
  <StyledButton to={to} cover direction={coverDir} bg={coverBg} {...props}>
    {text}
  </StyledButton>
)

const StyledButton = styled(AniLink)`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  display: inline-flex;
  font-size: 0.875em; /* 14px */
  font-weight: 900;
  justify-content: center;
  letter-spacing: 4px;
  line-height: 1.25;
  padding: 20px 48px;
  position: relative;
  text-transform: uppercase;
  user-select: none;

  ::after {
    content: '';
    border: 1px solid #b0bfbc;
    height: 100%;
    position: absolute;
    top: 0.625rem;
    left: -0.625rem;
    transition: ${props => props.theme.transitions.default};
    transform: translate3d(0, 0, 0) scale(1);
    width: 100%;
    will-change: transform;
    z-index: -1;
  }
  :hover ::after {
    transform: translate3d(0.625rem, -0.625rem, 0) scale(0.99);
  }
`
