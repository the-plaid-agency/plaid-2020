import React from 'react'
import styled from 'styled-components'
import { Row as Row_, Logo, NavBarBurger } from 'components'

export const NavBar = () => (
  <StyledNavBar>
    <Row>
      <Logo />
      <NavBarBurger />
    </Row>
  </StyledNavBar>
)

const StyledNavBar = styled.div`
  /* background-color: rgba(255, 255, 255, 0.25); */
  display: flex;
  justify-content: center;
  padding: 3.75rem 1.875rem 0 1.875rem;
  pointer-events: none;
  position: fixed;
  left: 0;
  right: 0;
  user-select: none;
  z-index: 100;
`
const Row = styled(Row_)`
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
`
