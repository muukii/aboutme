import * as React from "react"
import Layout from "src/components/Mobile/layout"
import SEO from "src/components/seo"
import styled from "styled-components"
import { Box } from "src/components/Common/Box"

class Top extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`muukii`]} />
        <Box paddingAll="32px">
          <Title>I'm Muukii.</Title>
        </Box>
      </Layout>
    )
  }
}

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue,
    Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
  color: #fff;
  font-weight: 700;
`

export default Top
