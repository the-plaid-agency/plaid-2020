import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: ${props => props.theme.layout.paddingGiant};
  padding-right: ${props => props.theme.layout.padding};
  padding-bottom: ${props => props.theme.layout.paddingHuge};
  padding-left: ${props => props.theme.layout.padding};
  width: 100%;
`
