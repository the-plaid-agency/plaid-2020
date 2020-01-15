import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.layout.maxWidth};
  width: 100%;
`
