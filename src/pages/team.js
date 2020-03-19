import React from 'react'
import styled from 'styled-components'
import {
  Page,
  SEO,
  Banner,
  IntroCTA,
  Section,
  Row,
  Col,
  OutroCTA,
  EmployeeGrid,
  Footer,
} from 'components'
import { useTeamApi } from 'hooks'

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
      <MeetYourTeam>
        <Row justify="center">
          <Col width="740px">
            <h1>{teamGrid.title}<span>.</span></h1>
            <p>{teamGrid.description}</p>
          </Col>
        </Row>
      </MeetYourTeam>
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

const MeetYourTeam = styled(Section)`
  padding-bottom: 0;
  span {
    color: ${props => props.theme.colors.primary};
  }
`
