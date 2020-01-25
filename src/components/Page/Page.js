import React from 'react'
import styled from 'styled-components'

export const Page = ({ children }) => (
  <StyledPage>
    {children}
  </StyledPage>
)

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  p a,
  table a {
    border-bottom: 2px solid ${props => props.theme.colors.transparent};
    transition: ${props => props.theme.transitions.default};
  }
  p a:hover,
  table a:hover {
    border-bottom: 2px solid;
  }

  h1 {
    margin-bottom: 21px;
  }
  h2 {
    margin-bottom: 34px;
  }
  h3 {
    margin-bottom: 39px;
  }


  h1, h2, h3, h4, h5, h6,
  p, ol, ul, code {
    /* margin-bottom: 2.5rem; */
  }

  [class^="Col"] *:last-child {
    margin-bottom: 0;
  }
`
