const SecondButton = ({onClick}) => {
  return (
    <div className="flex space-x-4">
      <button onClick={onClick} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-medium transition">
        Watch Trailer
      </button>
      <button className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-md font-medium transition">
        Add to List
      </button>
    </div>
  );
};

export default SecondButton;
