import React from "react"
import styles from "./Banner.module.scss"

const Banner = ({ title, info, children }) => {
  return (
    <section className={styles.Banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </section>
  )
}

export default Banner
