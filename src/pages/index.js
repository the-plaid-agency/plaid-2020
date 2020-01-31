import React from 'react'
import { useHomeData } from 'hooks'
import { Page, SEO, Banner, IntroCTA, OutroCTA, Footer } from 'components'

export default () => {
  const { seo, bannerData, introData, outroData } = useHomeData()
  const banner = bannerData[0]
  const intro = introData[0]
  const outro = outroData[0]

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
        buttonText={banner.buttonText}
        buttonUrl={banner.buttonUrl}
        buttonVariant={banner.buttonVariant}
      />
      <IntroCTA
        title={intro.title}
        subText={intro.subText}
        text={intro.text}
        buttonText={intro.buttonText}
        buttonUrl={intro.buttonUrl}
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
