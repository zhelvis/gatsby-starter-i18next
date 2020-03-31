import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation("index")

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t("hi")}</h1>
      <p>{t("welcome")}</p>
      <p>{t("buildSomethingGreat")}</p>
    </Layout>
  )
}

export default IndexPage
