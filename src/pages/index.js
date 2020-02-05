import React, { useMemo } from 'react'
import { Page, SEO, Banner, IntroCTA, FeaturedPortfolioItem, OutroCTA, Footer } from 'components'
import { useHomeApi, usePortfolioItemApi } from 'hooks'

export default () => {
  const { seo, bannerData, introData, outroData } = useHomeApi()
  const { itemData } = usePortfolioItemApi()
  const banner = bannerData[0]
  const intro = introData[0]
  const outro = outroData[0]
  const items = useMemo(() => itemData.filter(data => data.featured))

  return (
    <Page>
      <SEO
        title={seo.title}
        description={seo.description}
      />
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
        subText={intro.subText}
        text={intro.text}
        buttonText={intro.buttonText}
        buttonUrl={intro.buttonUrl}
      />
      {items.map((data, i) => {
        let key = i + 1
        return (
          <FeaturedPortfolioItem
            key={key}
            name={data.name}
            fullName={data.fullName}
            tags={data.tags}
            shortDescription={data.shortDescription}
            logo={data.logo}
            featuredImage={data.featuredImage}
          />
        )
      })}
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
