import React from 'react'
import styled from 'styled-components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import logoPlaid from 'assets/logo_plaid_1.svg'

export const Logo = () => (
  <StyledLogo>
    <AniLink cover direction="left" bg="#FF671D" to="/">
      <img src={logoPlaid} alt="THE PLAID AGENCY" />
    </AniLink>
  </StyledLogo>
)

const StyledLogo = styled.div``
const AniLink = styled(AniLink_)`
  pointer-events: auto;
  transition: ${props => props.theme.transitions.default};

  :hover {
    opacity: 0.75;
  }
`
