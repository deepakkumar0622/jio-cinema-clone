import { useRef, useState } from "react";
import styles from "./tags.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "swiper/css";

const Tags = () => {
  const swiperRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [tags, setTags] = useState([
    "For You",
    "Premium",
    "Laughter Chefs",
    "Cricket",
    "Free Movies",
    "News",
    "BBK",
    "Kids & Family",
    "Trending",
    "Sports Zone",
    "Live TV",
    "Music Hits",
    "Originals",
    "Reality Shows",
    "Blockbusters",
    "Adventure",
    "Tech & Gadgets",
    "Travel & Lifestyle",
    "Comedy Club",
    "Drama Series",
  ]);

  return (
    <div className={styles.tags}>
      <Swiper
        ref={swiperRef}
        slidesPerView={"10"}
        spaceBetween={10}
        loop={false}
      >
        {tags.map((v, i) => {
          return (
            <SwiperSlide key={i} className={styles.tag}>
              {v}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.buttons}>
        <p onClick={() => swiperRef.current.swiper.slidePrev()}>
          <FaChevronCircleLeft size={28} />
        </p>
        <p onClick={() => swiperRef.current.swiper.slideNext()}>
          <FaChevronCircleRight size={28} />
        </p>
      </div>
    </div>
  );
};

export default Tags;
