import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Section,
  Row as Row_,
  Col as Col_,
  Button,
} from 'components'
import imgTexturePlaid1 from 'assets/texture_plaid_1.svg'

export const OutroCTA = ({
  textTop = 'Lorem Ipsum',
  textBottom = 'Dolor Amet',
  text = 'Content coming soon!',
  buttonText = 'Button',
  buttonUrl = 'about',
}) => (
  <StyledOutroCTA>
    <Row>
      <Col width="60%">
        <Title>
          <div>
            {textTop}
          </div>
          <div>
            <span>{textBottom}</span>
          </div>
        </Title>
      </Col>
      <Col width="40%">
        <Text>{text}</Text>
        <Button to={'/' + buttonUrl} text={buttonText} />
      </Col>
    </Row>
  </StyledOutroCTA>
)

OutroCTA.propTypes = {
  textTop: PropTypes.string,
  textBottom: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
}

const StyledOutroCTA = styled(Section)`
  background-image: url(${imgTexturePlaid1});
  background-position: right -20px bottom -50px;
  background-repeat: no-repeat;
  background-size: auto 75%;
  padding-bottom: ${props => props.theme.layout.paddingHuge};
  padding-top: ${props => props.theme.layout.paddingGiant};
`
const Row = styled(Row_)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
`
const Col = styled(Col_)`
  /* Media Query Stuff Here */
`
const Title = styled.h1`
  span {
    color: ${props => props.theme.colors.primary};
  }
`
const Text = styled.h4`
  max-width: 460px;
`
