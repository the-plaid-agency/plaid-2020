import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { Section, Row as Row_, Col, Button } from 'components'

export const IntroCTA = () => (
  <StyledIntroCTA>
    <Row>
      <Col>
        <h1>Lorem Ipsum<br /> Dolor Amet</h1>
        <h6>What We Do</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Volutpat ac
          tincidunt vitae semper quis lectus nulla at volutpat. Pellentesque
          adipiscing commodo elit at imperdiet dui accumsan.
        </p>
        <Button to="/" text="About Our Company" />
      </Col>
    </Row>
  </StyledIntroCTA>
)

const StyledIntroCTA = styled(Section)``
const Row = styled(Row_)`
  max-width: 1100px;
`
