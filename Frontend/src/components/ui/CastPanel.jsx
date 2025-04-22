import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CastPanel = ({ cast }) => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true, // Remove arrows to prevent extra space
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-black rounded-lg shadow-lg  w-[50%] mx-auto md:mx-0">
      <h2 className="text-2xl font-bold mb-4 text-white/90 tracking-wide uppercase border-b-2 border-yellow-400 w-fit pb-2">
        CAST:
      </h2>
      <Slider {...settings} className="w-full">
      {cast.map((castMember, index) => (
  <div key={index} className="px-2 group">
    <div className="flex flex-col items-center opacity-25 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
      <img
        src={castMember.image}
        alt={castMember.name}
        className="h-[250px] w-full object-cover rounded-md shadow-md"
      />
      <span className="text-white">{castMember.name}</span>
    </div>
  </div>
))}
      </Slider>
    </div>
  );
};

export default CastPanel;
