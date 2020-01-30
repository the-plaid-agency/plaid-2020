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
    /* About 60px margin */
    margin-bottom: 1.375rem; /* 22px */
  }
  h2 {
    /* About 60px margin */
    margin-bottom: 2.125rem; /* 34px */
  }
  h3 {
    /* About 60px margin */
    margin-bottom: 2.5rem; /* 40px */
  }
  h4 {
    /* About 60px margin */
    margin-bottom: 2.875rem; /* 46px */
  }
  h5 {
    /* About 60px margin */
    margin-bottom: 2.875rem; /* 46px */
  }
  h6 {
    /* About 60px margin */
    margin-bottom: 2.75rem; /* 44px */
  }

  p, ol, ul, code {
    margin-bottom: 2.5rem;
  }

  [class^="Col"] *:last-child {
    margin-bottom: 0;
  }
`
