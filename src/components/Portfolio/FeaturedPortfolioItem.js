import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from 'components'
import Img from 'gatsby-image'
import { media, routes } from 'utils'

export const FeaturedPortfolioItem = ({
  name = 'Project Name',
  fullName = 'Full Project Name',
  tags = 'Web Design',
  shortDescription = 'Lorem Ipsum Dolor Sit Amet',
  logo,
  featuredImage,
  variant = 'default',
  ...props
}) => (
  <StyledFeaturedPortfolioItem variant={variant} {...props}>
    <Name>{name}</Name>
    <Card variant={variant}>
      <Background variant={variant}>
        <Tags variant={variant}>{tags}</Tags>
        <FullName variant={variant}>{fullName}</FullName>
        <Description variant={variant}>{shortDescription}</Description>
        <Button
          to={routes.portfolio}
          text="View Project"
          variant={variant === 'green' ? 'white2' : 'white'}
        />
      </Background>
    </Card>
    <Feature>
      <Image
        fluid={featuredImage.fluid}
        alt={featuredImage.alt}
        title={featuredImage.title}
      />
      <LogoHolder variant={variant}>
        <Logo src={logo.url} alt={logo.alt} title={logo.title} />
      </LogoHolder>
    </Feature>
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

const StyledFeaturedPortfolioItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  overflow: hidden;
  padding-top: ${props => props.theme.layout.paddingGiant};
  position: relative;
  ${({ variant }) => variant === 'green' && css`
    flex-direction: row-reverse;
  `}
`

const Card = styled.div`
  position: relative;
  width: 33%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  ${media.tablet`
    justify-content: flex-start;
    width: 100%;
  `}
  ${({ variant }) => variant === 'green' && css`
    justify-content: flex-start;
  `}
`
const Background = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.layout.paddingBig};
  width: 530px;
  min-width: 530px;
  transform: translateX(50%);
  z-index: 1;
  ${media.tablet`
    min-width: auto;
    transform: none;
    width: 100%;
  `}
  ${({ variant }) => variant === 'green' && css`
    background-color: ${props => props.theme.colors.tertiary};
    transform: translateX(-50%);
  `}
`
const Name = styled.div`
  color: #f9f9f9;
  font-family: ${props => props.theme.fonts.playfairDisplay};
  /* font-size: 12vw; */
  font-size: 200px;
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
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: 20px;
  ${({ variant }) => variant === 'green' && css`
    color: ${props => props.theme.colors.white};
  `}
`
const FullName = styled.h2`
  color: ${props => props.theme.colors.white};
  ${({ variant }) => variant === 'green' && css`
    color: ${props => props.theme.colors.secondary};
  `}
`
const Description = styled.p`
  color: ${props => props.theme.colors.white};
  ${({ variant }) => variant === 'green' && css`
    color: ${props => props.theme.colors.secondary};
  `}
`

const Feature = styled.div`
  position: relative;
  width: 67%;
  ${media.tablet`
    width: 100%;
  `}
`
const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.layout.padding};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 265px; /*Half of card width */
  ${media.tablet`
    left: 0;
  `}
  ${({ variant }) => variant === 'green' && css`
    right: 265px;
    left: 0;
    ${media.tablet`
      right: 0;
    `}
  `}
`
const Logo = styled.img`
  max-width: 300px;
`
const Image = styled(Img)`
  min-height: 620px;
`
