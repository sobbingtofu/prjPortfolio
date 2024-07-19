"use client"

import React, { PropsWithChildren } from "react"
import Link from "next/link"

function LinkButtons({
  githubLink,
  deployedLink,
}: PropsWithChildren<{ githubLink: string; deployedLink: string }>) {
  return (
    <div className="mx-auto mt-[30px] flex w-[98%] flex-col items-center justify-center gap-x-8 gap-y-6 md:w-[90%] md:flex-row lg:w-[full]">
      <Link href={deployedLink} target="_blank">
        <button className="rounded-lg bg-gray-200 px-10 py-5 shadow-md transition-colors hover:bg-gray-700 hover:text-white">
          사이트 방문하기
        </button>
      </Link>
      <Link href={githubLink} target="_blank">
        <button className="rounded-lg bg-gray-200 px-10 py-5 shadow-md transition-colors hover:bg-gray-700 hover:text-white">
          깃헙으로 이동하기
        </button>
      </Link>
    </div>
  )
}

export default LinkButtons
