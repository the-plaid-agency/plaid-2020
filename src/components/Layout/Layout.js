import React from 'react'
import styled from 'styled-components'
import { SEO, NormalizeStyle, ResetStyle, GlobalStyle, Header, Nav, Footer } from 'components'

const Layout = ({ children: pages }) => (
  <StyledLayout>
    <SEO title="" />
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
