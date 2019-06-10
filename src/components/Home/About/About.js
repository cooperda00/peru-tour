//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//Sass
import styles from "./About.module.scss"
//Components
import Title from "../../Title/Title"

const About = () => {
  const data = useStaticQuery(query)
  const image = data.image.childImageSharp.fluid

  return (
    <section className={styles.About}>
      <Title title="About" subtitle="Us" />

      <div className={styles.Content}>
        <div className={styles.DisplayImage}>
          <div className={styles.Border}></div>
          <Img fluid={image} className={styles.Image} />
        </div>

        <div className={styles.Copy}>
          <h2>Explore The Incan Empire</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ut
            quos molestias a porro quisquam vel, reiciendis, blanditiis.
          </p>
          <p>
            Architecto sint nihil accusantium voluptatibus. Esse a atque ipsam
            ad? Atque, eos.
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </section>
  )
}

const query = graphql`
  {
    image: file(relativePath: { eq: "cusco.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
