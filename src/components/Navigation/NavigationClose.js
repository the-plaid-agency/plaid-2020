import React from 'react'
import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { IoMdClose as IoMdClose_ } from 'react-icons/io'

export const NavigationClose = () => {
  const closeNav = useStoreActions(actions => actions.nav.closeNav)

  return (
    <StyledNavClose>
      <IoMdClose onClick={closeNav} />
    </StyledNavClose>
  )
}

const StyledNavClose = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${props => props.theme.layout.paddingBig};
  padding-right: ${props => props.theme.layout.paddingBig};
  padding-bottom: 6.25rem; /* 100px */
  @media only screen and (max-width: 26.875rem) { /* 430px */
    padding-bottom: ${props => props.theme.layout.paddingBig};
  }
`
const IoMdClose = styled(IoMdClose_)`
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 1.625em; /* 26px */
  transition: ${props => props.theme.transitions.default};
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
`
