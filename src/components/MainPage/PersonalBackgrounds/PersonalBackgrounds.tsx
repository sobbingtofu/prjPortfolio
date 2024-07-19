import React from "react"
import Image from "next/image"

import Me from "./../../../../public/me.jpg"

function PersonalBackgrounds() {
  return (
    <div className="rounded-lg bg-white shadow-lg">
      <div className="mx-auto mt-10 flex w-max gap-10 py-10">
        <Image alt="me" src={Me} className="w-[200px] rounded shadow-sm" />
        <div>
          <h4 className="text-xl font-semibold">윤기준</h4>
          <div className="mt-6 flex w-full items-baseline">
            <p className="text-lg">
              연세대학교 창의기술경영학과 & 정보교류디자인학과 (복수전공) 졸업
            </p>
            <p className="ml-12 mr-5 italic">(2023.07)</p>
          </div>

          <div className="mt-1 flex items-baseline">
            <p className="text-lg">
              Nemo Partners Strategy Consulting Group 컨설턴트
            </p>
            <p className="ml-auto mr-5 italic">(2023.07~2023.12)</p>
          </div>

          <div className="mt-1 flex items-baseline">
            <p className="text-lg">미래에셋벤처투자 투자심사본부 인턴</p>
            <p className="ml-auto mr-5 italic">(2022.12~2023.02)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalBackgrounds
