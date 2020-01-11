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
  padding: 3.75rem 3.75rem 6.25rem 1.875rem;
`
const IoMdClose = styled(IoMdClose_)`
  color: #fff;
  cursor: pointer;
  font-size: 26px;
  transform: scale(1);
  transition: ${props => props.theme.transitions.default};

  :hover {
    transform: scale(1.2);
  }
`
