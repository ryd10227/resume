type EtcType =
  | "공학경진대회"
  | "한성대학교"
  | "동양미래대학교"
  | "TOEIC"
  | "HSK";

const etcType = {
  공학경진대회: {
    title: "교내 공학경진대회",
    description1: "30팀 중 장려상 | 동양미래대학교",
    description2: "2021. 11",
  },
  한성대학교: {
    title: "한성대학교",
    description1: "컴퓨터공학부 | 졸업 | 학사",
    description2: "2022. 03 - 2024. 02",
  },
  동양미래대학교: {
    title: "동양미래대학교",
    description1: "컴퓨터정보공학과 | 졸업 | 전문학사",
    description2: "2020. 03 - 2022. 02",
  },
  TOEIC: {
    title: "TOEIC",
    description1: "950 | ETS",
    description2: "2024. 05",
  },
  HSK: {
    title: "HSK",
    description1: "4급 | HSK 한국사무국",
    description2: "2014. 02",
  },
};

const Etc = ({ type }: { type: EtcType }) => {
  const { title, description1, description2 } = etcType[type];

  return (
    <div>
      <h5>{title}</h5>
      <h6>{description1}</h6>
      <h6>{description2}</h6>
    </div>
  );
};
export default Etc;
