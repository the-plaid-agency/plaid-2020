import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Section, Row, Employee } from 'components'
import { useEmployeeApi } from 'hooks'
import { media } from 'utils'

export const EmployeeGrid = props => {
  const { employees } = useEmployeeApi()

  return (
    <StyledEmployeeGrid {...props}>
      <Row>
        <Grid>
          {employees.map((data, i) => (
            <Employee
              key={i}
              profilePicture={data.profilePicture}
              firstName={data.firstName}
              lastName={data.lastName}
              jobTitle={data.jobTitle}
              linkedIn={data.linkedIn}
              quote={data.quote}
              description={data.description}
            />
          ))}
        </Grid>
      </Row>
    </StyledEmployeeGrid>
  )
}

EmployeeGrid.propTypes = {
  children: PropTypes.any,
}

const StyledEmployeeGrid = styled(Section)`
  padding-right: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
`
const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.layout.margin};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  padding-bottom: ${props => props.theme.layout.margin};
  transition: ${props => props.theme.transitions.default};
  width: 100%;
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.phablet`
    grid-template-columns: 1fr;
  `}
`
