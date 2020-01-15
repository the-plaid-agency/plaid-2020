import React from 'react'
import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { IoMdClose as IoMdClose_ } from 'react-icons/io'

export const NavigationClose = () => {
  const setOpenStatus = useStoreActions(actions => actions.nav.setOpenStatus)
  const handleClick = () => setOpenStatus()

  return (
    <StyledNavClose>
      <IoMdClose onClick={handleClick} />
    </StyledNavClose>
  )
}

const StyledNavClose = styled.div`
  display: flex;
  justify-content: right;
  padding-top: ${props => props.theme.layout.paddingBig};
  padding-right: ${props => props.theme.layout.paddingBig};
  padding-bottom: 6.25rem; /* 100px */

  @media only screen and (max-width: 26.875rem) { /* 430px */
    padding-bottom: ${props => props.theme.layout.paddingBig};
  }
`
const IoMdClose = styled(IoMdClose_)`
  color: #fff;
  cursor: pointer;
  font-size: 26px;
  opacity: 1;
  transition: ${props => props.theme.transitions.default};

  :hover {
    opacity: 0.75;
  }
`
