import profileImg from "../assets/image/profile.webp";
import styles from "./styles/profile.module.scss";
import Github from "../assets/image/Github.svg";
import Email from "../assets/image/Email.svg";
import Light from "../assets/image/Sunny.svg";
import Language from "../assets/image/Language.svg";

const Profile = () => {
  return (
    <section className={styles.container}>
      <main className={styles.left}>
        <img
          className={styles.image}
          src={profileImg}
          alt="프로필 사진"
          loading="lazy"
        />
        <article className={styles.article}>
          <h1>강한</h1>
          <p>프론트엔드 엔지니어 / 디자인</p>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <img src={Github} alt="깃허브" loading="lazy" />
              <aside>l4ven</aside>
            </div>
            <div className={styles.logo}>
              <img src={Email} alt="이메일" loading="lazy" />
              <aside>pllo13551@gmail.com</aside>
            </div>
          </nav>
        </article>
      </main>
      <div className={styles.right}>
        <img src={Language} alt="언어 설정" loading="lazy" />
        <img src={Light} alt="테마 설정" loading="lazy" />
      </div>
    </section>
  );
};

export default Profile;
