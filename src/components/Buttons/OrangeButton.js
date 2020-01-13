import styled from 'styled-components'
import { Button } from 'components'

export const OrangeButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`
