import React from 'react'
import styled from 'styled-components'
// import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from 'components'
import Img from 'gatsby-image'
// import { media } from 'utils'
import { routes } from 'utils'

export const FeaturedPortfolioItem = ({
  name = 'Project Name',
  fullName = 'Full Project Name',
  tags = 'Web Design',
  shortDescription = 'Lorem Ipsum Dolor Sit Amet',
  logo,
  featuredImage,
  ...props
}) => {
  return (
    <StyledFeaturedPortfolioItem {...props}>
      <Name>{name}</Name>
      <CardPadder>
        <CardHolder>
          <Card>
            <Tags>{tags}</Tags>
            <FullName>{fullName}</FullName>
            <Description>{shortDescription}</Description>
            <Button to={routes.portfolio} text="View Project" variant="white" />
          </Card>
        </CardHolder>
      </CardPadder>
      <Feature>
        <Image
          fluid={featuredImage.fluid}
          alt={featuredImage.alt}
          title={featuredImage.title}
        />
        <LogoHolder>
          <Logo
            src={logo.url}
            alt={logo.alt}
            title={logo.title}
          />
        </LogoHolder>
      </Feature>
    </StyledFeaturedPortfolioItem>
  )
}

FeaturedPortfolioItem.propTypes = {
  name: PropTypes.string,
  fullName: PropTypes.string,
  tags: PropTypes.string,
  shortDescription: PropTypes.string,
  logo: PropTypes.object,
  featuredImage: PropTypes.object,
}

const StyledFeaturedPortfolioItem = styled.div`
  padding-top: ${props => props.theme.layout.paddingGiant};
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const CardPadder = styled.div`
  position: relative;
  width: 33%;
  display: flex;
`
const CardHolder = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`
const Card = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.layout.paddingBig};
  width: 530px;
  transform: translateX(50%);
  z-index: 1;
`
const Name = styled.div`
  color: #f9f9f9;
  font-family: ${props => props.theme.fonts.playfairDisplay};
  font-size: 12vw;
  line-height: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  user-select: none;
  z-index: -1;
`
const Tags = styled.h6`
  color: #b0bfbc;
  margin-bottom: 20px;
`
const FullName = styled.h2`
  color: ${props => props.theme.colors.white};
`
const Description = styled.p`
  color: ${props => props.theme.colors.white};
`

const Feature = styled.div`
  position: relative;
  width: 67%;
`
const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.layout.padding};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 33%;
`
const Logo = styled.img`
  max-width: 300px;
`
const Image = styled(Img)`
  min-height: 620px;
`
