import styles from "./styles/section.module.scss";

type AwardsProps = {
  date: string;
  title: string;
};

export const Awards = ({ date, title }: AwardsProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <p>{date}</p>
      </div>
      <div className={styles.right}>
        <aside>{title}</aside>
      </div>
    </div>
  );
};

const awardList = [
  { date: "2023.05.12.", title: "교내 아이디어 뱅크 참가" },
  { date: "2023.06.19.", title: "경소고 프로그래밍 챌린지 본선 금상 🥇" },
  { date: "2023.06.23.", title: "Microsoft 해커그라운드 해커톤 참가" },
  { date: "2023.10.19.", title: "넥슨 NYPC 참가" },
  { date: "2023.10.28.", title: "DASH 스타트업 채용박람회 기업 현장견학" },
  {
    date: "2023.11.16.",
    title: "제5회 SW-AI교육 창의융합 해커톤 대회 창의융합상(대상) 🥇",
  },
  { date: "2023.11.25.", title: "제5회 경북SWgo 해커톤 최우수상 🥈" },
  { date: "2024.04.17.", title: "정보처리기능사 취득" },
  { date: "2024.06.03.", title: "2024학년도 SWgo 프로그래밍 챌린지 동상 🥉" },
  { date: "2023.06.19.", title: "경소고 프로그래밍 챌린지 본선 금상 🥇" },
  { date: "2024.07.15.", title: "교내 창업 아이디어 대회 금상 🥇" },
  { date: "2024.07.18.", title: "2024학년도 1학기 캡스톤 프로젝트 4등" },
  { date: "2024.08.27.", title: "Microsoft 해커그라운드 해커톤 장려상 🥉" },
  { date: "2024.11.25.", title: "2024학년도 2학기 학업성취도향상 장학금 수여" },
  { date: "2024.12.24.", title: "정보처리산업기사 취득" },
];

const Activity = () => {
  return (
    <section className={styles.container}>
      <h2>수상 및 활동</h2>
      {awardList.map((item, idx) => (
        <Awards key={idx} date={item.date} title={item.title} />
      ))}
    </section>
  );
};

export default Activity;
