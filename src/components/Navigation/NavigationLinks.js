import React from 'react'
import { NavigationLink } from 'components'

export const NavigationLinks = () => {
  return (
    <div>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
      <NavigationLink to="/components">Components</NavigationLink>
    </div>
  )
}
