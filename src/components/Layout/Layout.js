//Modules
import React from "react"
//Sass
import "./base.scss"
import styles from "./Layout.module.scss"
//Components
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
