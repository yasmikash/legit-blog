import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  console.log(post)

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col w-4/6 m-auto my-2">
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="mt-4 bg-white p-8 rounded-md">
          <header className="mb-4">
            <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
            <p className="text-gray-700 italic">{post.frontmatter.date}</p>
          </header>
          <section
            className="overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </div>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
