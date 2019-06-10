//Modules
import React from "react"
import { Link } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/Home/About/About"
import Services from "../components/Home/Services/Services"

const Index = () => {
  return (
    <Layout>
      <Hero>
        <Banner
          title="Explore Peru The Right Way"
          info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod totam
        impedit, enim, voluptatibus alias incidunt nemo aspernatur dignissimos."
        >
          <button className="btn-white">
            <Link to="/tours">Explore Tours</Link>
          </button>
        </Banner>
      </Hero>
      <About />
      <Services />
    </Layout>
  )
}

export default Index
