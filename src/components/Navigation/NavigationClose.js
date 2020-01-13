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
  padding: ${props => props.theme.layout.paddingBig} ${props => props.theme.layout.paddingBig} 6.25rem ${props => props.theme.layout.paddingBig};
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
