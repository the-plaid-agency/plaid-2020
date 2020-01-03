import React from 'react'
import { Header, Nav, Footer, NormalizeStyle, ResetStyle, GlobalStyle } from 'components'


export const App = ({ children }) => (
  <div>
    <NormalizeStyle />
    <ResetStyle />
    <GlobalStyle />
    <Header/>
    <Nav/>
    {children}
    <Footer/>
  </div>
)
