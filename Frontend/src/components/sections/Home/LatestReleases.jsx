import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/twStyles";
import data from "../../../utils/data";
import { useState } from "react";
import { MdKeyboardArrowDown } from "../../ui/icons";
import { Link } from "react-router-dom";

const LatestReleases = () => {
  const LatestMovies = [...data.Movie];
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, nextIndex) => setCurrentSlide(nextIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        className={`h-1 w-4 ${
          i === currentSlide ? "bg-red-500" : "bg-gray-500"
        }`}
      />
    ),
  };

  return (
    <div className={`${styles.paddings} space-y-10 bg-transparent`}>
      <h1 className="text-white font-bold text-4xl">Latest Releases</h1>

      <Slider {...settings} className="latest-releases-slider">
        {LatestMovies.map((movie) => (
          <div key={movie.id} className="px-1 outline-none">
            {" "}
            {/* Reduced padding */}
            <div className="group relative rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 h-[280px]">
              {/* Image with hover zoom */}
              <div className="relative h-full w-full">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-lg mb-1 truncate">
                  {movie.title}
                </h3>

                {/* appears on hover */}
                <div className="relative flex justify-between items-center">
                  <div className="flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="gap-2 flex">
                      <span className="text-white text-xs border border-white px-1 rounded">
                        16+
                      </span>
                      <span className="text-gray-300 text-xs">
                        {movie.runtime}m
                      </span>
                      <span className="text-white text-xs border border-white px-1 rounded">
                        HD
                      </span>
                    </div>
                  </div>
                  <div className="relative group">
                    <Link
                      to={`/view/${movie.id}`}
                      className="rounded-full bg-gray-700 p-2 hover:bg-gray-600 transition-colors duration-200 inline-flex"
                    >
                      <MdKeyboardArrowDown size={20} className="text-white" />
                    </Link>
                    <span className="absolute -top-8 right-0 bg-white text-black text-xs px-2 py-1 rounded shadow-lg scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top whitespace-nowrap">
                      More info
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestReleases;
