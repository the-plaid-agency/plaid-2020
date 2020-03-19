import React from 'react'
import styled, { css } from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import PropTypes from 'prop-types'
import { TextButton } from 'components'
import { Waypoint } from 'react-waypoint'
import Img from 'gatsby-image'
import { media } from 'utils'

export const Banner = ({
  image: {
    fluid,
    alt = '',
    title = '',
  },
  angle = 'none',
  height = 100,
  textTop = 'Lorem Ipsum Dolor Sit Amet',
  textBottom = 'Consectetur Adipiscing',
  buttonText = 'Featured Work',
  buttonUrl = 'portfolio',
  buttonVariant = 'white',
}) => {
  const activateTopBar = useStoreActions(actions => actions.topBar.activateTopBar)
  const deactivateTopBar = useStoreActions(actions => actions.topBar.deactivateTopBar)

  const handleWaypointEnter = () => {
    console.log("Entering")
    deactivateTopBar()
  }
  const handleWaypointLeave = () => {
    console.log("Leaving")
    activateTopBar()
  }

  return (
    <StyledHeader angle={angle}>
      <HeaderContainer>
        <HeaderText>
          {textTop &&
            <div>
              {textTop}<span>.</span>
            </div>
          }
          {textBottom &&
            <div>
              <span>{textBottom}</span>.
            </div>
          }
        </HeaderText>
        <TextButton to={'/' + buttonUrl} text={buttonText} variant={buttonVariant} />
      </HeaderContainer>
      <HeaderImage
        fluid={fluid}
        alt={alt}
        title={title}
        height={height}
      />
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} topOffset="180px" />
    </StyledHeader>
  )
}

Banner.propTypes = {
  image: PropTypes.exact({
    fluid: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
  angle: PropTypes.string,
  height: PropTypes.number,
  textTop: PropTypes.string,
  textBottom: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonVariant: PropTypes.string,
}

const StyledHeader = styled.header`
  position: relative;
  ${({ angle }) => angle === 'ltr' && css`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
  `}
  ${({ angle }) => angle === 'rtl' && css`
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);
  `}
`
const HeaderContainer = styled.div`
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
`
const HeaderText = styled.h1`
  color: ${props => props.theme.colors.white};
  text-align: center;
  user-select: none;
  span {
    color: ${props => props.theme.colors.primary};
  }
  ${media.wrap`
    font-size: 5vw;
  `}
`
const HeaderImage = styled(Img)`
  height: ${({ height }) => height ?? 100}vh;
  user-select: none;
`
