import React from "react"
import { FaNodeJs, FaReact, FaJava } from "react-icons/fa"
import { RiFlutterFill, RiReactjsLine } from "react-icons/ri"
import { SiCsharp } from "react-icons/si"
import Container from "./Container"

const TECHNOLOGIES = [
  { id: 1, Icon: FaNodeJs, label: "Node.Js" },
  { id: 2, Icon: FaReact, label: "React.JS" },
  { id: 3, Icon: RiReactjsLine, label: "React Native" },
  { id: 4, Icon: FaJava, label: "Java" },
  { id: 5, Icon: RiFlutterFill, label: "Flutter" },
  { id: 6, Icon: SiCsharp, label: "C#" },
]

const Technologies = () => {
  return (
    <Container headerTitle="Technologies Familiarized">
      <div className="flex justify-center">
        <div className="flex">
          {TECHNOLOGIES.map(technology => (
            <Technology
              Icon={technology.Icon}
              label={technology.label}
              key={technology.id}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

const Technology = ({ Icon, label }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md m-4 group">
      <Icon className="text-7xl group-hover:opacity-90" />
      <h3 className="font-semibold mt-2 group-hover:opacity-90">{label}</h3>
    </div>
  )
}

export default Technologies
