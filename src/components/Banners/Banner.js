import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { TextButton } from 'components'
import Img from 'gatsby-image'

export const Banner = ({
  imageSrc,
  imageAlt = '',
  imageTitle = '',
  angle = 'None',
  height = 100,
  textTop = 'Lorem Ipsum Dolor Sit Amet',
  textBottom = 'Consectetur Adipiscing',
  buttonUrl = 'portfolio',
  buttonText = 'Featured Work',
  buttonVariant = 'white'
}) => (
  <StyledHeader angle={angle}>
    <HeaderText>
      <h1>
        <div>
          {textTop}<span>.</span>
        </div>
        <div>
          <span>{textBottom}</span>.
        </div>
      </h1>
      <TextButton to={'/' + buttonUrl} text={buttonText} variant={buttonVariant} />
    </HeaderText>
    <HeaderImage
      fluid={imageSrc}
      height={height}
      alt={imageAlt}
      title={imageTitle}
    />
  </StyledHeader>
)

Banner.propTypes = {
  imageSrc: PropTypes.object,
  imageAlt: PropTypes.string,
  imageTitle: PropTypes.string,
  angle: PropTypes.string,
  height: PropTypes.number,
  textTop: PropTypes.string,
  textBottom: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.string,
}

const StyledHeader = styled.header`
  position: relative;

  ${({ angle }) => angle === 'LTR' && css`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
  `}
  ${({ angle }) => angle === 'RTL' && css`
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);
  `}
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
  span {
    color: ${props => props.theme.colors.primary};
  }
`
const HeaderImage = styled(Img)`
  height: ${({ height }) => height ?? 100}vh;
  user-select: none;
`
