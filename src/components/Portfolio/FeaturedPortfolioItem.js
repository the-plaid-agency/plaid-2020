import React from 'react'
import styled from 'styled-components'
// import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
// import { Button } from 'components'
// import Img from 'gatsby-image'
// import { media } from 'utils'

export const FeaturedPortfolioItem = ({
  name = '',
  fullName = '',
  tags = '',
  shortDescription = '',
  logo,
  featuredImage,
  ...props
}) => (
  <StyledFeaturedPortfolioItem {...props}>
    <div>{name}</div>
    <div>{shortDescription}</div>
  </StyledFeaturedPortfolioItem>
)

FeaturedPortfolioItem.propTypes = {
  name: PropTypes.string,
  fullName: PropTypes.string,
  tags: PropTypes.string,
  shortDescription: PropTypes.string,
  logo: PropTypes.object,
  featuredImage: PropTypes.object,
}

const StyledFeaturedPortfolioItem = styled.header`
  position: relative;
`
