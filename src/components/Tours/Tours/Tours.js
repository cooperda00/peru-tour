//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
// import styles from "./Tours.module.scss"
//Components
import TourList from "../TourList/TourList"

const Tours = () => {
  const { tours } = useStaticQuery(query)

  return <TourList tours={tours} />
}

const query = graphql`
  {
    tours: allContentfulTour {
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Tours
