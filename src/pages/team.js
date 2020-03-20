import React from 'react'
import styled, { css } from 'styled-components'
import {
  Page,
  SEO,
  Banner,
  IntroCTA,
  Section,
  Row,
  Col,
  OutroCTA,
  ServiceList,
  EmployeeGrid,
  Footer,
} from 'components'
import { useTeamApi } from 'hooks'
import imgIconBowtieGrey from 'assets/icon_bowtie_grey.svg'
import imgIconBowtieOrange from 'assets/icon_bowtie_orange.svg'

export default () => {
  const { seo, bannerData, introData, teamGridData, outroData } = useTeamApi()
  const banner = bannerData[0]
  const intro = introData[0]
  const teamGrid = teamGridData[0]
  const outro = outroData[0]

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
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
      <IntroCTA
        title={intro.title}
        subTitle={intro.subTitle}
        text={intro.text}
        buttonText={intro.buttonText}
        buttonUrl={intro.buttonUrl}
      />
      <PillarsSection>
        <PillarsRow>
          <Col>
            <PillarsTitle>PLAID Pillars</PillarsTitle>
            <PillarsSubTitle>Who We Are</PillarsSubTitle>
          </Col>
        </PillarsRow>
        <PillarsRow>
          <Col width="19%">
            <PillarsLetter>P</PillarsLetter>
            <PillarText>Partnership</PillarText>
          </Col>
          <Col width="19%">
            <PillarsLetter variant="green">L</PillarsLetter>
            <PillarText>Lifelong Learning</PillarText>
          </Col>
          <Col width="19%">
            <PillarsLetter>A</PillarsLetter>
            <PillarText>Activators</PillarText>
          </Col>
          <Col width="19%">
            <PillarsLetter variant="green">I</PillarsLetter>
            <PillarText>Integrity</PillarText>
          </Col>
          <Col width="19%">
            <PillarsLetter>D</PillarsLetter>
            <PillarText>Dedication</PillarText>
          </Col>
        </PillarsRow>
      </PillarsSection>
      <OurServicesSection>
        <OurServicesRow justify="center">
          <Col last>
            <h1>Full-Service Agency</h1>
            <OurServicesSubTitle>Our Services</OurServicesSubTitle>
          </Col>
        </OurServicesRow>
      </OurServicesSection>
      <ServiceList />
      <SectionMeetYourTeam>
        <Row justify="center">
          <Col width="740px" last>
            <h1>
              {teamGrid.title}
              <span>.</span>
            </h1>
            <p>{teamGrid.description}</p>
          </Col>
        </Row>
      </SectionMeetYourTeam>
      <EmployeeGrid
        title={teamGrid.title}
        description={teamGrid.description}
        workHereTitle={teamGrid.workHereTitle}
        workHereDescription={teamGrid.workHereDescription}
      />
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


const PillarsSection = styled(Section)`
  background-color: ${props => props.theme.colors.secondary};
  flex-direction: column;
  align-items: center;
`
const PillarsRow = styled(Row)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
`
const PillarsTitle = styled.h1`
  color: ${props => props.theme.colors.white};
`
const PillarsSubTitle = styled.h6`
  background-image: url(${imgIconBowtieOrange});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: auto 18px;
  color: ${props => props.theme.colors.white};
  padding-left: 60px;
`
const PillarsLetter = styled.h1`
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: 10vw;
  justify-content: center;
  min-height: 450px;
  width: 100%;
  ${({ variant }) => variant === 'green' && css`
    background-color: ${props => props.theme.colors.quaternary};
  `}
`
const PillarText = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 2.0625em;
  text-align: center;
  width: 100%;
`

const OurServicesSection = styled(Section)`
  padding-bottom: 0;
`
const OurServicesRow = styled(Row)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
`
const OurServicesSubTitle = styled.h6`
  background-image: url(${imgIconBowtieGrey});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: auto 18px;
  color: ${props => props.theme.colors.primary};
  padding-left: 60px;
`

const SectionMeetYourTeam = styled(Section)`
  padding-top: 0;
  padding-bottom: 0;
  span {
    color: ${props => props.theme.colors.primary};
  }
`
