import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { Section, Row as Row_ } from 'components'
import { useServiceListApi } from 'hooks'
import { media } from 'utils'

export const ServiceList = props => {
  const { serviceList } = useServiceListApi()

  return (
    <StyledServiceList {...props}>
      <Row>
        <Grid>
          {serviceList.map((data, i) => (
            <Service key={i}>
              <ServiceTitle>{data.title}</ServiceTitle>
              <ServiceDivier />
              {data.serviceNameData.map((data, i) => (
                <ServiceName>{data.name}</ServiceName>
              ))}
            </Service>
          ))}
        </Grid>
      </Row>
    </StyledServiceList>
  )
}

const StyledServiceList = styled(Section)`
  padding-right: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
`
const Row = styled(Row_)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
`
const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.layout.margin};
  grid-template-columns: repeat(3, 1fr);
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
const Service = styled.div`
  display: flex;
  flex-direction: column;
`
const ServiceTitle = styled.h4`
  margin-bottom: 15px;
`
const ServiceDivier = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 3px;
  margin-bottom: 15px;
  width: 28px;
`
const ServiceName = styled.p`
  margin-bottom: 0;
`
