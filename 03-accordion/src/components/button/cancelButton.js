const CancelButton = ({ name, onClick }) => {
  return (
    <div className=" h-auto absolute bottom-2">
      <button
        onClick={onClick}
        className="px-4 py-2 border border-gray-500 rounded-md text-gray-500 hover:bg-gray-500 hover:text-white hover:shadow-md focus:outline-none transition duration-300 ease-in-out"
      >
        {name}
      </button>
    </div>
  );
};
export default CancelButton;
