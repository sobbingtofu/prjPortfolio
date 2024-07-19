import Page from "@/components/common/Page"
import ToTopBtn from "@/components/common/ToTopBtn"
import PersonalBackgrounds from "@/components/MainPage/PersonalBackgrounds"
import ProjectList from "@/components/MainPage/ProjectList"
import SkillStackSwiper from "@/components/MainPage/SkillStackSwiper/SkillStackSwiper"

export default function Home() {
  return (
    <main className="bg-[#f4f4f4]">
      <Page>
        <h1 className="text-4xl font-bold">
          프론트엔드 개발자 윤기준 포트폴리오
        </h1>
        <h3 className="mt-16 text-3xl font-bold">주요 이력</h3>
        <PersonalBackgrounds />
        <h3 className="mt-16 text-3xl font-bold">주요 개발 기술 스택</h3>
        <SkillStackSwiper />
        <h3 className="mt-8 text-3xl font-bold">연습 프로젝트 목록</h3>
        <ProjectList />
        <ToTopBtn />
      </Page>
    </main>
  )
}
