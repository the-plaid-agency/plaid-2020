import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { routes } from 'utils'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaChevronRight } from 'react-icons/fa'

export const TextButton = ({
  to = '/home',
  text = 'Text Button',
  coverDir = 'left',
  coverBg = '#FF671D',
  variant = 'black',
  ...props
}) => (
  <StyledButton
    to={to === '/home' ? routes.home : to}
    cover
    direction={coverDir}
    bg={coverBg}
    variant={variant}
    {...props}>
    {text}
    <FaChevronRight />
  </StyledButton>
)

TextButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  coverDir: PropTypes.string,
  coverBg: PropTypes.string,
  variant: PropTypes.string,
}

const StyledButton = styled(AniLink)`
  color: ${props => props.theme.colors.black};
  display: inline-flex;
  font-size: 0.9375em; /* 15px */
  font-weight: ${props => props.theme.fonts.bold900};
  justify-content: center;
  line-height: 1.75; /* 28px */
  position: relative;
  user-select: none;
  svg {
    height: inherit;
    margin-left: 5px;
    transition: ${props => props.theme.transitions.default};
    transform: translateX(0);
  }
  :hover svg {
    transform: translateX(5px);
  }

  ${({ variant }) => variant === 'white' && css`
    color: ${props => props.theme.colors.white};
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));
  `}
  ${({ variant }) => variant === 'orange' && css`
    color: ${props => props.theme.colors.primary};
  `}
`
