import React from 'react'
import styled from 'styled-components'
import { Header, Nav, Footer, NormalizeStyle, ResetStyle, GlobalStyle } from 'components'

const Layout = ({ children: pages }) => (
  <StyledLayout>
    <NormalizeStyle />
    <ResetStyle />
    <GlobalStyle />
    <Header />
    <Nav />
    {pages}
    <Footer />
  </StyledLayout>
)

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`

export default Layout
