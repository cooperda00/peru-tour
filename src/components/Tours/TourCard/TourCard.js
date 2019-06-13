//Modules
import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import styles from "./TourCard.module.scss"
//Icons
import { FaMap } from "react-icons/fa"

const TourCard = ({ tour }) => {
  const data = useStaticQuery(query)
  const defaultImage = data.defaultImage.childImageSharp.fluid
  const mainImage = tour.images ? tour.images[0].fluid : defaultImage

  return (
    <div className={styles.TourCard}>
      <AniLink fade to={`/tours/${tour.slug}`}>
        <div className={styles.Top}>
          <Img
            fluid={mainImage}
            alt={tour.name || "A cute Alpaca"}
            className={styles.Image}
          />
        </div>

        <div className={styles.Bottom}>
          <h1>{tour.name}</h1>
          <div className={styles.Info}>
            <h2>
              <FaMap className={styles.Icon} />

              {tour.country}
            </h2>
            <div>
              <p>{tour.days} days</p>
              <p>From ${tour.price}</p>
            </div>
          </div>
        </div>
      </AniLink>
    </div>
  )
}

const query = graphql`
  {
    defaultImage: file(relativePath: { eq: "alpaca.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default TourCard
