import { graphql } from "gatsby"
import React from "react"
import Header from "../components/Header"
import Posts from "../components/Posts"
import Technologies from "../components/Technologies"
import Seo from "../components/Seo"
import Testimonial from "../components/Testimonial"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  console.log(posts)

  return (
    <main className="flex flex-col px-2 xl:px-0 xl:w-5/6 m-auto my-2">
      <Seo title="Home" />
      <Header />
      <Posts posts={posts} />
      <Technologies />
      <Testimonial />
    </main>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
