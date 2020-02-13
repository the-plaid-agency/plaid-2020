import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Section,
  Row as Row_,
  Col as Col_,
} from 'components'
import { usePortfolioListApi } from 'hooks'
import { media } from 'utils'

export const FeaturedPortfolioList = ({
  number = 9,
  ...props
}) => {
  const { portfolioList } = usePortfolioListApi()

  return (
    <StyledFeaturedPortfolioList {...props}>
      <Row>
        <Grid>
          {portfolioList.map(data => (
            <Col key={data.name} align="center" justify="center">
              <Logo src={data.logo.url} alt={data.logo.alt} title={data.logo.title} />
            </Col>
          ))}
        </Grid>
      </Row>
    </StyledFeaturedPortfolioList>
  )
}

FeaturedPortfolioList.propTypes = {
  number: PropTypes.number,
}

const StyledFeaturedPortfolioList = styled(Section)`
  padding-bottom: ${props => props.theme.layout.paddingGiant};
`
const Row = styled(Row_)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
`
const Grid = styled.div`
  display: grid;
  column-gap: 30px;
  grid-row-gap: 60px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  width: 100%;
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.phone`
    grid-row-gap: 30px;
    grid-template-columns: repeat(1, 1fr);
  `}
`
const Col = styled(Col_)`
  justify-content: center;
  margin-bottom: 0;
  :nth-child(3n + 1) {
    align-items: flex-start;
  }
  :nth-child(3n + 0) {
    align-items: flex-end;
  }
  ${media.tablet`
    :nth-child(2n + 1) {
      align-items: center;
    }
    :nth-child(2n + 0) {
      align-items: center;
    }
  `}
`
const Logo = styled.img`
  max-width: 200px;
  max-height: 80px;
`
