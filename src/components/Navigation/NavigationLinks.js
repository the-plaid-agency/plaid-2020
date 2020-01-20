import React from 'react'
import styled from 'styled-components'
import { NavigationLink } from 'components'

export const NavigationLinks = () => {
  return (
    <StyledNavigationLinks>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/team">Your Team</NavigationLink>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
      <NavigationLink to="/press">Press</NavigationLink>
      <NavigationLink to="/careers">Careers</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
      <NavigationLink to="/components">Components</NavigationLink>
    </StyledNavigationLinks>
  )
}

const StyledNavigationLinks = styled.div``
