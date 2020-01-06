import React from 'react'
import styled from 'styled-components'
import { Row } from 'components'

export const Header = () => (
  <StyledHeader>
    <Row>
      <h1>PLAID</h1>
    </Row>
  </StyledHeader>
)

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 60px 30px;

  h1 {
    color: #222;
    font-family: 'Ubuntu', sans-serif;
    font-size: 5em;
    line-height: 1;
    user-select: none;
  }
`
