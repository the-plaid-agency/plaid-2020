import React from 'react'
import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { GiHamburgerMenu as GiHamburgerMenu_ } from 'react-icons/gi'

export const NavBarBurger = () => {
  const setOpenStatus = useStoreActions(actions => actions.nav.setOpenStatus)
  const handleClick = () => setOpenStatus()

  return <GiHamburgerMenu onClick={handleClick} />
}

const GiHamburgerMenu = styled(GiHamburgerMenu_)`
  color: #fff;
  cursor: pointer;
  font-size: 26px;
  pointer-events: auto;
  transform: scale(1);
  transition: ${props => props.theme.transitions.default};

  :hover {
    transform: scale(1.2);
  }
`
