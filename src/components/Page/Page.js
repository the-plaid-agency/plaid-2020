import React from 'react'
import styled from 'styled-components'

export const Page = ({ children: content }) => (
  <StyledPage>
    {content}
  </StyledPage>
)

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p a,
  table a {
    border-bottom: 1px solid transparent;
  }
  p a:hover,
  table a:hover {
    border-bottom: 1px solid #ed5429;
  }

  h1,h2,h3,h4,h5,h6,
  p,ol,ul {
    margin-bottom: 2.5rem;
  }
  *:last-child {
    margin-bottom: 0;
  }
`
