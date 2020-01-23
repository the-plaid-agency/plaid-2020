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
  const { datoCmsContact: { bannerData, seo } } = useStaticQuery(graphql`
    query {
      datoCmsContact {
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
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <p>Body Font</p>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do. Anim eiusmod aliquip nostrud consectetur anim ex aute nulla elit consequat exercitation occaecat sint. Nisi laborum nisi aute proident eiusmod Lorem ipsum sint. Laborum sunt proident exercitation aliqua irure consectetur est nulla veniam veniam dolor quis dolore. Eiusmod nostrud sit dolor velit fugiat cupidatat dolor.</p>
            <Button to="/about" text="View Project" />
            <Button to="/about" text="View Project" variant="white" />
            <Button to="/about" text="View Project" variant="black" />
            <TextButton to="/about" text="Featured Work" />
            <TextButton to="/about" text="Featured Work" variant="white" />
            <TextButton to="/about" text="Featured Work" variant="orange" />
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
