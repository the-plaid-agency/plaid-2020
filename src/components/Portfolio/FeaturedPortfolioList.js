import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Section,
  Row as Row_,
  Col,
} from 'components'
import { usePortfolioListApi } from 'hooks'
// import Img from 'gatsby-image'
// import { media } from 'utils'

export const FeaturedPortfolioList = ({
  number = 9,
  ...props
}) => {
  const { portfolioList } = usePortfolioListApi()

  return (
    <StyledFeaturedPortfolioList {...props}>
      <Row>
        <Col>
          {portfolioList.map((data, i) => {
            return (
              <div key={i}>{data.name}</div>
            )
          })}
        </Col>
      </Row>
    </StyledFeaturedPortfolioList>
  )
}

FeaturedPortfolioList.propTypes = {
  number: PropTypes.number,
}

const StyledFeaturedPortfolioList = styled(Section)``
const Row = styled(Row_)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
`
