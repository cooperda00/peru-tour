//Modules
import React, { useState } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Navbar.module.scss"
//Icons
import { FaAlignRight } from "react-icons/fa"
//Constants
import links from "../../../constants/links"
import socialIcons from "../../../constants/socialIcons"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!isOpen)
    console.log(isOpen)
  }

  return (
    <header className={styles.Navbar}>
      <h1>
        Peru<span>Tour</span>
      </h1>

      <ul className={styles.NavLinks}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} activeStyle={{ color: "#d91023" }}>
                {item.text.toUpperCase()}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className={styles.NavSocialLinks}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>

      <button type="button" className={styles.MenuBtn} onClick={toggleNav}>
        <FaAlignRight className={styles.LogoIcon} />
      </button>

      <Fade top when={isOpen} duration={500}>
        <ul className={styles.NavMenu}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} activeStyle={{ color: "#d91023" }}>
                  {item.text.toUpperCase()}
                </Link>
              </li>
            )
          })}
        </ul>
      </Fade>
    </header>
  )
}

export default Navbar
