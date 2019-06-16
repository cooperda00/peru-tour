//Modules
import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./BlogTemplate.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"

const blogTemplate = ({ data: { singleBlog } }) => {
  const {
    title,
    published,
    mainImage,
    text: { json },
  } = singleBlog

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const url = node.data.target.fields.file["en-US"].url
        const alt = node.data.target.fields.title["en-US"]

        return (
          <div className={styles.ImageContainer}>
            <img src={url} alt={alt} />
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { name, description, images, slug } = node.data.target.fields
        const displayImage = images["en-US"][0].fields.file["en-US"].url
        const altText = images["en-US"][0].fields.description

        return (
          <AniLink fade to={`/tours/${slug["en-US"]}`}>
            <article className={styles.RelatedTour}>
              <h1>Related Tour:</h1>
              <div className={styles.TourWrapper}>
                <img src={displayImage} alt={altText} />
                <div>
                  <h2>{name["en-US"]}</h2>
                  <p>{description["en-US"].substr(0, 200) + " ..."}</p>
                </div>
              </div>
            </article>
          </AniLink>
        )
      },
    },
  }

  return (
    <Layout>
      <main className={styles.BlogTemplate}>
        <StyledHero img={mainImage.fluid} />
        <section className={styles.Blog}>
          <h1 className={styles.MainTitle}>{title}</h1>
          <h2 className={styles.Published}>Published On: {published}</h2>

          <article className={styles.Article}>
            {documentToReactComponents(json, options)}
          </article>

          <button className="btn-primary">
            <AniLink fade to="/blog">
              All Posts
            </AniLink>
          </button>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    singleBlog: contentfulTourBlog(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      mainImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      text {
        json
      }
    }
  }
`

export default blogTemplate
