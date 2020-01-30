import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Page, SEO, Banner, IntroCTA, Footer } from 'components'

export default () => {
  const { datoCmsTeam: { bannerData, introData, seo } } = useStaticQuery(graphql`
    query {
      datoCmsTeam {
        bannerData {
          angle
          height
          textTop
          textBottom
          buttonUrl
          buttonText
          buttonVariant
          image {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
        }
        introData {
          title
          subText
          text
          buttonText
          buttonUrl
        }
        seo {
          title
          description
        }
      }
    }
  `)
  const banner = bannerData[0]
  const intro = introData[0]

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Banner
        imageSrc={banner.image.fluid}
        imageAlt={banner.image.alt}
        imageTitle={banner.image.title}
        angle={banner.angle}
        height={banner.height}
        textTop={banner.textTop}
        textBottom={banner.textBottom}
        buttonUrl={banner.buttonUrl}
        buttonText={banner.buttonText}
        buttonVariant={banner.buttonVariant}
      />
      <IntroCTA
        title={intro.title}
        subText={intro.subText}
        text={intro.text}
        buttonText={intro.buttonText}
        buttonUrl={intro.buttonUrl}
      />
      <Footer />
    </Page>
  )
}
