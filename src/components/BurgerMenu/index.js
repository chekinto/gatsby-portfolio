import React from "react"
import styled from "styled-components"

const BurgerContainer = styled.div`
  display: none;
  width: 24px;
  height: 32px;

  @media (max-width: 767px) {
    display: initial;
  }

  span {
    display: block;
    height: 2px;
    background: #000;
  }
`

const BurgerMenu = () => (
  <BurgerContainer>
    <span />
  </BurgerContainer>
)

export default BurgerMenu
