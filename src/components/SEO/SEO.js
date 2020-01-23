import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  title
}) => {
  // const { site } = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         subTitle
  //         description
  //         author
  //       }
  //     }
  //   }
  // `)
  // const { datoCmsSite: site, site: siteLocal } = useStaticQuery(graphql`
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
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  // const metaDescription = description || site.siteMetadata.description
  const metaDescription = description || site.globalSeo.fallbackSeo.description
  const metaTitle = title ?? `THE PLAID AGENCY`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title ?? ``}
      defaultTitle={`${site.globalSeo.siteName}`}
      titleTemplate={`${site.globalSeo.siteName} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: site.globalSeo.fallbackSeo.twitterCard,
        },
        {
          name: `twitter:creator`,
          content: site.globalSeo.twitterAccount,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
