//Modules
import React from "react"
//Sass
import styles from "./Title.module.scss"

const Title = ({ title, subtitle }) => {
  return (
    <h1 className={styles.Title}>
      <span>{title}</span> <span className={styles.Colored}>{subtitle}</span>
    </h1>
  )
}

export default Title
