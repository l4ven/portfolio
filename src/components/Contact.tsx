import styles from "./styles/section.module.scss";
import Goto from "../assets/image/Goto.svg";

const Contact = () => {
  return (
    <section className={styles.container}>
      <h2>연락처</h2>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>Tel</p>
        </div>
        <div className={styles.right}>
          <aside>010-4936-0579</aside>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>Email</p>
        </div>
        <div className={styles.right}>
          <aside>pllo13551@gmail.com</aside>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>Github</p>
        </div>
        <div className={styles.contact}>
          <a href="https://github.com/L4VEN" target="_blank">
            <aside>L4VEN</aside>
            <img src={Goto} alt="" loading="lazy" className="theme-invert" />
          </a>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>Instagram</p>
        </div>
        <div className={styles.contact}>
          <a href="https://www.instagram.com/laven_dev/" target="_blank">
            <aside>laven_dev</aside>
            <img src={Goto} alt="" loading="lazy" className="theme-invert" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
