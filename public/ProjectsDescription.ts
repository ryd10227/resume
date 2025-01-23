export interface ProjectDescriptionType {
  title: string;
  team: string;
  when: string;
  description1: string;
  description2?: string;
  techStack: string[];
  contributions: string[];
  achievements?: string[];
  urls?: { title: string; url: string }[];
}

export const 가는길지금 = {
  title: '가는길 지금 - "매일 다니는 길의 교통 이슈를 확인해 보세요"',
  team: "가는길 지금 팀: 프론트엔드 2명, 백엔드 1명, 디자이너2명, PM 1명",
  when: "2024. 01. - 진행 중",
  description1:
    "사용자가 등록한 지하철 경로에 지연 이슈가 발생하면 푸시알림을 발신하는 앱",
  description2: "앱스토어와 구글 플레이 스토어에 배포됨 (2024.11)",
  techStack: ["React Native", "TypeScript", "Redux", "TailwindCSS", "Emotion"],
  contributions: [
    "홈화면, 이슈 목록 화면, 마이페이지, FCM 등 주요 기능 기여도 70%",
    "Admin 앱 개발: 팀원이 요청한 Admin 앱을 단 2시간 만에 개발하여 즉시 배포",
    "이슈 목록 로딩 속도 개선: ScrollView에서 FlatList로 리팩토링하여 기존 3초에서 1초로 성능 개선",
    "iOS UX 개선: 모든 모달 화면을 스택 네비게이터 기반 화면으로 리팩토링하여 iOS에서의 자연스러운 네비게이션 제공",
    "CSS 라이브러리 마이그레이션: Emotion에서 TailwindCSS로 마이그레이션하여 코드 가독성과 유지보수성 향상",
    "GitHub PR 코드 리뷰: 팀원과의 적극적인 코드 리뷰를 통해 품질 개선 및 문제 해결",
    "스토어 배포 담당",
  ],
  urls: [
    { title: "앱 다운로드", url: "https://litt.ly/gazi_now" },
    {
      title: "소스 코드",
      url: "https://github.com/Gazinow-dev/frontend.git",
    },
  ],
} as ProjectDescriptionType;

export const 주차땃쥐 = {
  title: "주차땃쥐 - 주변 주차장 정보를 한눈에",
  team: "한성대학교 졸업작품",
  when: "2023. 03. - 2023. 05.",
  description1: "주변 주차장의 실시간 잔여석과 가격 등의 정보를 제공하는 앱",
  techStack: ["React Native", "Firebase", "Python3"],
  contributions: [
    "라즈베리파이 초음파 감지 센서 개발: 초음파 센서를 사용하여 실시간으로 입출차 감지값을 Firebase에 업로드",
    "실시간 잔여 좌석 수 반영: 앱에 실시간으로 변경되는 잔여 좌석 수를 반영",
    "초음파 센서 감지 값 반영 지연 개선: 기존 3초에서 0초로 반영 지연을 개선하여 실시간 처리 성능을 최적화",
  ],
} as ProjectDescriptionType;

export const 홈시터 = {
  title: "홈시터 - 얼굴 인식 기능을 탑재한 스마트 CCTV",
  team: "동양미래대학교 졸업작품",
  when: "2021. 03. - 2021. 10.",
  description1: "OpenCV를 활용한 CCTV 앱",
  description2:
    "사용자가 앱에 사진과 이름을 등록하지 않은 사람이 CCTV에 3초 이상 감지될 경우 푸시알림 발신",
  techStack: ["Android", "Firebase"],
  contributions: [
    "지인 목록 화면 개발: UI 디자인 및 기능 구현",
    "FCM: 푸시 알림 기능 구현",
  ],
  achievements: [
    "교내 공학경진대회 장려상 수상: 30팀이 참가한 대회에서 뛰어난 발표력과 성과를 인정받아 장려상을 수상",
  ],
  urls: [{ title: "시연", url: "https://youtu.be/bZ1wdatH2NY" }],
} as ProjectDescriptionType;

export const 모빌씨앤씨 = {
  title: "(주)모빌씨앤씨",
  team: "인턴",
  when: "2023. 08. - 2024. 02",
  description1: "사내 자산 관리 하이브리드 앱 내 WebView 개발",
  description2: "",
  techStack: ["Vue.js", "Android", "Figma"],
  contributions: [
    "대시보드 및 자산 목록 조회/추가/삭제 기능 개발",
    "디자인 및 배포: Figma를 사용해 디자인부터 최종 배포까지 전 과정을 주도. 시니어 UI/UX 디자이너들과 의논하여 프로젝트의 UI/UX 품질을 높임",
    "Swagger 도입: 기존에 엑셀로 진행하던 API 문서화 방식의 불편함을 개선하기 위해 Swagger를 도입하여 팀원들 간의 효율적인 커뮤니케이션을 지원",
    "데이터 시각화: Chart.js를 사용하여 복잡한 데이터를 시각적으로 표현하고, 사용자가 쉽게 이해할 수 있도록 대시보드에 적용",
    "프레임워크 지식 공유: Vuetify, Vuex, Vue Router 등 Vue.js 관련 프레임워크 지식을 팀원들과 스터디하여 개발 효율성 향상",
  ],
  urls: [{ title: "시연", url: "https://youtu.be/u3p7qZ7sSs4" }],
} as ProjectDescriptionType;
