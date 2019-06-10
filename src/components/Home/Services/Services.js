//Modules
import React from "react"
//Sass
import styles from "./Services.module.scss"
//Constants
import services from "../../../constants/services"
//Components
import Title from "../../Title/Title"

const Services = () => {
  return (
    <section className={styles.ServicesContainer}>
      <Title title="Our" subtitle="Services" />
      <div className={styles.Services}>
        {services.map((service, index) => {
          return (
            <div key={index} className={styles.Service}>
              <span className={styles.Icon}>{service.icon}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
