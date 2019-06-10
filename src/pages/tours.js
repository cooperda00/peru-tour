//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
// import styles from "./pageStyles/Tours.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"

const Tours = () => {
  const data = useStaticQuery(query)
  const miraflores = data.miraflores.childImageSharp.fluid

  return (
    <Layout>
      <StyledHero img={miraflores}>
        <h1>I am a tour page</h1>
      </StyledHero>
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

export default Tours
