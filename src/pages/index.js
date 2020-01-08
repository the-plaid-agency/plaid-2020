import React from 'react'
import { Page, Section, Row, OrangeButton, WhiteButton } from 'components'

export default () => (
  <>
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
          <OrangeButton text="View Project" to="/about" type="white" />
          <WhiteButton text="View Project" to="/about" color="white" />
        </Row>
      </Section>
    </Page>
  </>
)
