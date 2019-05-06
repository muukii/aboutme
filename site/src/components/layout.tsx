/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"

import "./layout.css"
import "normalize.css"
import styled from "styled-components"

// @ts-ignore
const Layout = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
)

const Container = styled.div``
export default Layout
