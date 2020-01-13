import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.layout.paddingBig} ${props => props.theme.layout.padding};
  width: 100%;
`
