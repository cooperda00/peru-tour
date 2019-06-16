//Modules
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//Sass
import styles from "./TourTemplate.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import Day from "../components/SingleTour/Day/Day"
//Icons
import { FaMoneyBillWave, FaMap } from "react-icons/fa"

const tourTemplate = ({ data }) => {
  const {
    name,
    days,
    description: { description },
    images,
    journey,
    country,
    price,
    start,
  } = data.singleTour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <main className={styles.TourTemplate}>
        <StyledHero img={mainImage.fluid} />
        <section className={styles.Content}>
          <div className={styles.ImagesContainer}>
            {tourImages.map((image, index) => {
              const { fluid } = image

              return (
                <div className={styles.SingleImageContainer} key={index}>
                  <Img fluid={fluid} className={styles.Image} />
                </div>
              )
            })}
          </div>

          <h1 className={styles.Title}>{name}</h1>

          <div className={styles.Info}>
            <h2>
              <FaMoneyBillWave className={styles.Icon} /> Starting From ${price}
            </h2>
            <h2>
              <FaMap className={styles.Icon} />
              {country}
            </h2>
          </div>

          <div className={styles.ExtraInfo}>
            <h3>Starting On: {start}</h3>
            <h3>Duration: {days} Days</h3>
          </div>

          <p className={styles.Description}>{description}</p>

          <div className={styles.Itinerary}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>

          <button className="btn-primary">
            <AniLink>Back To Tours</AniLink>
          </button>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    singleTour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "ddd MMM D, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default tourTemplate
