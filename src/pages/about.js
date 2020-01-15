import React from 'react'
import { SEO, Page, Section, Row, Col, Footer } from 'components'

export default () => (
  <Page>
    <SEO title="About" />
    <Section>
      <Row>
        <Col>
          <p>About page</p>
        </Col>
      </Row>
    </Section>
    <Footer />
  </Page>
)
