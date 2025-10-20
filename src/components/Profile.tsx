import profileImg from "../assets/image/profile.webp";
import styles from "./styles/profile.module.scss";
import Github from "../assets/image/Github.svg";
import Email from "../assets/image/Email.svg";
import Light from "../assets/image/Sunny.svg";
import Dark from "../assets/image/Moon.svg";
// import Language from "../assets/image/Language.svg";
import { useTheme } from "../contexts/ThemeContext";
// import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

const Profile = () => {
  // const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <section className={styles.container}>
      <main className={styles.left}>
        <img
          className={styles.image}
          src={profileImg}
          alt="프로필 사진"
          loading="eager"
          width={92}
          height={92}
        />
        <article className={styles.article}>
          <h1>강한</h1>
          <p>UI/UX 디자인 & 웹 프론트엔드</p>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <img
                src={Github}
                alt="깃허브"
                loading="lazy"
                className="theme-invert"
                decoding="async"
                width={24}
                height={24}
              />
              <aside>l4ven</aside>
            </div>
            <div className={styles.logo}>
              <img
                src={Email}
                alt="이메일"
                loading="lazy"
                className="theme-invert"
                decoding="async"
                width={24}
                height={24}
              />
              <aside>pllo13551@gmail.com</aside>
            </div>
          </nav>
        </article>
      </main>
      <div className={styles.right}>
        {/* <div className={styles.dropdownWrapper} ref={dropdownRef}>
          <img
            src={Language}
            alt="언어 설정"
            loading="lazy"
            className="theme-invert"
            onClick={() => setOpen((prev) => !prev)}
            style={{ cursor: "pointer" }}
          />
          {open && (
            <ul className={styles.dropdown}>
              <li
                onClick={() => {
                  setLanguage(0);
                  setOpen(false);
                }}
              >
                <span>한국어</span> <span>{language === 0 && "✓"}</span>
              </li>
              <li
                onClick={() => {
                  setLanguage(1);
                  setOpen(false);
                }}
              >
                <span>English</span> <span>{language === 1 && "✓"}</span>
              </li>
            </ul>
          )}
        </div> */}

        <img
          src={theme === "light" ? Light : Dark}
          alt="테마 설정"
          className="theme-invert"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
          decoding="async"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
};

export default Profile;
