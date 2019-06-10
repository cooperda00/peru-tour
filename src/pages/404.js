//Modules
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import styles from "./pageStyles/ErrorPage.module.scss"

const ErrorPage = () => {
  return (
    <Layout>
      <section className={styles.ErrorPage}>
        <Banner
          title="Oops, there was an error"
          info="We messed up. Try heading home"
        >
          <button className="btn-white">
            <Link to="/">Head Home</Link>
          </button>
        </Banner>
      </section>
    </Layout>
  )
}

export default ErrorPage
