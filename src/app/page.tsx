import Page from "@/components/common/Page";
import SkillStackSwiper from "@/components/common/SkillStackSwiper";

export default function Home() {
  return (
    <Page>
      <h1 className="text-4xl font-bold">
        프론트엔드 개발자 윤기준 포트폴리오
      </h1>
      <h3 className="text-2xl font-bold mt-16">주요 기술 스택</h3>
      <SkillStackSwiper />
    </Page>
  );
}
