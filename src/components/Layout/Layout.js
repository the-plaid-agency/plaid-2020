import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils'
import {
  SEO,
  NormalizeStyle,
  ResetStyle,
  GlobalStyle,
  NavBar,
  Footer,
} from 'components'

const Layout = ({ children: pages }) => (
  <ThemeProvider theme={theme}>
    <StyledLayout>
      <SEO title="" />
      <NormalizeStyle />
      <ResetStyle />
      <GlobalStyle />
      <NavBar />
      {pages}
      <Footer />
    </StyledLayout>
  </ThemeProvider>
)

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`

export default Layout
