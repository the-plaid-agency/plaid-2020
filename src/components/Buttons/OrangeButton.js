import React from 'react'
import styled from 'styled-components'
import { Button as Button_ } from 'components'

export const WhiteButton = ({
  to = '/',
  text = 'Orange Button',
  coverDir = 'left',
  coverBg = '#FF671D',
  ...props
}) => (
  <StyledWhiteButton to={to} cover direction={coverDir} bg={coverBg} {...props}>
    {text}
  </StyledWhiteButton>
)

const StyledWhiteButton = styled(Button_)`
`
