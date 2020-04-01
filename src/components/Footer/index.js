import React from "react"
import styled from "styled-components"
import Container from "../Container"

const FooterContainer = styled.footer`
  width: 100%;
`
const FooterInner = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const date = new Date()

const Footer = () => (
  <FooterContainer>
    <FooterInner>
      <p>&copy; copyright {date.getFullYear()} Che To</p>
    </FooterInner>
  </FooterContainer>
)

export default Footer
