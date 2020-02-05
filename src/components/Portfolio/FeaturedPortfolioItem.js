import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from 'components'
import Img from 'gatsby-image'
import { media } from 'utils'

export const FeaturedPortfolioItem = ({
  name = '',
  shortDescription = '',
  ...props
}) => (
  <StyledFeaturedPortfolioItem {...props}>
    <div>{name}</div>
    <div>{shortDescription}</div>
  </StyledFeaturedPortfolioItem>
)

FeaturedPortfolioItem.propTypes = {
}

const StyledFeaturedPortfolioItem = styled.header`
  position: relative;
`
