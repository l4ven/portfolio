import styles from "./styles/section.module.scss";
import GotoIcon from "../assets/image/Goto.svg";

export const translations = {
  0: {
    // 한국어
    name: "강한",
    job: "프론트엔드 엔지니어 / 디자인",
    github: "깃허브",
    email: "이메일",
    language: "언어 설정",
    theme: "테마 설정",
  },
  1: {
    // 영어
    name: "Han Kang",
    job: "Frontend Engineer / Design",
    github: "GitHub",
    email: "Email",
    language: "Language",
    theme: "Theme",
  },
};

const Introduce = () => {
  return (
    <section className={styles.container}>
      <h2>소개</h2>
      <aside>
        안녕하세요! <b>경북소프트웨어마이스터고</b>를 졸업 예정인 <b>강한</b>
        입니다.
        <ul>
          <li>
            동작만 되는 코드가 아닌, <b>읽기 좋고 유지보수가 쉬운 코드</b>를
            지향합니다.
          </li>
          <li>
            <b>
              <a
                href="https://www.krds.go.kr/html/site/index.html"
                target="blank"
              >
                KRDS 디자인 가이드
                <img
                  src={GotoIcon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={16}
                  height={15}
                  className="theme-invert"
                />
              </a>
            </b>
            를 철저히 준수하며, 정제된 UI와 사용자 흐름에 집중합니다.
          </li>
          <li>
            작은 디테일까지 챙기는 태도는 결국 사용자에게 전해진다고 믿습니다.
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Introduce;
