import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${props => props.theme.layout.maxWidth};
  width: 100%;
`
