import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/Seo"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col px-2 md:w-5/6 md:p-0 lg:w-4/6 lg:p-0 m-auto">
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
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
        <div className="flex my-2 font-semibold">
          {previous && (
            <div className="flex items-center bg-white p-4 space-x-4">
              <GrLinkPrevious />
              <p>
                <Link to={previous.fields.slug}>
                  {previous.frontmatter.title}
                </Link>
              </p>
            </div>
          )}
          {next && (
            <div className="flex items-center bg-white p-4 space-x-4 ml-auto">
              <p>
                <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
              </p>
              <GrLinkNext />
            </div>
          )}
        </div>
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
