import React from 'react'
import styled from 'styled-components'
import { Row as Row_ } from 'components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const NavBar = () => (
  <StyledNav>
    <Row>
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
        to="/components">
        Components
      </AniLink>
    </Row>
  </StyledNav>
)

const StyledNav = styled.nav`
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  left: 0;
  padding: 0 30px;
  position: fixed;
  right: 0;
  user-select: none;
  z-index: 9999;

  a {
    font-weight: 900;
    font-size: 1.25em;
    /* text-transform: uppercase; */
    margin-left: 30px;
    line-height: 60px;
    transition: 0.2s all;
  }
  a:first-child {
    margin-left: 0;
  }
  a.active,
  a:hover {
    color: #222;
  }
`

const Row = styled(Row_)`
  flex-direction: row;
`
