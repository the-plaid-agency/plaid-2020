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
import { useTeamApi, usePillarListApi } from 'hooks'
import { media } from 'utils'
import imgIconBowtieGrey from 'assets/icon_bowtie_grey.svg'
import imgIconBowtieOrange from 'assets/icon_bowtie_orange.svg'

export default () => {
  const {
    seo,
    bannerData,
    introData,
    pillarsTitleData,
    serviceTitleData,
    teamGridData,
    outroData,
  } = useTeamApi()
  const { pillarList } = usePillarListApi()
  const banner = bannerData[0]
  const intro = introData[0]
  const pillarsTitle = pillarsTitleData[0]
  const serviceTitle = serviceTitleData[0]
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
        <PillarsArrow />
        <PillarsRow>
          <Col>
            <PillarsTitle>{pillarsTitle.title}</PillarsTitle>
            <PillarsSubTitle>{pillarsTitle.subTitle}</PillarsSubTitle>
          </Col>
        </PillarsRow>
        <Row>
          {pillarList.map((data, i) => {
            const green = i % 2 !== 0
            return (
              <PillarsCol key={data.letter} width="17%">
                <PillarsLetter variant={green && 'green'}>{data.letter}</PillarsLetter>
                <PillarTitle>{data.title}</PillarTitle>
              </PillarsCol>
            )
          })}
        </Row>
        <PilarsBgText>We Are</PilarsBgText>
      </PillarsSection>
      <OurServicesSection>
        <OurServicesArrow />
        <OurServicesRow justify="center">
          <Col last>
            <h1>{serviceTitle.title}</h1>
            <OurServicesSubTitle>{serviceTitle.subTitle}</OurServicesSubTitle>
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
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  flex-direction: column;
  overflow: hidden;
  position: relative;
  z-index: 1;
`
const PillarsArrow = styled.div`
  position: absolute;
  top: 0;
  width: 90vw;
  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 60px solid #fff;
    content: '';
  }
`
const PillarsRow = styled(Row)`
  max-width: ${props => props.theme.layout.maxWidthFixed};
  margin-bottom: ${props => props.theme.layout.marginBig};
`
const PillarsCol = styled(Col)`
  ${media.tablet`
    width: 49%;
  `}
  ${media.phone`
    width: 100%;
  `}
`
const PilarsBgText = styled.div`
  align-items: center;
  color: #4b4b4b;
  display: flex;
  font-family: ${props => props.theme.fonts.playfairDisplay};
  font-size: 500px;
  justify-content: center;
  line-height: 1;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  user-select: none;
  z-index: -1;
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
  font-size: 240px;
  justify-content: center;
  min-height: 450px;
  overflow: hidden;
  padding-bottom: 30px;
  width: 100%;
  ${({ variant }) => variant === 'green' && css`
    background-color: ${props => props.theme.colors.quaternary};
  `}
`
const PillarTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 2.0625em;
  text-align: center;
  width: 100%;
`

const OurServicesSection = styled(Section)`
  padding-bottom: 0;
  position: relative;
`
const OurServicesArrow = styled.div`
  position: absolute;
  top: 0;
  width: 90vw;
  :before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 60px solid ${props => props.theme.colors.secondary};
    content: '';
  }
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
