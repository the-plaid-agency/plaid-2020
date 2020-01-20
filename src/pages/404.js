import React from 'react'
import { Page, SEO, Section, Row, Col, Footer } from 'components'

export default () => {
  return (
    <Page>
      <SEO title="404" />
      <Section>
        <Row>
          <Col>
            <p>404 page</p>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}
