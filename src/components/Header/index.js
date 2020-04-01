import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  width: 100%;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.3);
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
  .nav__link {
    text-decoration: none;
    margin-left: 16px;
  }
  .nav__link-active {
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
    </HeaderInner>
  </HeaderContainer>
)

export default Header
