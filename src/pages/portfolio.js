import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Page, SEO, Banner, Section, Row, Col, Footer } from 'components'

export default () => {
  const { datoCmsPortfolio: { bannerData, seo } } = useStaticQuery(graphql`
    query {
      datoCmsPortfolio {
        bannerData {
          angle
          height
          textTop
          textBottom
          buttonUrl
          buttonText
          buttonVariant
          image {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
        }
        seo {
          title
          description
        }
      }
    }
  `)
  const banner = bannerData[0]

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Banner
        imageSrc={banner.image.fluid}
        imageAlt={banner.image.alt}
        imageTitle={banner.image.title}
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
            <p>Portfolio page</p>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}
