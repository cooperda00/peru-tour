import React from "react"
import styles from "./Hero.module.scss"

const Hero = ({ children }) => {
  return <div className={styles.Hero}>{children}</div>
}

export default Hero