import * as React from "react"
import Layout from "src/components/Mobile/layout"
import SEO from "src/components/seo"

class Top extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`muukii`]} />
      </Layout>
    )
  }
}

export default Top
