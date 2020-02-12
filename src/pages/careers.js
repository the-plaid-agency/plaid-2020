import React from 'react'
import { Page, SEO, Banner, OutroCTA, Footer } from 'components'
import { useCareerApi } from 'hooks'

export default () => {
  const { seo, bannerData, outroData } = useCareerApi()
  const banner = bannerData[0]
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
