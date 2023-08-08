const BaseButton = ({ name, callback, controlClass }) => {
  return (
    <div className="w-32 h-auto flex  justify-center items-center mt-2">
      <button
        onClick={callback}
        className={`w-4/5  my-1  bg-indigo-500 text-white rounded text-base hover:bg-indigo-800 ${controlClass}`}
      >
        {name}
      </button>
    </div>
  );
};
export default BaseButton;
