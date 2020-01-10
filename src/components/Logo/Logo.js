import React from 'react'
import styled from 'styled-components'
import { Image } from 'components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
// import logoPlaid from 'assets/logo_plaid_1.svg'
import logoPlaid from 'assets/logo_plaid_1.png'

export const Logo = () => (
  <AniLink cover direction="left" bg="#FF671D" to="/">
    <Image src={logoPlaid} alt="nba-ref" />
    {/* <Image src="/logo_plaid_1.svg" alt="nba-ref" /> */}
  </AniLink>
)

const AniLink = styled(AniLink_)`
  transition: ${props => props.theme.transitions.default};

  :hover {
    opacity: 0.75;
  }
`
