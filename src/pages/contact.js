import React from 'react'
import styled from 'styled-components'
import {
  Page,
  SEO,
  Banner,
  OutroCTA,
  Section,
  Row,
  Col,
  Footer,
  Button as Button_,
  TextButton as TextButton_,
} from 'components'
import { useContactApi } from 'hooks'

export default () => {
  const { seo, bannerData, outroData } = useContactApi()
  const banner = bannerData[0]
  const outro = outroData[0]

  return (
    <Page>
      <SEO
        title={seo.title}
        description={seo.description}
      />
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
            <Button to="/team" text="View Project" variant="white" />
            <Button to="/team" text="View Project" variant="black" />
            <TextButton text="Featured Work" />
            <TextButton to="/team" text="Featured Work" variant="white" />
            <TextButton to="/team" text="Featured Work" variant="orange" />
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

const Button = styled(Button_)`
  margin-bottom: 2.5rem;
`
const TextButton = styled(TextButton_)`
  margin-bottom: 2.5rem;
`
