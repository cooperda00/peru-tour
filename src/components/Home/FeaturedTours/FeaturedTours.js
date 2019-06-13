//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//Sass
import styles from "./FeaturedTours.module.scss"
//Components
import Title from "../../Title/Title"
import TourCard from "../../Tours/TourCard/TourCard"

const FeaturedTours = () => {
  const data = useStaticQuery(query)
  const featuredTours = data.featuredTours.edges

  return (
    <section className={styles.FeaturedTours}>
      <Title title="Featured" subtitle="Tours" />
      <div className={styles.ToursContainer}>
        {featuredTours.map(tour => {
          return <TourCard key={tour.node.contentful_id} tour={tour.node} />
        })}
      </div>
      <button className="btn-primary">
        <AniLink fade to="/tours">
          All Tours
        </AniLink>
      </button>
    </section>
  )
}

const query = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default FeaturedTours
