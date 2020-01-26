import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO = ({
  lang = 'en',
  title = '',
  description = '',
  meta = [],
}) => {
  const { datoCmsSite: site } = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          facebookPageUrl
          twitterAccount
          fallbackSeo {
            title
            description
            twitterCard
          }
        }
      }
    }
  `)
  const metaDescription = description || site.globalSeo.fallbackSeo.description
  const metaTitle = title ? `${site.globalSeo.siteName} | ${title}` : site.globalSeo.siteName

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      defaultTitle={site.globalSeo.siteName}
      titleTemplate={`${site.globalSeo.siteName} | %s`}
      meta={[
        { name: 'description', content: metaDescription, },
        { property: 'og:title', content: metaTitle, },
        { property: 'og:description', content: metaDescription, },
        { property: 'og:type', content: 'website', },
        { name: 'twitter:card', content: site.globalSeo.fallbackSeo.twitterCard, },
        { name: 'twitter:creator', content: site.globalSeo.twitterAccount, },
        { name: 'twitter:title', content: metaTitle, },
        { name: 'twitter:description', content: metaDescription, },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}
