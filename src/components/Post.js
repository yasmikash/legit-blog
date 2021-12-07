import React from "react"
import { Link } from "gatsby"

const Post = ({ title, description, slug, date }) => {
  return (
    <div className="flex flex-col rounded-md p-4 bg-white">
      <h3 className="font-semibold text-base sm:text-xl mb-2">
        <Link to={slug}>{title}</Link>
      </h3>
      <p className="text-xs text-gray-600 italic">{date}</p>
      <p className="text-sm mt-2">{description}</p>
    </div>
  )
}

export default Post
