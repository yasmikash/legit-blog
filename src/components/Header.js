import React from "react"
import { BiBuildings } from "react-icons/bi"
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMedium,
} from "react-icons/ai"
import { SiFiverr } from "react-icons/si"
import { StaticImage } from "gatsby-plugin-image"

const BADGES = [
  {
    id: 2,
    Icon: <SiFiverr />,
    Label: (
      <a href="https://www.fiverr.com/yasmikash" target="_blank">
        fiverr/yasmikash
      </a>
    ),
  },
  {
    id: 3,
    Icon: <AiOutlineMail />,
    Label: <a href="mailto:yasmikash@gmail.com">yasmikash@gmail.com</a>,
  },
  {
    id: 4,
    Icon: <AiOutlineLinkedin />,
    Label: (
      <a href="https://www.linkedin.com/in/yasmikash" target="_blank">
        linkedIn/yasmikash
      </a>
    ),
  },
  {
    id: 5,
    Icon: <AiOutlineGithub />,
    Label: (
      <a href="https://github.com/yasmikash" target="_blank">
        github/yasmikash
      </a>
    ),
  },
  {
    id: 6,
    Icon: <AiOutlineMedium />,
    Label: (
      <a href="https://yasmikash.medium.com/" target="_blank">
        medium/yasmikash
      </a>
    ),
  },
]

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row w-[100%] space-y-2 md:space-y-0 md:space-x-2">
      <div className="flex justify-evenly bg-gray-700 text-white p-4 px-5 text-sm space-x-4 md:w-4/5 rounded-md">
        <div className="flex items-center">
          <StaticImage
            className="rounded-full"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/yasmikash.jpg"
            width={120}
            height={120}
            quality={100}
            alt="Profile picture"
          />
        </div>
        <div className="flex flex-col space-y-2">
          {BADGES.map(({ Icon, Label, id }) => {
            return (
              <div className="flex text-sm items-center space-x-2" key={id}>
                <>
                  {Icon}
                  {Label}
                </>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col bg-gray-800 text-white p-2 px-5 md:p-4 md:px-7 rounded-md justify-center">
        <h1 className="font-semibold text-2xl sm:text-3xl mb-2">
          Yasmika Saubhagya
        </h1>
        <h2 className="text-justify text-sm sm:text-2sm ml-0 xl:w-4/6">
          I'm a full-stack software engineer who is enthusiastic about working
          with different technologies in development. Learning new technologies
          in-depth fascinates me, applying what learned in real-world projects
          pleases me.
        </h2>
      </div>
    </div>
  )
}

export default Header
