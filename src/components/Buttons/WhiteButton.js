import React from 'react'
import styled from 'styled-components'
import { Button as Button_ } from 'components'

export const OrangeButton = ({
  to = '/',
  text = 'White Button',
  coverDir = 'left',
  coverBg = '#FF671D',
  ...props
}) => (
  <StyledOrangeButton to={to} cover direction={coverDir} bg={coverBg} {...props}>
    {text}
  </StyledOrangeButton>
)

const StyledOrangeButton = styled(Button_)`
  background-color: #fff;
  color: #444444;
`
