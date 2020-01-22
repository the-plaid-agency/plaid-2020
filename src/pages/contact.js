import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Page,
  SEO,
  Banner,
  Section,
  Row,
  Col,
  Footer,
  Button as Button_,
  TextButton as TextButton_,
} from 'components'

export default () => {
  const { datoCmsContact: { bannerData } } = useStaticQuery(graphql`
    query {
      datoCmsContact {
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
      <SEO title="Contact" />
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
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <p>Body Font</p>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do. Anim eiusmod aliquip nostrud consectetur anim ex aute nulla elit consequat exercitation occaecat sint. Nisi laborum nisi aute proident eiusmod Lorem ipsum sint. Laborum sunt proident exercitation aliqua irure consectetur est nulla veniam veniam dolor quis dolore. Eiusmod nostrud sit dolor velit fugiat cupidatat dolor.</p>
            <Button text="View Project" to="/about" />
            <Button white text="View Project" to="/about" />
            <TextButton text="Featured Work" to="/about" />
            <TextButton black text="Featured Work" to="/about" />
            <TextButton orange text="Featured Work" to="/about" />
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}

const Button = styled(Button_)`
  margin-bottom: 2.5rem;
`
const TextButton = styled(TextButton_)`
  margin-bottom: 2.5rem;
`
