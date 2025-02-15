/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import FeatureCard from "../featurecard/FeatureCard";
import styles from "./feature.module.css";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
const Feature = (props) => {
  const swiperRef = useRef();
  return (
    <div>
      <section className={styles.featured}>
        <h2 className={styles.heading}>Hot Right Now 🔥</h2>
        <Swiper
          className={styles.shows}
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={0}
          loop={false}
        >
          <div>
            {props.movie.map((v, i) => {
              return (
                <SwiperSlide key={i}>
                  <FeatureCard data={v} />
                </SwiperSlide>
              );
            })}
            <div className={styles.shade}></div>
          </div>
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
    </div>
  );
};

export default Feature;
