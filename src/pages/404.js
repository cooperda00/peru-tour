//Modules
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//Sass
import styles from "./pageStyles/ErrorPage.module.scss"
//Components
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <section className={styles.ErrorPage}>
        <Banner
          title="Oops, there was an error"
          info="We messed up. Try heading home"
        >
          <button className="btn-white">
            <AniLink fade to="/">
              Head Home
            </AniLink>
          </button>
        </Banner>
      </section>
    </Layout>
  )
}

export default ErrorPage
