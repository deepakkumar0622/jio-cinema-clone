import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./banner.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Banner = () => {
  const swiperRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([
    "https://images2.alphacoders.com/114/thumb-1920-1148068.jpg",
    "https://images.alphacoders.com/113/1130112.jpg",
    "https://wallpapers.com/images/hd/squid-game-netflix-poster-k7snd3fl0h18f69w.jpg",
    "https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/411/347/616/movies-hollywood-movies-wallpaper-preview.jpg",
    "https://images5.alphacoders.com/998/thumb-1920-998470.jpg",
  ]);
  return (
    <div className={styles.banner}>
      <Swiper
        ref={swiperRef}
        slidesPerView={2.2}
        centeredSlides={true}
        loop={true}
        speed={3000}
        pagination={{
          dynamicBullets: true,
        }}
        onSlideChange={(s) => setActiveSlide(s.realIndex)}
        modules={[Pagination]}
      >
        {images.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className={` ${styles.image} ${
                  activeSlide === i ? styles.active : ""
                }`}
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={v}
                  alt="Images"
                  width={"650px"}
                  height={"450px"}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.buttons}>
        <p onClick={() => swiperRef.current.swiper.slidePrev()}>
          <IoIosArrowDropleft size={60} />
        </p>
        <p onClick={() => swiperRef.current.swiper.slideNext()}>
          <IoIosArrowDropright size={60} />
        </p>
      </div>
    </div>
  );
};

export default Banner;
