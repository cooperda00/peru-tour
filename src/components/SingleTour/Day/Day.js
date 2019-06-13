//Modules
import React, { useState } from "react"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Day.module.scss"
//Icons
import { FaAngleDown } from "react-icons/fa"

const Day = ({ day, info }) => {
  const [showInfo, toggleShowInfo] = useState(false)

  return (
    <div className={styles.Day}>
      <h4>
        {day}
        <button
          onClick={() => {
            toggleShowInfo(!showInfo)
          }}
          className={styles.ShowButton}
        >
          <FaAngleDown />
        </button>
      </h4>

      <Fade top when={showInfo} duration={600} collapse>
        <p>{info}</p>
      </Fade>
    </div>
  )
}

export default Day
