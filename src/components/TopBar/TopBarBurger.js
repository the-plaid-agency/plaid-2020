import React, { useState } from 'react'
import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { GiHamburgerMenu as GiHamburgerMenu_ } from 'react-icons/gi'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export const TopBarBurger = () => {
  const openNav = useStoreActions(actions => actions.nav.openNav)
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll], false, false, 300)

  return <GiHamburgerMenu show={hideOnScroll ? 1 : 0} onClick={openNav} />
}

const GiHamburgerMenu = styled(GiHamburgerMenu_)`
  color: ${props => props.show ? props.theme.colors.white : props.theme.colors.primary};
  cursor: pointer;
  font-size: 1.625em; /* 26px */
  pointer-events: auto;
  transition: ${props => props.theme.transitions.default};
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
