import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, NavLink } from 'react-router-dom';
import "swiper/swiper-bundle.css";
import "../styles/Header.css";
import PaginationDots from "./PaginationDots";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import "../styles/Hero.css";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const slidesData = [
    {
      title: "Create and Manage Tasks while Collaborating with your Team",
      textColor: "#6c757d",
      image: banner2,
    },
    {
      title: "Task Management Improves Productivity and Teamwork",
      textColor: "#6c757d",
      image: banner1,
    },
    {
      title: "Real-Time Updates Seamless Communication and Task Tracking",
      textColor: "#6c757d",
      image: banner3,
    },
  ];

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return (
    <section className="hero-section">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        loop={true}
        className="swiper-container"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="slide-text">
                <h2 style={{ color: slide.textColor }}>{slide.title}</h2>
                <Link to="/SignUp">
                  <button
                    className="btn px-4 mx-auto fs-5"
                    style={{
                      backgroundColor: "#43A046",
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    Build Task
                  </button>
                </Link>
              </div>
              <div className="slide-image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination-dots">
        <PaginationDots
          activeIndex={activeIndex}
          totalSlides={slidesData.length}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
};

export default Hero;
