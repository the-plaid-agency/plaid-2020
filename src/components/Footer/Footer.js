import React from 'react'
import styled from 'styled-components'
import { Row, Logo } from 'components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const Footer = () => (
  <StyledFooter>
    <Row>
      <h4>
        <span>Like what you see? </span>
        <AniLink
          cover
          direction="left"
          bg="#FF671D"
          activeClassName="active"
          to="/contact">
          Contact Us.
        </AniLink>
      </h4>
      <Logo />
    </Row>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: #fff;
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 60px 30px;
`
const AniLink = styled(AniLink_)`
  border-bottom: 2px solid ${props => props.theme.colors.transparent};
  transition: ${props => props.theme.transitions.default};
  :hover {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`
