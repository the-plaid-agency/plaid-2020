import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import { useStoreActions, useStoreState } from 'easy-peasy'
import {
  NavigationClose,
  NavigationLinks,
  Address as Address_,
  Social as Social_,
} from 'components'

export const Navigation = memo(() => {
  const currentPage = useStoreState(state => state.page.currentPage)
  const isNavOpen = useStoreState(state => state.nav.isNavOpen)
  const closeNav = useStoreActions(actions => actions.nav.closeNav)

  useEffect(() => {
    closeNav()
  }, [currentPage, closeNav])

  return (
    <StyledNavigation open={isNavOpen}>
      <NavigationClose />
      <NavigationLinks />
      <Address />
      <Social />
    </StyledNavigation>
  )
})

const StyledNavigation = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 80px 100%);
  display: flex;
  flex-direction: column;
  opacity: ${props => (props.open ? '1' : '0')};
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: ${props => props.theme.transitions.default};
  transform: ${props =>
    props.open ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'};
  width: 100%;
  max-width: 26.875rem; /* 430px */
  min-width: 18.75rem; /* 300px */
  z-index: 200;

  @media only screen and (max-width: 26.875rem) { /* 430px */
    clip-path: none;
    max-width: 100%;
  }
`
const Address = styled(Address_)`
  align-items: flex-end;
  margin-top: auto;
  padding-top: ${props => props.theme.layout.padding};
  padding-right: ${props => props.theme.layout.paddingBig};
  padding-bottom: ${props => props.theme.layout.padding};
`
const Social = styled(Social_)`
  justify-content: flex-end;
  padding-right: ${props => props.theme.layout.paddingBig};
  padding-bottom: ${props => props.theme.layout.paddingBig};
`
