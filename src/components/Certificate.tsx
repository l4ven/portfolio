import styles from "./styles/section.module.scss";

const Certificate = () => {
  return (
    <section className={styles.container}>
      <h2>자격증</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3>정보처리기능사</h3>
          <p>한국산업인력공단</p>
          <p>2024.04.17.</p>
        </div>
        <div className={styles.col}>
          <h3>정보처리산업기사</h3>
          <p>한국산업인력공단</p>
          <p>2024.12.24.</p>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
