//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
// import styles from "./pageStyles/ToursPage.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import Tours from "../components/Tours/Tours/Tours"

const ToursPage = () => {
  const data = useStaticQuery(query)
  const miraflores = data.miraflores.childImageSharp.fluid

  return (
    <Layout>
      <StyledHero img={miraflores} />
      <Tours />
    </Layout>
  )
}

const query = graphql`
  {
    miraflores: file(relativePath: { eq: "miraflores.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ToursPage
