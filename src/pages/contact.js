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
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do.</p>
            <h1>Header 1</h1>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do.</p>
            <h2>Header 2</h2>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do.</p>
            <h3>Header 3</h3>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do.</p>
            <h4>Header 4</h4>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do.</p>
            <h5>Header 5</h5>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do.</p>
            <h6>Header 6</h6>
            <p>Sunt ipsum sint ad <a href="https://www.google.com/">dolore</a> consequat do amet minim. Culpa Lorem duis ullamco non mollit ad amet. Aute commodo aliquip qui do.</p>
            <Button text="View Project" />
            <Button to="/about" text="View Project" variant="white" />
            <Button to="/about" text="View Project" variant="black" />
            <TextButton text="Featured Work" />
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
