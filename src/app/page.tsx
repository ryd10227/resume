import Etc from "@/components/Etc";
import SingleProjectDescription from "@/components/SingleProjectDescription";
import TechStacksMapping from "@/components/TechStacksMapping";
import {
  가는길지금,
  모빌씨앤씨,
  주차땃쥐,
  홈시터,
} from "~/public/ProjectsDescription";
import SelfIntroduction from "../components/SelfIntroduction";

const Home = () => {
  const techStack = ["React Native", "TypeScript", "react-query", "Vue.js"];

  const projectsMargin = "mx-[0.6rem] space-y-[1.2rem]";

  return (
    <div className="px-[1rem] py-[2rem]">
      <div>
        <h1>윤서연 Seoyeon Yoon</h1>
        <p className="text-[16px] mb-[1rem]">프론트엔드 개발자</p>
        <h6>ryd10227@gmail.com</h6>
      </div>

      <section>
        <h2>자기소개</h2>
        <SelfIntroduction />
      </section>

      <section>
        <h2>기술 스택</h2>
        <TechStacksMapping techStack={techStack} />
      </section>

      <section>
        <h2>경력</h2>
        <div className={projectsMargin}>
          <SingleProjectDescription project={모빌씨앤씨} />
        </div>
      </section>

      <section>
        <h2>프로젝트</h2>
        <div className={projectsMargin}>
          <SingleProjectDescription project={가는길지금} />
          <div className="border-t-2 border-[#ebebeb] border-dashed" />
          <SingleProjectDescription project={주차땃쥐} />
          <div className="border-t-2 border-[#ebebeb] border-dashed" />
          <SingleProjectDescription project={홈시터} />
        </div>
      </section>

      <section>
        <h2>수상</h2>
        <Etc type="공학경진대회" />
      </section>

      <section>
        <h2>학력</h2>
        <Etc type="한성대학교" />
        <Etc type="동양미래대학교" />
      </section>

      <section>
        <h2>어학</h2>
        <Etc type="TOEIC" />
        <Etc type="HSK" />
      </section>
    </div>
  );
};
export default Home;
