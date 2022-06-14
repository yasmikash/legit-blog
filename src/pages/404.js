import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Seo title="Not Found" />
      <div>
        <h1 className="font-bold text-xl">This page does not exist.</h1>
        <h2 className="font-semibold">
          Please contact me @ yasmikash@gmail.com
        </h2>
      </div>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
