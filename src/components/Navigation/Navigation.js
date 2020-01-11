import React from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'
import { NavigationClose, NavigationLinks, Social as Social_ } from 'components'

export const Navigation = () => {
  const openStatus = useStoreState(state => state.nav.openStatus)

  return (
    <StyledNavigation open={openStatus}>
      <NavigationClose />
      <NavigationLinks />
      <Social />
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 80px 100%);
  display: flex;
  flex-direction: column;
  opacity: ${props => (props.open ? '1' : '0')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: ${props => props.theme.transitions.default};
  transform: ${props => props.open ? 'scale(1) translate3d(0,0,0)' : 'scale(1.5) translate3d(100%,0,0)'};
  user-select: none;
  width: 100%;
  max-width: 430px;
  min-width: 300px;
  z-index: 200;
`
const Social = styled(Social_)`
  margin-top: auto;
  justify-content: flex-end;
  padding: 0 3.75rem 6.25rem 1.875rem;
`
