import React from "react"
import styled from "styled-components"
import Header from "../Header"
import Container from "../Container"
import Footer from "../Footer"

const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <>
    <Header />
    <FlexColumn>
      <Container>{children}</Container>
      <Footer />
    </FlexColumn>
  </>
)

export default Layout
