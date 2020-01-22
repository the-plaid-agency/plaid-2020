import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Page, Banner, Section, Row, Col, Footer, Button } from 'components'

export default () => {
  const { datoCmsHome: { bannerData } } = useStaticQuery(graphql`
    query {
      datoCmsHome {
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
            <h1>Lorem Ipsum</h1>
            <h1>Dolor Amet</h1>
            <h6>What We Do</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
              Pellentesque adipiscing commodo elit at imperdiet dui accumsan.
            </p>
            <Button text="Test" to="/">Test</Button>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}
