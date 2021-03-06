import React from "react"
import { Helmet } from "react-helmet"
import GlobalStyles from "../assets/global"
import Layout from "../components/Layout"

export default () => (
  <>
    <Helmet>
      <title>Welcome | Homepage</title>
    </Helmet>
    <GlobalStyles />
    <Layout>
      <h1>Hello Starter</h1>
    </Layout>
  </>
)
