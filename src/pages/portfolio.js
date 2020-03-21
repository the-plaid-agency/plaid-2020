import React from 'react'
import styled from 'styled-components'
import {
  Page,
  SEO,
  Banner,
  Section,
  Row as Row_,
  Col,
  OutroCTA,
  Footer,
} from 'components'
import { usePortfolioApi } from 'hooks'

export default () => {
  const { seo, bannerData, portfolioIntroData, outroData } = usePortfolioApi()
  const banner = bannerData[0]
  const intro = portfolioIntroData[0]
  const outro = outroData[0]

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Banner
        image={banner.image}
        angle={banner.angle}
        height={banner.height}
        textTop={banner.textTop}
        textBottom={banner.textBottom}
        buttonText={banner.buttonText}
        buttonUrl={banner.buttonUrl}
        buttonVariant={banner.buttonVariant}
      />
      <Section>
        <Row>
          <Col>
            <IntroText>{intro.introTitle}</IntroText>
            <h1>{intro.text}</h1>
          </Col>
        </Row>
      </Section>
      <OutroCTA
        textTop={outro.textTop}
        textBottom={outro.textBottom}
        text={outro.text}
        buttonText={outro.buttonText}
        buttonUrl={outro.buttonUrl}
      />
      <Footer />
    </Page>
  )
}

const Row = styled(Row_)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
`
const IntroText = styled.h6`
  color: ${props => props.theme.colors.primary};
`
