import styles from "./styles/section.module.scss";
import Goto from "../assets/image/Goto.svg";
import Link from "../assets/image/Link.svg";
import img1 from "../assets/pjthree/img1.webp";
import img2 from "../assets/pjthree/img2.webp";
import { useRef, useState } from "react";

const images = [img1, img2];

const ProjectOne = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => {
    setModalImage(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setModalImage(null);
      setIsExiting(false);
      document.body.style.overflow = "auto";
    }, 400);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) closeModal();
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setModalImage(images[nextIndex]);
  };

  // 드래그 관련 코드 동일
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let isDragging = false;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    isDragging = false;
    startX = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft = scrollRef.current?.scrollLeft ?? 0;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };
  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    if (Math.abs(walk) > 5) {
      isDragging = true;
    }

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>2024</p>
        </div>
        <div className={styles.col}>
          <div className={styles.pjtitle}>
            <h2>AI 위클래스</h2>
            {/* <a href="/" target="_blank"></a> */}
            {/* <img src={Goto} alt="" /> */}
          </div>
          <h4>학교 내 Wee클래스 AI 채팅 심리 상담 서비스</h4>
          <ul>
            <li>
              OpenAI GPT API를 활용해 학생의 감정에 맞는 대화형 상담 시나리오
              구현
            </li>
            <li>
              프롬프트 엔지니어링을 통해 상담 어투, 질문 방식, 감정 반응 설계를
              직접 담당
            </li>
            <li>Figma로 UI/UX 디자인 및 React 프론트엔드 담당</li>
            <li>JWT를 쿠키에 저장하여 로그인 상태 유지 처리</li>
            <li>
              요청 분리 구조(authService, cookieUtils)를 도입해 인증 관련 로직을
              서비스 단으로 모듈화
            </li>
            <li>모달 기반 로그인 UI에서 상태 분기 처리 및 에러 핸들링 구현</li>
          </ul>

          {/* <a href="/" className={styles.link} target="_blank">
            <img src={Link} alt="" loading="lazy" />
            <aside>상세보기</aside>
          </a> */}

          <div className={styles.scroll}>
            <div
              className={styles.album}
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`프로젝트 이미지 ${i + 1}`}
                  loading="lazy"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={(e) => {
                    handleMouseUp();
                    if (!isDragging) openModal(i);
                  }}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalImage && (
        <div
          className={`${styles.modalOverlay} ${isExiting ? styles.exit : ""}`}
          onClick={handleOverlayClick}
          ref={modalRef}
        >
          <div
            className={`${styles.modalContent} ${isExiting ? styles.exit : ""}`}
          >
            <img
              src={modalImage}
              alt="확대 이미지"
              className={styles.modalImage}
              onClick={nextImage}
            />
          </div>
          <button onClick={closeModal} className={styles.closeBtn}>
            <aside>닫기</aside>
          </button>
          <div className={styles.imageCounter}>
            <aside>
              {currentIndex + 1}/{images.length}
            </aside>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectOne;
