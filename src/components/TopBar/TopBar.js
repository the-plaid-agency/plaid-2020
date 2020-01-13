import React from 'react'
import styled from 'styled-components'
import { Row as Row_, Logo, TopBarBurger } from 'components'

export const TopBar = () => (
  <StyledTopBar>
    <Row>
      <Logo />
      <TopBarBurger />
    </Row>
  </StyledTopBar>
)

const StyledTopBar = styled.div`
  /* background-color: rgba(255, 255, 255, 0.25); */
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.layout.paddingBig} ${props => props.theme.layout.padding} 0 ${props => props.theme.layout.padding};
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
