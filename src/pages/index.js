import React from 'react'
import styled from 'styled-components'
import {
  Page,
  SEO,
  Banner,
  IntroCTA,
  FeaturedPortfolioItem,
  Section,
  Row,
  Col,
  TextButton as TextButton_,
  PartnerCTA,
  FeaturedPortfolioList,
  OutroCTA,
  Footer,
} from 'components'
import { useHomeApi, usePortfolioItemApi } from 'hooks'
import { routes } from 'utils'
import imgTexturePlaid3 from 'assets/texture_plaid_3.svg'

export default () => {
  const { seo, bannerData, introData, partnerData, outroData } = useHomeApi()
  const { portfolioItem } = usePortfolioItemApi()
  const banner = bannerData[0]
  const intro = introData[0]
  const items = portfolioItem.filter(data => data.featured)
  const partner = partnerData[0]
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
      <IntroCTA
        title={intro.title}
        subTitle={intro.subTitle}
        text={intro.text}
        buttonText={intro.buttonText}
        buttonUrl={intro.buttonUrl}
      />
      {items.map((data, i) => {
        let key = i + 1
        return (
          <FeaturedPortfolioItem
            key={key}
            name={data.name}
            fullName={data.fullName}
            tags={data.tags}
            shortDescription={data.shortDescription}
            logo={data.logo}
            featuredImage={data.featuredImage}
            variant={key % 2 === 0 ? 'green' : 'default'}
          />
        )
      })}
      <Bg>
        <Section>
          <Row>
            <Col align="center">
              <TextButton to={routes.portfolio} text="See More Work" />
            </Col>
          </Row>
        </Section>
        <PartnerCTA
          title={partner.title}
          subTitle={partner.subTitle}
          text={partner.text}
          buttonText={partner.buttonText}
          buttonUrl={partner.buttonUrl}
        />
      </Bg>
      <FeaturedPortfolioList number={9} />
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

const Bg = styled.div`
  background-image: url(${imgTexturePlaid3});
  background-position: left -20px top;
  background-repeat: no-repeat;
  background-size: 340px auto;
`
const TextButton = styled(TextButton_)`
  font-size: 26px;
  font-weight: ${props => props.theme.fonts.bold};
`
