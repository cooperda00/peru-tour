//Modules
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//Sass
import styles from "./pageStyles/Success.module.scss"
//Components
import Layout from "../components/Layout/Layout"

const success = () => {
  return (
    <Layout>
      <section className={styles.Success}>
        <h1>Success!</h1>
        <h2>Thank you for your submission</h2>
        <h2>
          Head{" "}
          <AniLink fade to="/" className={styles.Link}>
            Home
          </AniLink>
        </h2>
      </section>
    </Layout>
  )
}

export default success
