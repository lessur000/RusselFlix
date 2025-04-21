import { Link } from "react-router-dom";

const PrimaryButton = ({ movieId }) => {
  return (
    <div className="flex items-center gap-3">
      <Link 
        to={`/view/${movieId}`} 
        className="bg-transparent border-2 border-white text-white px-8 py-2 rounded-md font-medium hover:bg-white hover:text-black transition-colors"
      >
        More
      </Link>
      <button className="bg-red-600 border-2 border-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md font-medium transition-colors">
        Watch Now
      </button>
    </div>
  );
};

export default PrimaryButton;