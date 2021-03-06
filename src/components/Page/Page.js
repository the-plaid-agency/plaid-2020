import React from 'react'
import styled from 'styled-components'

export const Page = ({ children }) => (
  <StyledPage>
    {children}
  </StyledPage>
)

const StyledPage = styled.main`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;

  p a,
  table a {
    border-bottom: 2px solid ${props => props.theme.colors.transparent};
    transition: ${props => props.theme.transitions.default};
  }

  p a:hover,
  table a:hover {
    border-bottom: 2px solid;
  }
`
