import { StaticImageData } from "next/image"

import CafePinImage from "./../../public/CafePin-image.png"
import CatArchiveImage from "./../../public/CatArchive-image.png"
import HogWartsExpressImage from "./../../public/HogwartsExpress-image.png"
import LedgerImage from "./../../public/Ledger-image.png"
import MemoImage from "./../../public/Memo-image.png"
import PikachuImage from "./../../public/Pikachu-image.png"
import PokedexImage from "./../../public/Pokedex-image.png"

export const PROJECTS: {
  title: string
  duration: string
  brief: string
  deployedLink: string
  githubLink: string
  prjType: "team" | "individual"
  teamPosition?: "Leader" | "Member"
  img: StaticImageData
}[] = [
  {
    title: "Hogwarts Express",
    duration: "2024.07.07 ~ 2024.07.15",
    brief:
      "api 통신으로 받아오는 해리포터 시리즈 관련 정보를 토대로 제작된 해리포터 관련 아카이브 웹 어플리케이션",
    deployedLink: "https://hogwarts-express.vercel.app/",
    githubLink: "https://github.com/sobbingtofu/prjHarryPotterArchive",
    prjType: "team",
    teamPosition: "Leader",
    img: HogWartsExpressImage,
  },
  {
    title: "1세대 포케덱스",
    duration: "2024.07.02 ~ 2024.07.05",
    brief:
      "api 통신으로 받아오는 포켓몬 정보를 토대로 제작된 포켓몬 정보 아카이브 웹 어플리케이션",
    deployedLink: "https://pokedex1gen-lyart.vercel.app/",
    githubLink: "https://github.com/sobbingtofu/pokedex1gen",
    prjType: "individual",
    img: PokedexImage,
  },
  {
    title: "Cafe-Pin",
    duration: "2024.06.15 ~ 2024.06.24",
    brief:
      "카카오맵 api를 기반으로 카페에 대한 리뷰를 남기고 조회할 수 있는 수 있는 웹 어플리케이션",
    deployedLink: "https://prjcafepin.vercel.app/",
    githubLink: "https://github.com/sobbingtofu/prjcafepin",
    prjType: "team",
    teamPosition: "Member",
    img: CafePinImage,
  },
  {
    title: "공지기 - 공유지출기록장",
    duration: "2024.06.09 ~ 2024.06.14",
    brief:
      "다수의 사용자가 함께 각자의 지출을 기록하고 관리하며 공유할 수 있는 공유 지출 기록 웹 어플리케이션",
    deployedLink: "https://starndardyunledger.vercel.app/",
    githubLink: "https://github.com/sobbingtofu/prjDevelopedLedger",
    prjType: "individual",
    img: LedgerImage,
  },
  {
    title: "고양이 아카이브",
    duration: "2024.05.30 ~ 2024.06.04",
    brief:
      "다수의 사용자가 고양이 사진을 공유하고 관리하며 소통할 수 있는 sns 웹 어플리케이션",
    deployedLink: "https://final-red-eight.vercel.app/",
    githubLink: "https://github.com/sobbingtofu/B05-prjNewsFeed",
    prjType: "team",
    teamPosition: "Leader",
    img: CatArchiveImage,
  },
  {
    title: "브라우저 메모장",
    duration: "2024.05.23 ~ 2024.05.29",
    brief: "사용자가 복수의 메모를 남기고 관리할 수 있는 웹 어플리케이션",
    deployedLink: "https://github.com/sobbingtofu/prjMemoApplication",
    githubLink: "https://memo-lilac.vercel.app/",
    prjType: "individual",
    img: MemoImage,
  },
  {
    title: "move-your-pikachu",
    duration: "2024.05.20 ~ 2024.05.23",
    brief: "방향키를 통해 피카츄를 조작할 수 있는 간단한 웹 어플리케이션",
    deployedLink: "https://github.com/sobbingtofu/adventureOfJellybeanPikachu",
    githubLink: "https://move-your-pikachu.vercel.app/",
    prjType: "individual",
    img: PikachuImage,
  },
]
