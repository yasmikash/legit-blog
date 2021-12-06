import React from "react"

const Container = ({ headerTitle, children }) => {
  return (
    <div className="my-3">
      <div className="bg-gray-200 p-2 font-bold uppercase rounded-tl-md rounded-tr-md tracking-wide">
        {headerTitle}
      </div>
      <div className="space-x-3 bg-gray-200 mt-1">{children}</div>
    </div>
  )
}

export default Container
