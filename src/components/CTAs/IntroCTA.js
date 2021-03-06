import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Section,
  Row as Row_,
  Col as Col_,
  Button as Button_,
} from 'components'
import imgTexturePlaid1 from 'assets/texture_plaid_1.svg'
import imgIconBowtieGrey from 'assets/icon_bowtie_grey.svg'

export const IntroCTA = ({
  title = 'Lorem Ipsum',
  subTitle = 'Dolor Amet',
  text = 'Content coming soon!',
  buttonText = 'Button',
  buttonUrl = 'team',
}) => (
  <StyledIntroCTA>
    <Row>
      <Col>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Text>{text}</Text>
        <Button to={'/' + buttonUrl} text={buttonText} />
      </Col>
    </Row>
  </StyledIntroCTA>
)

IntroCTA.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
}

const StyledIntroCTA = styled(Section)`
  padding-bottom: ${props => props.theme.layout.paddingHuge};
  padding-top: ${props => props.theme.layout.paddingGiant};
`
const Row = styled(Row_)`
  max-width: ${props => props.theme.layout.maxWidthFixedSmall};
`
const Col = styled(Col_)`
  background-image: url(${imgTexturePlaid1});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 340px auto;
`
const Title = styled.h1`
  max-width: 500px;
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
