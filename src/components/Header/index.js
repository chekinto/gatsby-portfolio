import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BurgerMenu from "../BurgerMenu"

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 64px;
`

const NavLeft = styled.div``

const NavRight = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }
  .nav__link {
    margin-left: 16px;
  }
  .nav__link-active {
    color: red;
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderInner>
      <NavLeft>
        <Link to="/">Che</Link>
      </NavLeft>
      <NavRight>
        <Link
          className="nav__link"
          activeClassName="nav__link-active"
          to="/about"
        >
          About
        </Link>
        <Link
          className="nav__link"
          activeClassName="nav__link-active"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="nav__link"
          activeClassName="nav__link-active"
          to="/blog"
        >
          Contact
        </Link>
      </NavRight>
      <BurgerMenu />
    </HeaderInner>
  </HeaderContainer>
)

export default Header
