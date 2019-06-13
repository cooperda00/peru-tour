//Modules
import React, { useState, useEffect } from "react"
//Sass
import styles from "./TourList.module.scss"
//Components
import TourCard from "../TourCard/TourCard"
import Title from "../../Title/Title"

const TourList = props => {
  const [tours, setTours] = useState([])
  const [sortedTours, sortTours] = useState([])

  //On Mount
  useEffect(() => {
    setTours(props.tours.edges)
    sortTours(props.tours.edges)
  }, [])

  return (
    <section className={styles.TourList}>
      <Title title="Our" subtitle="Tours" />
      <div className={styles.CardContainer}>
        {sortedTours &&
          sortedTours.map(({ node }) => {
            return <TourCard tour={node} key={node.contentful_id} />
          })}
      </div>
    </section>
  )
}

export default TourList
