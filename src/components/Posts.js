import React from "react"
import Container from "./Container"
import Post from "./Post"

const Posts = ({ posts }) => {
  return (
    <Container headerTitle="Latest Posts">
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-4 gap-2 md:gap-4">
        {posts.map(post => (
          <Post
            title={post.frontmatter.title}
            description={post.excerpt}
            date={post.frontmatter.date}
            slug={post.fields.slug}
            key={post.fields.slug}
          />
        ))}
      </div>
    </Container>
  )
}

export default Posts
