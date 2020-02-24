import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Row,
  Col as Col_,
  Anchor as Anchor_,
  Logo,
  Social as Social_,
  Copyright,
} from 'components'
import { media } from 'utils'

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
        <Col width="49%">
          <h4>
            <span>{footer.cta} </span>
            <Anchor to={'/' + footer.ctaLinkPage}>
              {footer.ctaLinkText}
            </Anchor>
          </h4>
          <Logo />
        </Col>
        <Col align="flex-end" justify="space-between" width="49%">
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
const Col = styled(Col_)`
  ${media.tablet`
    align-items: flex-start;
    width: 100%;
  `}
`
const Social = styled(Social_)`
  margin-bottom: ${props => props.theme.layout.margin};
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
const Anchor = styled(Anchor_)`
  border-bottom: 2px solid ${props => props.theme.colors.transparent};
  transition: ${props => props.theme.transitions.default};
  :hover {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`
