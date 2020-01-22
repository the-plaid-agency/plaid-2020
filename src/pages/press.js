import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Page, SEO, Banner, Section, Row, Col, Footer } from 'components'

export default () => {
  const { datoCmsPress: { bannerData } } = useStaticQuery(graphql`
    query {
      datoCmsPress {
        bannerData {
          angle
          height
          textTop
          textBottom
          buttonUrl
          buttonText
          image {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
        }
      }
    }
  `)
  const banner = bannerData[0]

  return (
    <Page>
      <SEO title="Press" />
      <Banner
        imageSrc={banner.image.fluid}
        imageAlt={banner.image.alt}
        imageTitle={banner.image.title}
        angle={banner.angle}
        height={banner.height}
        textTop={banner.textTop}
        textBottom={banner.textBottom}
        buttonUrl={banner.buttonUrl}
        buttonText={banner.buttonText}
      />
      <Section>
        <Row>
          <Col>
            <p>Press page</p>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}