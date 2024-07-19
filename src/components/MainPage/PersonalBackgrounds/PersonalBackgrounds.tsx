import React from "react"
import Image from "next/image"
import Link from "next/link"

import DownloadIcon from "./../../../../public/download_icon.png"
import Me from "./../../../../public/me.jpg"

function PersonalBackgrounds() {
  return (
    <div className="mt-10 flex justify-center rounded-lg bg-white shadow-lg">
      <div className="mx-auto flex w-max flex-col items-center gap-10 py-10 md:mx-10 md:flex-row">
        <Image alt="me" src={Me} className="w-[200px] rounded shadow-sm" />
        <div className="w-full px-5 md:px-0">
          <h4 className="text-xl font-semibold">윤기준</h4>
          <div className="mt-6 flex w-full items-center">
            <p className="text-lg">
              연세대학교 창의기술경영학과 & 정보교류디자인학과 (복수전공) 졸업
            </p>
            <p className="lg:text-md ml-12 mr-5 text-xs italic md:text-sm">
              (2023.07)
            </p>
          </div>

          <div className="mt-4 flex items-center md:mt-1">
            <p className="text-lg">
              Nemo Partners Strategy Consulting Group 컨설턴트
            </p>
            <p className="lg:text-md ml-auto mr-5 text-xs italic md:text-sm">
              (2023.07~2023.12)
            </p>
          </div>

          <div className="mt-4 flex items-center md:mt-1">
            <p className="text-lg">미래에셋벤처투자 투자심사본부 인턴</p>
            <p className="lg:text-md ml-auto mr-5 text-xs italic md:text-sm">
              (2022.12~2023.02)
            </p>
          </div>
          <div className="mb-0 mt-[25px] flex w-full justify-end">
            <Link
              href={
                "https://docs.google.com/uc?export=download&id=1eb3LOlNnu9aSPs8ZPPew0H9N_37QOfmw"
              }
              target="_blank"
            >
              <button className="mr-5 mt-6 flex items-center gap-4 rounded-lg bg-gray-200 px-10 py-5 shadow-md transition-colors hover:bg-gray-400">
                <Image src={DownloadIcon} alt="download" className="w-8" />
                <p className="mr-3">이력서 다운로드</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalBackgrounds
