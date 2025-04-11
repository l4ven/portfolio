import styles from "./styles/section.module.scss";
// import Goto from "../assets/image/Goto.svg";
import Link from "../assets/image/Link.svg";
import img1 from "../assets/pjtwo/img1.webp";
import img2 from "../assets/pjtwo/img2.webp";
import img3 from "../assets/pjtwo/img3.webp";
import img4 from "../assets/pjtwo/img4.webp";
import img5 from "../assets/pjtwo/img5.webp";
import { useRef, useState } from "react";

const images = [img1, img2, img3, img4, img5];

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
      <h2>프로젝트</h2>

      <div className={styles.row}>
        <div className={styles.left}>
          <p>2025</p>
        </div>
        <div className={styles.col}>
          <div className={styles.pjtitle}>
            <h2>ClipIt</h2>
            {/* <a href="/" target="_blank"></a> */}
            {/* <img src={Goto} alt="" /> */}
          </div>
          <h3>개발자 코드 조각 저장 및 검색 서비스</h3>
          <ul>
            <li>
              React + TypeScript + styled-components 기반 웹 서비스, App Router
              구조 활용
            </li>
            <li>코드 조각 업로드 / 태그 기반 분류 / 키워드 검색 기능 구현</li>
            <li>
              Intersection Observer API를 활용해 무한 스크롤 구현 및 렌더링 성능
              최적화
            </li>
            <li>
              useMemo, React.memo, 이미지 webp 확장자 및 loading="lazy" 등으로
              렌더링 효율 개선
            </li>
            <li>
              Figma로 UI/UX 설계부터 화면 기획, 프론트엔드, 피드백 반영 담당
            </li>
          </ul>

          <a
            href="https://probable-tithonia-17b.notion.site/ClipIt-1d024b17aa56807fae80fb83e395cd40?pvs=4"
            className={styles.link}
            target="_blank"
          >
            <img
              src={Link}
              alt=""
              loading="lazy"
              decoding="async"
              width={14}
              height={21}
            />
            <aside>상세보기</aside>
          </a>

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
                  onMouseUp={() => {
                    handleMouseUp();
                    if (!isDragging) openModal(i);
                  }}
                  onMouseLeave={handleMouseLeave}
                  decoding="async"
                  height={90}
                  width={"auto"}
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
