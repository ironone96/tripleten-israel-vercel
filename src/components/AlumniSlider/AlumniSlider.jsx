import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./AlumniSlider.module.css";

const alumniData = [
  {
    name: "Idan Shafat",
    image: "/images/idan.jpg",
    oldJob: "Former Multimedia producer",
    newJob: "Data Integration Engineer at Riskified",
    youtube: "https://www.youtube.com/watch?v=4uNjPjsO88Y",
    linkedin: "https://www.linkedin.com/in/idanshafat",
  },
  {
    name: "Valeria Vazhnova",
    image: "/images/valeria.jpg",
    oldJob: "Former Managing Editor in publishing",
    newJob: "Data Analyst at ArborKnot",
    youtube: "https://www.youtube.com/watch?v=02m986QSDWM",
    linkedin: "https://www.linkedin.com/in/valeriya-vazhnova",
  },
  {
    name: "Nahar Shertz",
    image: "/images/nahar.jpg",
    oldJob: "Former Hummusia manager",
    newJob: "Full Stack Developer at Utopia Tech corp",
    youtube: "https://www.youtube.com/watch?v=NfPnLACFOww",
    linkedin: "https://www.linkedin.com/in/nahar-shertz",
  },
];

Modal.setAppElement(".page-body");

export default function AlumniSlider() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalIsOpen]);


  const openModal = (url) => {
    setVideoUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl("");
  };

  return (
    <section className={styles.alumni}>
      <div className={styles.orangeWrapper}>
        <div className={styles.alumniHead}>
          <h2>
            1k+<span className={styles.heart}></span> alumni worldwide.{" "}
            <span className={styles.digit}>62%</span> had no previous tech
            experience!
          </h2>
          <ul className={styles.alumniTags}>
            <li>Teachers</li>
            <li>Nurses</li>
            <li>Managers</li>
            <li>Service reps</li>
            <li>Salespeople</li>
            <li>Editors</li>
          </ul>
        </div>
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          className={styles.swiper}
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {alumniData.map((alumnus, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.alumniItem}>
                <h3>{alumnus.name}</h3>
                <img src={alumnus.image} alt={alumnus.name} />
                <div className={styles.alumnusJob}>
                  <p className={styles.oldJob}>
                    <span className={styles.clockIcon}></span>
                    {alumnus.oldJob}
                  </p>
                  <p className={styles.newJob}>
                    <span className={styles.starIcon}></span>
                    {alumnus.newJob}
                  </p>
                </div>
                <button
                  onClick={() => openModal(alumnus.youtube)}
                  className={styles.btnYoutube}
                >
                  Watch movie
                </button>
                <a
                  href={alumnus.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnLinkedin}
                >
                  LinkedIn
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className={styles.swiperNavigation}>
          <button ref={prevRef} className={styles.swiperButtonPrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7073 4.29338C13.0978 4.68391 13.0978 5.31707 12.7073 5.7076L7.41436 11.0005H19.0002C19.5524 11.0005 20.0002 11.4482 20.0002 12.0005C20.0002 12.5528 19.5524 13.0005 19.0002 13.0005H7.41436L12.7073 18.2934C13.0978 18.6839 13.0978 19.3171 12.7073 19.7076C12.3167 20.0981 11.6836 20.0981 11.293 19.7076L3.58594 12.0005L11.293 4.29338C11.6836 3.90286 12.3167 3.90286 12.7073 4.29338Z" fill="black" fill-opacity="0.83" />
            </svg>
          </button>
          <button ref={nextRef} className={styles.swiperButtonNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 4.29338C11.6834 3.90286 12.3166 3.90286 12.7071 4.29338L20.4142 12.0005L12.7071 19.7076C12.3166 20.0981 11.6834 20.0981 11.2929 19.7076C10.9024 19.3171 10.9024 18.6839 11.2929 18.2934L16.5858 13.0005H5C4.44772 13.0005 4 12.5528 4 12.0005C4 11.4482 4.44772 11.0005 5 11.0005H16.5858L11.2929 5.7076C10.9024 5.31707 10.9024 4.68391 11.2929 4.29338Z" fill="black" fill-opacity="0.83" />
            </svg>
          </button>
        </div> */}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={styles.modalContent} overlayClassName={styles.modalOverlay}>
        <button className={styles.closeModal} onClick={closeModal}></button>
        {videoUrl && <iframe width="100%" height="100%" src={videoUrl.replace("watch?v=", "embed/")} title="YouTube video" allowFullScreen />}
      </Modal>
    </section>
  );
}
