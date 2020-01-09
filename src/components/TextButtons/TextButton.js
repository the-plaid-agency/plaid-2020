import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaChevronRight } from 'react-icons/fa'

export const TextButton = ({
  to = '/',
  text = 'Text Button',
  coverDir = 'left',
  coverBg = '#FF671D',
  ...props
}) => (
  <StyledButton to={to} cover direction={coverDir} bg={coverBg} {...props}>
    {text}
    <FaChevronRight />
  </StyledButton>
)

const StyledButton = styled(AniLink)`
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  display: inline-flex;
  font-size: 0.9375em; /* 15px */
  font-weight: 900;
  justify-content: center;
  line-height: 1.75; /* 28px */
  position: relative;
  width: auto;

  svg {
    height: inherit;
    margin-left: 5px;
    transition: 0.2s all;
    transform: translateX(0);
  }

  :hover svg {
    transform: translateX(5px);
  }
`
