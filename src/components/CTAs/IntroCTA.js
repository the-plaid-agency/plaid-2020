import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { Section, Row as Row_, Col, Button as Button_ } from 'components'
import imgIconBowtieGrey from 'assets/icon_bowtie_grey.svg'

export const IntroCTA = () => (
  <StyledIntroCTA>
    <Row>
      <Col>
        <h1>Lorem Ipsum<br /> Dolor Amet</h1>
        <SubTitle>What We Do</SubTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Volutpat ac
          tincidunt vitae semper quis lectus nulla at volutpat. Pellentesque
          adipiscing commodo elit at imperdiet dui accumsan.
        </Text>
        <Button to="/" text="About Our Company" />
      </Col>
    </Row>
  </StyledIntroCTA>
)

const StyledIntroCTA = styled(Section)``
const Row = styled(Row_)`
  max-width: 1100px;
`
const SubTitle = styled.h6`
  background-image: url(${imgIconBowtieGrey});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: auto 18px;
  color: ${props => props.theme.colors.primary};
  padding-left: 60px;
`
const Text = styled.p`
  margin-left: 60px;
  max-width: 460px;
`
const Button = styled(Button_)`
  margin-left: 60px;
`
