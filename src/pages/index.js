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
    <main className="flex flex-col w-5/6 m-auto my-2">
      <Seo title="Home" />
      {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet> */}
      {/** Header */}
      <Header />
      <Technologies />
      <Posts posts={posts} />
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
