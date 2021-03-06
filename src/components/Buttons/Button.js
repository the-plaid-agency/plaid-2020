import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Anchor } from 'components'
import { routes } from 'utils'

export const Button = ({
  to = '/home',
  text = 'Button',
  coverDir = 'left',
  coverBg = '#FF671D',
  variant = 'orange',
  ...props
}) => (
  <StyledButton
    to={to === '/home' ? routes.home : to}
    direction={coverDir}
    bg={coverBg}
    variant={variant}
    {...props}
  >
    {text}
  </StyledButton>
)

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  coverDir: PropTypes.string,
  coverBg: PropTypes.string,
  variant: PropTypes.string,
}

const StyledButton = styled(Anchor)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: inline-flex;
  font-size: 0.875em; /* 14px */
  font-weight: ${props => props.theme.fonts.bold900};
  justify-content: center;
  letter-spacing: 4px;
  line-height: 1.25;
  padding: 20px 48px;
  position: relative;
  text-transform: uppercase;
  user-select: none;
  :before {
    border: 1px solid ${props => props.theme.colors.tertiary};
    content: '';
    height: 100%;
    position: absolute;
    top: 0.625rem;
    left: -0.625rem;
    transition: ${props => props.theme.transitions.fast};
    transform: translate3d(0.625rem, -0.625rem, 0) scale(0.99);
    width: 100%;
    opacity: 0;
    z-index: -1;
  }
  :hover :before {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  ${({ variant }) => variant === 'white' && css`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
  `}
  ${({ variant }) => variant === 'white2' && css`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
    :before {
      border: 1px solid ${props => props.theme.colors.secondary};
    }
  `}
  ${({ variant }) => variant === 'black' && css`
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  `}
`
