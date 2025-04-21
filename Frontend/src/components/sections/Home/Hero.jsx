import data from "../../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion as Motion } from "framer-motion";
import { slideInLeft } from "../../../utils/motion";
import { useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const combinedData = [...data.animeData, ...data.Movie];

  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          padding: "0",
          zIndex: 30,
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "2px" }}>
          {dots}
        </ul>
      </div>
    ),
    beforeChange: (_, nextIndex) => {
      setCurrentSlide(nextIndex);
      document.activeElement?.blur(); // add this for accessbility
    },
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full border-white border-2 ${
          currentSlide === i ? "bg-white" : ""
        } transition duration-300`}
      />
    ),
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {combinedData.map((movie, index) => (
          <div key={movie.id} className="relative h-[800px]">
            {/* Gradient overlay on left */}
            <div className="absolute h-full w-2/3 bg-gradient-to-r from-[#0f1b26] to-transparent z-10"></div>

            {/* Content container */}
            <Motion.div
              className="container mx-auto relative h-full flex items-center z-20"
              variants={slideInLeft}
              animate={currentSlide === index ? "show" : "hidden"} // Trigger animation based on the current slide
              key={movie.id}
            >
              <div className="w-full md:w-1/2 px-6">
                <h1 className="text-white text-4xl md:text-7xl font-['lobster-two-bold'] mb-4">
                  What's Trending
                </h1>
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">
                  {movie.title}
                </h2>
                <div className="flex items-center text-gray-300 mb-4 gap-3">
                  {movie.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-8 max-w-lg font-semibold text-md">
                  {movie.description}
                </p>
                {/* get the component from PrimaryButton */}
                <PrimaryButton movieId={movie.id} />
              </div>
            </Motion.div>

            {/* Background image */}
            <img
              src={movie.image}
              className="absolute top-0 h-full md:h-full w-full object-cover z-0"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      <div className="bg-gray-500/50 absolute bottom-20 right-0 py-2 px-10 border-l-4 border-white">
        <span className="  text-white font-bold text-2xl">16+</span>
      </div>
    </section>
  );
};

export default Hero;
