import React from 'react'
import styled from 'styled-components'
import { Row as Row_ } from 'components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Nav = () => (
  <StyledNav>
    <Row>
      <AniLink cover direction="left" bg="#FF671D" activeClassName="active" to="/">
        Home
      </AniLink>
      <AniLink cover direction="left" bg="#FF671D" activeClassName="active" to="/about">
        About
      </AniLink>
      <AniLink cover direction="left" bg="#FF671D" activeClassName="active" to="/portfolio">
        Portfolio
      </AniLink>
    </Row>
  </StyledNav>
)

const StyledNav = styled.nav`
  background: rgba(144, 199, 168, 0.075);
  display: flex;
  justify-content: center;
  padding: 0 30px;
  user-select: none;

  a {
    font-weight: 900;
    font-size: 1.25em;
    /* text-transform: uppercase; */
    margin-left: 30px;
    line-height: 60px;
    transition: 0.3s all;
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
