import React from 'react'
import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { GiHamburgerMenu as GiHamburgerMenu_ } from 'react-icons/gi'

export const TopBarBurger = () => {
  const openNav = useStoreActions(actions => actions.nav.openNav)
  const handleClick = () => openNav()

  return <GiHamburgerMenu onClick={handleClick} />
}

const GiHamburgerMenu = styled(GiHamburgerMenu_)`
  color: #fff;
  cursor: pointer;
  font-size: 26px;
  pointer-events: auto;
  opacity: 1;
  transition: ${props => props.theme.transitions.default};

  :hover {
    opacity: 0.75;
  }
`
