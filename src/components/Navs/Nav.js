import React from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'
import { NavClose } from 'components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Nav = () => {
  const openStatus = useStoreState(state => state.nav.openStatus)

  return (
    <StyledNav open={openStatus}>
      <NavClose />
      <AniLink
        cover
        direction="left"
        bg="#FF671D"
        activeClassName="active"
        to="/">
        Home
      </AniLink>
      <AniLink
        cover
        direction="left"
        bg="#FF671D"
        activeClassName="active"
        to="/about">
        About
      </AniLink>
      <AniLink
        cover
        direction="left"
        bg="#FF671D"
        activeClassName="active"
        to="/portfolio">
        Portfolio
      </AniLink>
      <AniLink
        cover
        direction="left"
        bg="#FF671D"
        activeClassName="active"
        to="/contact">
        Contact
      </AniLink>
      <AniLink
        cover
        direction="left"
        bg="#FF671D"
        activeClassName="active"
        to="/components">
        Components
      </AniLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 80px 100%);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: ${props => props.theme.transitions.default};
  transform: ${props => props.open ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'};
  user-select: none;
  width: 20vw;
  min-width: 300px;
  z-index: 200;

  a {
    background-color: ${props => props.theme.colors.transparent};
    color: ${props => props.theme.colors.white};
    display: flex;
    font-weight: 900;
    font-size: 1.25em;
    text-transform: uppercase;
    line-height: 60px;
    padding: 0 1.875rem 0 0;
    justify-content: right;
    transition: ${props => props.theme.transitions.default};
  }
  a:first-child {
    margin-left: 0;
  }
  a.active,
  a:hover {
    background-color: ${props => props.theme.colors.white};
    color: #222;
  }
`
