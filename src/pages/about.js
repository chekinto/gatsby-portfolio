import React from "react"
import { Helmet } from "react-helmet"
import GlobalStyles from "../assets/global"
import Layout from "../components/Layout"

export default () => (
  <>
    <Helmet>
      <title>About | Portfolio</title>
    </Helmet>
    <GlobalStyles />
    <Layout>
      <h1>Hello From About page</h1>
    </Layout>
  </>
)
