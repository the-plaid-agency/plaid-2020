import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Page,
  Section,
  Row,
  Footer,
  OrangeButton as OrangeButton_,
  WhiteButton as WhiteButton_,
  BlackTextButton as BlackTextButton_,
} from 'components'

export default () => (
  <>
    <SEO title="Portfolio" />
    <Page>
      <Section>
        <Row>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
          <p>Body Font</p>
          <OrangeButton text="View Project" to="/about" />
          <WhiteButton text="View Project" to="/about" />
          <BlackTextButton text="Featured Work" to="/about" />
        </Row>
      </Section>
      <Footer />
    </Page>
  </>
)

const OrangeButton = styled(OrangeButton_)`
  margin-bottom: 2.5rem;
`
const WhiteButton = styled(WhiteButton_)`
  margin-bottom: 2.5rem;
`
const BlackTextButton = styled(BlackTextButton_)`
  margin-bottom: 2.5rem;
`
