import React from "react"
import Image from "next/image"
import { PROJECTS } from "@/assets/projects"

import LinkButtons from "../LinkButtons"

function ProjectList() {
  const projects = PROJECTS
  return (
    <div className="mt-10 flex flex-col gap-y-5">
      {projects.map((prj, index) => {
        return (
          <div
            key={prj.title}
            className="mx-auto flex w-full flex-col justify-start rounded-xl bg-white px-5 py-5 shadow-xl lg:px-20 lg:py-10 xl:w-[90%]"
          >
            <Image
              src={prj.img}
              alt={prj.title}
              className="mx-auto w-[98%] md:w-[90%] lg:w-[full]"
            />
            <div className="mx-auto mt-6 w-[98%] md:w-[90%] lg:w-[full]">
              <div className="flex flex-col justify-between md:flex-row">
                <h5 className="w-[400px] text-wrap text-xl font-semibold">
                  {prj.title}
                </h5>
                <p className="lg:text-md text-xs md:text-sm">{prj.duration}</p>
              </div>
              <p className="mt-2">{prj.brief}</p>{" "}
            </div>
            <LinkButtons
              githubLink={prj.githubLink}
              deployedLink={prj.deployedLink}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList
