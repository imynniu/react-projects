import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const SingleQuestion = ({ question, activeId, toggleActiveId }) => {
  const { id, title, info } = question;

  const isActive = activeId === id;
  return (
    <div className="flex flex-col justify-between bg-white shadow-md w-4/5  px-8 py-4 mb-8 border-t-2 ">
      <div className="flex items-center  justify-between mb-2 ">
        <div className="text-2xl text-gray-700 ">{title}</div>
        <button onClick={() => toggleActiveId(id)} className="text-2xl">
          {isActive ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </div>
      <div className="text-gray-600 text-base">{isActive && info}</div>
    </div>
  );
};
export default SingleQuestion;
