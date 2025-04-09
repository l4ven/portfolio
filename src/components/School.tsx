import styles from "./styles/section.module.scss";

const School = () => {
  return (
    <section className={styles.container}>
      <h2>학력</h2>
      <div className={styles.col}>
        <h3>경북소프트웨어마이스터고등학교</h3>
        <p>2023.01. ~ 2026.01. (졸업 예정)</p>
      </div>
    </section>
  );
};

export default School;
