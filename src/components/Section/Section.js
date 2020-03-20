import styled from 'styled-components'

export const Section = styled.section`
  align-items: ${({ align }) => align ?? 'center'};
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  padding-top: ${props => props.theme.layout.paddingGiant};
  padding-right: ${props => props.theme.layout.padding};
  padding-bottom: ${props => props.theme.layout.paddingHuge};
  padding-left: ${props => props.theme.layout.padding};
  width: 100%;
`
