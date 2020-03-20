import React from 'react'
import styled from 'styled-components'
import { NavigationLink } from 'components'
import { routes } from 'utils'

export const NavigationLinks = () => (
  <StyledNavigationLinks>
    <NavigationLink to={routes.home}>Home</NavigationLink>
    <NavigationLink to={routes.team}>Your Team</NavigationLink>
    <NavigationLink to={routes.portfolio}>Portfolio</NavigationLink>
    {/* <NavigationLink to={routes.press}>Press</NavigationLink> */}
    {/* <NavigationLink to={routes.careers}>Careers</NavigationLink> */}
    <NavigationLink to={routes.contact}>Contact</NavigationLink>
  </StyledNavigationLinks>
)

const StyledNavigationLinks = styled.div``
