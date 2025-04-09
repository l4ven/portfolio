import styles from "./styles/section.module.scss";

const Introduce = () => {
  return (
    <section className={styles.container}>
      <h2>소개</h2>
      <aside>
        안녕하세요! <b>경북소프트웨어마이스터고</b>를 재학 중인 <b>강한</b>
        입니다.
        <ul>
          <li>
            동작만 되는 코드가 아닌, <b>읽기 좋고 유지보수가 쉬운 코드</b>를
            지향합니다.
          </li>
          <li>
            <b>KRDS 디자인 가이드</b>를 철저히 준수하며, 정제된 UI와 사용자
            흐름에 집중합니다.
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
