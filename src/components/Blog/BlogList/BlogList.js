//Modules
import React from "react"
//Sass
import styles from "./BlogList.module.scss"
// Components
import BlogCard from "../BlogCard/BlogCard"
import Title from "../../Title/Title"

const BlogList = ({ posts }) => {
  return (
    <section className={styles.BlogList}>
      <Title title="Latest" subtitle="Posts" />
      <div className={styles.CardContainer}>
        {posts.map((post, index) => {
          return <BlogCard key={index} post={post.node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
