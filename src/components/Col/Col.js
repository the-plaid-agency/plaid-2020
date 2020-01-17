import styled from 'styled-components'

export const Col = styled.div`
  align-items: ${props => props.align ? props.align : 'flex-start' };
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify ? props.justify : 'flex-start' };
  margin-bottom: ${props => props.theme.layout.padding};
  width: ${props => props.width ? props.width : 'auto' };

`
