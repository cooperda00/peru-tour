//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import BlogList from "../components/Blog/BlogList/BlogList"

const Blog = () => {
  const data = useStaticQuery(query)
  const amazon = data.amazon.childImageSharp.fluid

  return (
    <Layout>
      <StyledHero img={amazon} />
      <BlogList />
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
