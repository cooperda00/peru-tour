//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./BlogList.module.scss"
// Components
import BlogCard from "../BlogCard/BlogCard"
import Title from "../../Title/Title"

const BlogList = () => {
  const {
    allPosts: { edges },
  } = useStaticQuery(query)

  return (
    <section className={styles.BlogList}>
      <Title title="Our" subtitle="Blog" />
      <div className={styles.CardContainer}>
        {edges.map((post, index) => {
          return <BlogCard key={index} post={post.node} />
        })}
      </div>
    </section>
  )
}

const query = graphql`
  {
    allPosts: allContentfulTourBlog(sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          slug
          contentful_id
          published(formatString: "DD/MM/YYYY")
          mainImage {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BlogList
