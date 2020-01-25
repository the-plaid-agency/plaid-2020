import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Row = styled.div`
  align-items: ${({ align }) => align ?? 'stretch' };
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify ?? 'space-between' };
  max-width: ${props => props.theme.layout.maxWidth};
  width: ${({ width }) => width ?? '100%' };
`

Row.propTypes = {
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
  width: PropTypes.string,
}
