import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col, Logo, Social as Social_ } from 'components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const Footer = () => {
  const { datoCmsFooter: footer } = useStaticQuery(graphql`
    query {
      datoCmsFooter {
        copyright
        cta
        ctaLinkPage
        ctaLinkText
      }
    }
  `)

  return (
    <StyledFooter>
      <Row>
        <Col width="50%">
          <h4>
            <span>{footer.cta} </span>
            <AniLink
              cover
              direction="left"
              bg="#FF671D"
              activeClassName="active"
              to={'/' + footer.ctaLinkPage}>
              {footer.ctaLinkText}
            </AniLink>
          </h4>
          <Logo />
        </Col>
        <Col align="flex-end" justify="space-between" width="50%">
          <Social />
          <Copyright>{footer.copyright}</Copyright>
        </Col>
      </Row>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-top: ${props => props.theme.layout.paddingBig};
  padding-right: ${props => props.theme.layout.padding};
  padding-bottom: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
`
const Social = styled(Social_)`
  margin-bottom: ${props => props.theme.layout.margin};
`
const AniLink = styled(AniLink_)`
  border-bottom: 2px solid ${props => props.theme.colors.transparent};
  transition: ${props => props.theme.transitions.default};
  :hover {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`
const Copyright = styled.p`
  font-size: 14px;
`
