//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import Banner from "../components/Banner/Banner"
import About from "../components/Home/About/About"
import Services from "../components/Home/Services/Services"
import FeaturedTours from "../components/Home/FeaturedTours/FeaturedTours"

const Index = () => {
  const data = useStaticQuery(query)
  const image = data.image.childImageSharp.fluid

  return (
    <Layout>
      <StyledHero home="true" img={image}>
        <Banner
          title="Explore Peru The Right Way"
          info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod totam
        impedit, enim, voluptatibus alias incidunt nemo aspernatur dignissimos."
        >
          <button className="btn-white">
            <AniLink fade to="/tours">
              Explore Tours
            </AniLink>
          </button>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  )
}

const query = graphql`
  {
    image: file(relativePath: { eq: "peruhero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Index
