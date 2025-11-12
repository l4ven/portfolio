import styles from "./styles/section.module.scss";
import Goto from "../assets/image/Goto.svg";
import Link from "../assets/image/Link.svg";
import img1 from "../assets/pjone/img1.webp";
import img2 from "../assets/pjone/img2.webp";
import img3 from "../assets/pjone/img3.webp";
import img4 from "../assets/pjone/img4.webp";
import img5 from "../assets/pjone/img5.webp";
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
      <div className={styles.row}>
        <div className={styles.left}>
          <p>2025</p>
        </div>
        <div className={styles.col}>
          <div className={styles.pjtitle}>
            <a href="https://ojc-project.vercel.app/" target="_blank">
              <h2>오점추</h2>
            </a>
            <img
              src={Goto}
              alt=""
              loading="lazy"
              decoding="async"
              width={12}
              height={15}
              className="theme-invert"
            />
          </div>
          <h3>위치 기반 메뉴 추천 및 전 세계 음식 레시피 검색 서비스</h3>
          <ul>
            <li>
              React + Vite + TypeScript 기반 SPA, 인프라는 Vercel 정적 호스팅
              사용
            </li>
            <li>
              Kakao Map API를 활용해 현 위치 또는 지역 기반 식당 추천 기능 구현
            </li>
            <li>
              MealDB API를 활용해 음식 이름 검색 시 레시피, 재료, 요리 영상 제공
              <ul>
                <li>
                  영어로만 제공하는 JSON이기에 Google Translator API로 자동
                  번역하여 UX 개선
                </li>
              </ul>
            </li>
            <li>
              3단 행정구역 JSON을 가공해 지역 선택 모달 구현
              <ul>
                <li>동적 매핑 구조로 유연한 지역 선택 인터페이스 구성</li>
              </ul>
            </li>
            <li>기획-디자인-구현 전 과정을 담당</li>
          </ul>

          <a
            href="https://probable-tithonia-17b.notion.site/16824b17aa56809ea94fe2756eea63f3?pvs=4"
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
              tabIndex={-1}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`프로젝트 이미지 ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  height={90}
                  width={"auto"}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={() => {
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
