import { useState } from "react";
import { CiSearch } from "../ui/icons";
import { Link } from "react-router-dom";

const SearchBar = ({ cardData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const result = cardData.filter((data) =>
        data.title.toLowerCase().includes(query.toLowerCase()) 
      );
      setSearchResults(result);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        className="w-[200px] bg-white rounded py-2 pl-8"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => searchQuery.length > 0 && setShowResults(true)}
      />
      <span className="absolute left-2 top-3 material-icons text-gray-400">
        <CiSearch size={20} />
      </span>

      {showResults && (
        <>
          {/* Overlay to close when clicking outside */}
          
          
          {/* Results dropdown */}
          <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
            {searchResults.length > 0 ? (
              <>
                <div className="p-4">
                  {searchResults.map((movie) => (
                    <Link
                      to={`/view/${movie.id}`}
                      key={`${movie.type}-${movie.id}`}
                      className="flex items-center gap-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowResults(false)} 
                    >
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium">{movie.title}</h4>
                        <p className="text-sm text-gray-500">{movie.year}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="p-4 border-t text-center">
                  <button 
                    className="text-blue-500 font-medium cursor-pointer"
                    onClick={() => setShowResults(false)}
                  >
                    View All
                  </button>
                </div>
              </>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;