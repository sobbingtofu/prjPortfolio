import React from "react"
import Image from "next/image"
import Link from "next/link"

import DownloadIcon from "./../../../../public/download_icon.png"
import Me from "./../../../../public/me.jpg"

function PersonalBackgrounds() {
  return (
    <div className="mt-6 flex justify-center rounded-lg bg-white shadow-lg md:mt-10">
      <div className="mx-auto flex w-max flex-col items-center gap-5 py-10 md:mx-10 md:flex-row md:gap-10">
        <Image alt="me" src={Me} className="w-[225px] rounded shadow-sm" />
        <div className="w-full px-5 md:px-0">
          <h4 className="mx-auto w-[80%] text-xl font-semibold md:w-full">
            윤기준
          </h4>
          <div className="mx-auto mt-4 flex w-[80%] flex-col md:mt-6 md:w-full md:flex-row md:items-center md:justify-between">
            <p className="md:text-lg">
              연세대학교 창의기술경영학과 & 정보교류디자인학과 (복수전공) 졸업
            </p>
            <p className="lg:text-md text-xs italic md:ml-12 md:mr-5 md:text-sm">
              (2023.07)
            </p>
          </div>

          <div className="mx-auto mt-6 flex w-[80%] flex-col md:w-full md:flex-row md:items-center md:justify-between">
            <p className="md:text-lg">
              Nemo Partners Strategy Consulting Group 컨설턴트
            </p>
            <p className="lg:text-md text-xs italic md:ml-12 md:mr-5 md:text-sm">
              (2023.07~2023.12)
            </p>
          </div>

          <div className="mx-auto mt-6 flex w-[80%] flex-col md:w-full md:flex-row md:items-center md:justify-between">
            <p className="md:text-lg">미래에셋벤처투자 투자심사본부 인턴</p>
            <p className="lg:text-md text-xs italic md:ml-12 md:mr-5 md:text-sm">
              (2022.12~2023.02)
            </p>
          </div>
          <div className="mb-0 mt-[25px] flex w-full justify-center md:justify-end">
            <Link
              href={
                "https://docs.google.com/uc?export=download&id=1eb3LOlNnu9aSPs8ZPPew0H9N_37QOfmw"
              }
              target="_blank"
            >
              <button className="flex items-center gap-4 rounded-lg bg-gray-200 px-6 py-3 shadow-md transition-colors hover:bg-gray-400 md:mr-5 md:mt-6 md:px-10 md:py-5">
                <Image
                  src={DownloadIcon}
                  alt="download"
                  className="w-5 md:w-8"
                />
                <p className="mr-3 text-sm md:text-base">이력서 다운로드</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalBackgrounds
