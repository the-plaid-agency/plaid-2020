import styled from 'styled-components'
import { Button } from 'components'

export const WhiteButton = styled(Button)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.secondary};
`
