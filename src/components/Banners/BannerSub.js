import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { WhiteTextButton } from 'components'
import Img from 'gatsby-image'

export const BannerSub = ({
  textTop = '',
  textBot = '',
  buttonText = 'Button',
  buttonUrl = '/portfolio'
}) => {
  const { imageOne } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "banner_home_1_min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <HeaderText>
        <h1>
          <div>
            {textTop}<span>.</span>
          </div>
          <div>
            <span>{textBot}</span>.
          </div>
        </h1>
        <WhiteTextButton to={'/' + buttonUrl} text={buttonText} />
      </HeaderText>
      <HeaderImage
        fluid={imageOne.childImageSharp.fluid}
        alt="THE PLAID AGENCY"
      />
    </StyledHeader>
  )
}

BannerSub.propTypes = {
  textTop: PropTypes.string,
  textBot: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
}

const StyledHeader = styled.header`
  height: 100vh;
  position: relative;
`
const HeaderText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  h1 {
    color: ${props => props.theme.colors.white};
    text-align: center;
    user-select: none;
  }
  h1 span {
    color: ${props => props.theme.colors.primary};
  }
`
const HeaderImage = styled(Img)`
  height: 100vh;
  user-select: none;
`
