import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Section,
  Row as Row_,
  Col as Col_,
  TextButton as TextButton_,
} from 'components'
import imgTexturePlaid2 from 'assets/texture_plaid_2.svg'
import imgIconBowtieGrey from 'assets/icon_bowtie_grey.svg'

export const PartnerCTA = ({
  title = 'Lorem Ipsum',
  subTitle = 'Dolor Amet',
  text = 'Content coming soon!',
  buttonText = 'Button',
  buttonUrl = 'team',
}) => (
  <StyledPartnerCTA>
    <Row>
      <Col>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
        <Bowtie src={imgIconBowtieGrey} alt="Bowtie Image" />
        <Text>{text}</Text>
        <TextButton to={'/' + buttonUrl} text={buttonText} />
      </Col>
    </Row>
  </StyledPartnerCTA>
)

PartnerCTA.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
}

const StyledPartnerCTA = styled(Section)`
  background-image: url(${imgTexturePlaid2});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 200px auto;
  padding-bottom: ${props => props.theme.layout.paddingHuge};
  padding-top: ${props => props.theme.layout.paddingGiant};
`
const Row = styled(Row_)`
  max-width: ${props => props.theme.layout.maxWidthFixedSmall};
`
const Col = styled(Col_)``
const SubTitle = styled.h6`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`
const Bowtie = styled.img`
  max-height: 18px;
  margin-bottom: ${props => props.theme.layout.padding};
`
const Title = styled.h3`
  max-width: 500px;
`
const Text = styled.p`
  max-width: 460px;
`
const TextButton = styled(TextButton_)``
