import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import { theme, store } from 'utils'
import {
  StoreSync,
  SEO,
  NormalizeStyle,
  ResetStyle,
  GlobalStyle,
  Navigation,
  TopBar,
} from 'components'

const Layout = ({ children, location }) => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <StoreSync location={location} />
        <SEO title="" />
        <NormalizeStyle />
        <ResetStyle />
        <GlobalStyle />
        <TopBar />
        <Navigation />
        {children}
      </StyledLayout>
    </ThemeProvider>
  </StoreProvider>
)

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export default Layout
