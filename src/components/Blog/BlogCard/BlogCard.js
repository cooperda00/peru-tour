//Modules
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
//Sass
import styles from "./BlogCard.module.scss"

const BlogCard = ({ post }) => {
  const { slug, title, mainImage, published } = post
  return (
    <article className={styles.BlogCard}>
      <AniLink fade to={`/blog/${slug}`}>
        <div className={styles.Top}>
          <Img fluid={mainImage.fluid} className={styles.Image} alt={title} />
          <p className={styles.Published}>{published}</p>
        </div>
        <div className={styles.Bottom}>
          <h2>{title}</h2>
        </div>
      </AniLink>
    </article>
  )
}

export default BlogCard
