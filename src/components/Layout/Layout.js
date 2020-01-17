import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import { HelmetProvider } from 'react-helmet-async'
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
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <HelmetProvider>
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
      </HelmetProvider>
    </StoreProvider>
  </ThemeProvider>
)

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export default Layout
