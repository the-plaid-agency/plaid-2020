import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { WhiteTextButton } from 'components'
import Img from 'gatsby-image'

export const BannerSub = ({
  imageSrc,
  imageAlt = '',
  imageTitle = '',
  textTop = 'Lorem Ipsum Dolor Sit Amet',
  textBottom = 'Consectetur Adipiscing',
  buttonUrl = 'portfolio',
  buttonText = 'Featured Work',
}) => (
  <StyledHeader>
    <HeaderText>
      <h1>
        <div>
          {textTop}<span>.</span>
        </div>
        <div>
          <span>{textBottom}</span>.
        </div>
      </h1>
      <WhiteTextButton to={'/' + buttonUrl} text={buttonText} />
    </HeaderText>
    <HeaderImage
      fluid={imageSrc}
      alt={imageAlt}
      title={imageTitle}
    />
  </StyledHeader>
)

BannerSub.propTypes = {
  imageSrc: PropTypes.object,
  imageAlt: PropTypes.string,
  imageTitle: PropTypes.string,
  textTop: PropTypes.string,
  textBottom: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string,
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
