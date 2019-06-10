//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"

const Blog = () => {
  const data = useStaticQuery(query)
  const amazon = data.amazon.childImageSharp.fluid

  return (
    <Layout>
      <StyledHero img={amazon}>
        <h1>Blog goes here</h1>
      </StyledHero>
    </Layout>
  )
}

const query = graphql`
  {
    amazon: file(relativePath: { eq: "amazon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Blog
