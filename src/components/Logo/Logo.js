import React from 'react'
import styled from 'styled-components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import logoPlaid from 'assets/logo_plaid_1.svg'

export const Logo = () => (
  <AniLink cover direction="left" bg="#FF671D" to="/">
    <img src={logoPlaid} alt="THE PLAID AGENCY" />
  </AniLink>
)

const AniLink = styled(AniLink_)`
  transition: ${props => props.theme.transitions.default};

  :hover {
    opacity: 0.75;
  }
`
