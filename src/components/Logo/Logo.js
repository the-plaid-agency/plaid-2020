import React, { useState } from 'react'
import styled from 'styled-components'
import { Anchor } from 'components'
import { routes } from 'utils'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export const Logo = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll], false, false, 300)

  return (
    <StyledLogo direction="right" to={routes.home}>
      <SvgLogo show={hideOnScroll ? 1 : 0} width="59px" height="26px" viewBox="0 0 59 26">
        <g id="Website" stroke="none">
          <g id="Home-Page-PFD-v2" transform="translate(-84.000000, -60.000000)">
            <g id="White-Bowtie-Copy" transform="translate(84.000000, 60.000000)">
              <path d="M5.47342173,7.23624389 C5.47342173,4.43343957 4.56079106,3.03243229 2.73631715,3.03243229 L2.73631715,11.4400555 C4.56079106,11.4400555 5.47342173,10.0390482 5.47342173,7.23624389 L5.47342173,7.23624389 Z M0,25.4532873 L0,0.229627976 C5.47342173,-0.353993434 8.21052632,1.83517917 8.21052632,6.79793552 C8.21052632,11.7614816 6.38526498,14.2428598 2.73631715,14.2428598 L2.73631715,25.4532873 L0,25.4532873 Z" id="Fill-1"></path>
              <polygon id="Fill-3" points="13.6842105 25.4532873 13.6842105 0.137497833 16.4213151 0.137497833 16.4213151 22.6402457 21.8947368 22.6402457 21.8947368 25.4532873"></polygon>
              <path d="M31.5590547,17.014955 L32.8425646,17.014955 L32.1582885,8.57662274 L31.5590547,17.014955 Z M28.0526316,25.4532873 L30.7889487,0.137497833 L33.5260533,0.137497833 L36.2631579,25.4532873 L33.5260533,25.4532873 L32.927607,19.8279967 L31.3881825,19.8279967 L30.7889487,25.4532873 L28.0526316,25.4532873 Z" id="Fill-5"></path>
              <polygon id="Fill-7" points="42.4210526 25.4532873 45.1578947 25.4532873 45.1578947 0.137497833 42.4210526 0.137497833"></polygon>
              <path d="M53.3126301,21.4538047 C54.7649947,20.3703143 55.6442807,18.6630441 55.9520309,16.3335793 C56.2582384,14.0041145 56.2304714,11.5288105 55.8679588,8.90608202 C55.5054461,6.28414615 54.6531557,4.64979556 53.3126301,4.00540806 L53.3126301,21.4538047 Z M50.6315789,25.4532873 L50.6315789,0.137497833 C56.104749,0.137497833 58.8421053,4.35732448 58.8421053,12.7953926 C58.8421053,21.2342533 56.104749,25.4532873 50.6315789,25.4532873 L50.6315789,25.4532873 Z" id="Fill-9"></path>
            </g>
          </g>
        </g>
      </SvgLogo>
    </StyledLogo>
  )
}

const StyledLogo = styled(Anchor)`
  pointer-events: auto;
`
const SvgLogo = styled.svg`
  fill: ${props => props.show ? props.theme.colors.white : props.theme.colors.primary};
  transition: ${props => props.theme.transitions.default};
  ${StyledLogo}:hover & {
    fill: ${props => props.theme.colors.primary};
  }
`
