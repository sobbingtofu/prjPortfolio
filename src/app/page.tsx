import Page from "@/components/common/Page"
import ToTopBtn from "@/components/common/ToTopBtn"
import PersonalBackgrounds from "@/components/MainPage/PersonalBackgrounds"
import ProjectList from "@/components/MainPage/ProjectList"
import SkillStackSwiper from "@/components/MainPage/SkillStackSwiper/SkillStackSwiper"

export default function Home() {
  return (
    <main className="bg-[#f4f4f4]">
      <Page>
        <div className="flex flex-col gap-1 md:flex-row md:gap-3">
          <h1 className="text-3xl font-bold md:text-4xl">프론트엔드 개발자</h1>
          <h1 className="text-3xl font-bold md:text-4xl">윤기준 포트폴리오</h1>
        </div>
        <h3 className="mt-8 text-xl font-bold md:mt-12 md:text-3xl">
          주요 이력
        </h3>
        <PersonalBackgrounds />
        <h3 className="mt-16 text-xl font-bold md:text-3xl">
          주요 개발 기술 스택
        </h3>
        <SkillStackSwiper />
        <h3 className="mt-12 text-xl font-bold md:text-3xl">
          연습 프로젝트 목록
        </h3>
        <ProjectList />
        <ToTopBtn />
      </Page>
    </main>
  )
}
