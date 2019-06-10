//Modules
import React from "react"
//Sass
import styles from "./About.module.scss"
//Components
import Title from "../../Title/Title"
//Images
import img from "../../../images/peruhero.jpg"

const About = () => {
  return (
    <section className={styles.About}>
      <Title title="About" subtitle="Us" />
      <div className={styles.Content}>
        <div className={styles.DisplayImage}>
          <div className={styles.Border}></div>
          <img src={img} alt="A view over Machu Picchu" />
        </div>

        <div className={styles.Copy}>
          <h2>Explore The Incan Empire</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ut
            quos molestias a porro quisquam vel, reiciendis, blanditiis.
          </p>
          <p>
            Architecto sint nihil accusantium voluptatibus. Esse a atque ipsam
            ad? Atque, eos.
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </section>
  )
}

export default About
