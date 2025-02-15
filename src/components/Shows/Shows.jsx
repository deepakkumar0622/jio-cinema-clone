/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import Show from "../Show/Show";
import styles from "./shows.module.css";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const Shows = (props) => {
  const swiperRef = useRef();
  return (
    <section className={styles.shows}>
      <h1>{props.title}</h1>
      <Swiper
        ref={swiperRef}
        className={styles.Showparent}
        slidesPerView={6}
        slidesPerGroupSkip={6}
        spaceBetween={20}
        loop={false}
      >
        {props.data.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <Show data={v} />
            </SwiperSlide>
          );
        })}

        <div className={styles.shade}></div>
      </Swiper>
      <div className={styles.buttons}>
        <p onClick={() => swiperRef.current.swiper.slidePrev()}>
          <FaChevronLeft size={28} />
        </p>
        <p onClick={() => swiperRef.current.swiper.slideNext()}>
          <FaChevronRight size={28} />
        </p>
      </div>
    </section>
  );
};

export default Shows;
