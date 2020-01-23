import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Page, SEO, Banner, Section, Row, Col, Footer, Button } from 'components'

export default () => {
  const { datoCmsHome: { bannerData, seo } } = useStaticQuery(graphql`
    query {
      datoCmsHome {
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
        buttonUrl={banner.buttonUrl}
        buttonText={banner.buttonText}
        buttonVariant={banner.buttonVariant}
      />
      <Section>
        <Row>
          <Col>
            <h1>Lorem Ipsum<br />Dolor Amet</h1>
            <h6>What We Do</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
              Pellentesque adipiscing commodo elit at imperdiet dui accumsan.
            </p>
            <Button to="/" text="About Our Company" />
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}
