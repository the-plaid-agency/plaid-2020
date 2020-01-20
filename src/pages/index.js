import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Page, Banner, Section, Row, Col, Footer } from 'components'

export default () => {
  const { datoCmsHome: { bannerData } } = useStaticQuery(graphql`
    query {
      datoCmsHome {
        bannerData {
          textTop
          textBottom
          buttonUrl
          buttonText
          image {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
            alt,
            title,
          }
        }
      }
    }
  `)
  const banner = bannerData[0]

  return (
    <Page>
      <Banner
        imageSrc={banner.image.fluid}
        imageAlt={banner.image.alt}
        imageTitle={banner.image.title}
        textTop={banner.textTop}
        textBottom={banner.textBottom}
        buttonUrl={banner.buttonUrl}
        buttonText={banner.buttonText}
      />
      <Section>
        <Row>
          <Col>
            <p>Home page</p>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}
