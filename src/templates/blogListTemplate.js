//Modules
import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//Sass
import styles from "./BlogListTemplate.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import BlogList from "../components/Blog/BlogList/BlogList"
import StyledHero from "../components/StyledHero/StyledHero"
import SEO from "../components/SEO/SEO"

const blogListTemplate = ({ data, pathContext }) => {
  const posts = data.posts.edges
  const { numOfPages, currentPage } = pathContext
  const fluid = data.amazon.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={fluid} />
      <main className={styles.BlogList}>
        <BlogList posts={posts} />

        <div className={styles.PageControls}>
          {currentPage !== 1 && (
            <AniLink
              className="btn-primary"
              fade
              to={currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`}
            >
              Previous
            </AniLink>
          )}

          {Array.from({ length: numOfPages }, (_, i) => {
            return (
              <AniLink
                fade
                to={i === 0 ? "/blog" : `/blog/${i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.Selected} btn-primary`
                    : `btn-primary`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}

          {currentPage !== numOfPages && (
            <AniLink
              fade
              to={`/blog/${currentPage + 1}`}
              className="btn-primary"
            >
              Next
            </AniLink>
          )}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulTourBlog(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
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
    amazon: file(relativePath: { eq: "amazon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default blogListTemplate
