//Modules
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//Sass
import styles from "./Footer.module.scss"
//Constants
import links from "../../../constants/links"
import socialIcons from "../../../constants/socialIcons"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul className={styles.Links}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <AniLink fade to={link.path}>
                {link.text}
              </AniLink>
            </li>
          )
        })}
      </ul>

      <div className={styles.SocialIcons}>
        {socialIcons.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </li>
          )
        })}
      </div>

      <p className={styles.Copyright}>
        Copyright &#9400; PeruTour 2019. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
