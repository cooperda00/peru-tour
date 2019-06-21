const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }

      posts: allContentfulTourBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `/tours/${node.slug}`,
      component: path.resolve("./src/templates/tourTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  // amount of posts
  const posts = data.posts.edges.length
  // posts per page
  const postsPerPage = 3
  // calculate how many pages needed
  const numOfPages = Math.ceil(posts / postsPerPage)
  // creates pages based on the number calculated
  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      //generate correct path
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      //Point to template
      component: path.resolve("./src/templates/blogListTemplate.js"),
      context: {
        limit: postsPerPage,
        // calculate how many posts to skip on each new page
        skip: i * postsPerPage,
        // pass numOfPages for generating buttons
        numOfPages,
        // get current page ( 0 index plus 1) for buttons
        currentPage: i + 1,
      },
    })
  })
}
