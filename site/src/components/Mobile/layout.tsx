import * as React from "react"
import styled from "styled-components"

// @ts-ignore
const Layout = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
)

const Container = styled.div`
  max-width: 425px;
  margin: auto;
`

export default Layout
