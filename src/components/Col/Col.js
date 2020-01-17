import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Col = styled.div`
  align-items: ${props => props.align ? props.align : 'flex-start' };
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify ? props.justify : 'flex-start' };
  margin-bottom: ${props => props.theme.layout.padding};
  width: ${props => props.width ? props.width : '100%' };
`

Col.propTypes = {
  align: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit',
  ]),
  justify: PropTypes.oneOf([
    'justify-content',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit',
  ]),
  width: PropTypes.number,
}
