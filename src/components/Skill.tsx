import styles from "./styles/section.module.scss";

const Skill = () => {
  return (
    <section className={styles.container}>
      <h2>기술 스택</h2>
      <div className={styles.row}>
        <aside className={styles.left}>
          <p>프론트엔드</p>
        </aside>
        <aside className={styles.right}>
          <aside>
            React, TypeScript, Redux Toolkit, HTML5, CSS3, JS (ES6), Tailwind
            CSS, Styled Components, SCSS
          </aside>
        </aside>
      </div>
      <div className={styles.row}>
        <aside className={styles.left}>
          <p>디자인 및 협업 툴</p>
        </aside>
        <aside className={styles.right}>
          <aside>Figma, Zeplin, Slack, Notion, Git, Dooray&nbsp;</aside>
        </aside>
      </div>
    </section>
  );
};

export default Skill;
