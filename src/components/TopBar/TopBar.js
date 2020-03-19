import React, { memo } from 'react'
import styled from 'styled-components'
import { Section, Row, Logo, TopBarBurger } from 'components'

export const TopBar = memo(() => (
  <StyledTopBar>
    <Row>
      <Logo />
      <TopBarBurger />
    </Row>
  </StyledTopBar>
))

const StyledTopBar = styled(Section)`
  display: flex;
  justify-content: center;
  padding-top: ${props => props.theme.layout.paddingBig};
  padding-bottom: 0;
  pointer-events: none;
  position: fixed;
  left: 0;
  right: 0;
  user-select: none;
  z-index: 100;
`
