/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

type Props = {
  description?: string
  lang?: string
  meta?: any[]
  keywords?: string[]
  title: string
  data?: { site: any }
}

class SEO extends React.Component<Props, {}> {
  static defaultProps: Props = {
    description: "",
    lang: "en",
    meta: [],
    keywords: [],
    title: "",
  }

  render() {
    const props = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `}
        render={data => {
          const site = data.site
          const metaDescription =
            props.description || site.siteMetadata.description
          return (
            <Helmet
              htmlAttributes={
                {
                  // props.lang,
                }
              }
              title={props.title}
              titleTemplate={`%s | ${site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: props.title,
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
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: props.title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ]
                .concat(
                  props.keywords.length > 0
                    ? {
                        name: `keywords`,
                        content: props.keywords.join(`, `),
                      }
                    : []
                )
                .concat(props.meta)}
            />
          )
        }}
      />
    )
  }
}

export default SEO
