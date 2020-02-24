import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Anchor } from 'components'
import { routes } from 'utils'
import { FiChevronRight as FiChevronRight_ } from 'react-icons/fi'

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
    direction={coverDir}
    bg={coverBg}
    variant={variant}
    {...props}
  >
    {text}
    <FiChevronRight />
  </StyledButton>
)

TextButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  coverDir: PropTypes.string,
  coverBg: PropTypes.string,
  variant: PropTypes.string,
}

const StyledButton = styled(Anchor)`
  color: ${props => props.theme.colors.black};
  display: inline-flex;
  font-size: 0.9375em; /* 15px */
  font-weight: ${props => props.theme.fonts.bold900};
  justify-content: center;
  line-height: 1.75; /* 28px */
  position: relative;
  user-select: none;
  ${({ variant }) => variant === 'white' && css`
    color: ${props => props.theme.colors.white};
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));
  `}
  ${({ variant }) => variant === 'orange' && css`
    color: ${props => props.theme.colors.primary};
  `}
`
const FiChevronRight = styled(FiChevronRight_)`
  height: inherit;
  margin-left: 5px;
  transition: ${props => props.theme.transitions.default};
  transform: scale(2) translateX(0) translateZ(0);
  ${StyledButton}:hover & {
    transform: scale(2) translateX(2px) translateZ(0);
  }
`
