//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import ContactForm from "../components/Contact/ContactForm"

const Contact = () => {
  const data = useStaticQuery(query)
  const nazca = data.nazca.childImageSharp.fluid

  return (
    <Layout>
      <StyledHero img={nazca} />
      <ContactForm />
    </Layout>
  )
}

const query = graphql`
  {
    nazca: file(relativePath: { eq: "nazca.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Contact
