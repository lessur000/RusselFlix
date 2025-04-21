import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SecondButton from "./SecondButton";
import data from "../../utils/data";
import VideoModal from "../ui/VideoModal";
import { GiPlayButton } from "../ui/icons";

const CardView = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const cardData = [...data.animeData, ...data.Movie];
    const foundCard = cardData.find(
      (item) => item.id.toString() === id.toString()
    );
    setCard(foundCard);
    setLoading(false);
  }, [id]);

  const toggleVideoModal = () => {
    setShowVideoModal(!showVideoModal);
  };

  if (loading) {
    return (
      <section className="text-black h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  if (!card) {
    return (
      <section className="text-black h-screen flex justify-center items-center">
        Movie/Anime not found
      </section>
    );
  }

  return (
    <>
      <Header />
      <div className="relative">
        {/* Background image with overlay */}
        <div className="relative w-full h-screen">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 h-full w-[300px] md:w-2/3 bg-gradient-to-r from-[#0f1b26] to-transparent"></div>
        </div>

        {/* Content container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="container mx-auto px-4 text-white space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {card.title}
            </h1>
            <p className="text-lg max-w-2xl mb-6">{card.description}</p>
            <div className="flex items-center gap-5">
              {card.genres.map((genre, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2">Rating:</span>
              <span className="text-yellow-400">{card.rating}</span>
            </div>
            <SecondButton onClick={toggleVideoModal} />
          </div>
        </div>

        {/* Video Preview */}
        {card.video && (
          <div
            className="absolute bottom-20 right-10 w-64 cursor-pointer group"
            onClick={toggleVideoModal}
          >
            <div className="relative">
              {/* Video with poster */}
              <video
                poster={card.image}
                className="w-full h-[200px] object-cover rounded-lg shadow-blue-500 shadow-2xl hidden md:block"
              >
                <source src={card.video} type="video/mp4" />
              </video>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg group-hover:bg-black/50 transition-all duration-300">
                <GiPlayButton
                  size={40}
                  className="text-white opacity-100 group-hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {showVideoModal && (
          <VideoModal videoUrl={card.video} onClose={toggleVideoModal} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default CardView;
