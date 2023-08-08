import { useState } from "react";
import "./App.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";
import BaseContainer from "./components/container/baseContainer";
import BaseForm from "./components/forms/baseForm";
import ImageAvator from "./components/img/baseAvator";
import BaseButton from "./components/button/BaseButton";
function App() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = reviews[index];
  const checkIndex = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };
  const prevPeron = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextPeron = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (index === randomIndex) randomIndex += 1;
    setIndex(checkIndex(randomIndex));
  };
  return (
    <BaseContainer>
      <BaseForm>
        <div className="w-full h-32 mt-5 relative flex items-center justify-center relative">
          <div className=" w-32 h-32 relative">
            <div className="w-32 h-full bg-indigo-500 rounded-full absolute  -top-1 -right-2"></div>
            <div className="text-md text-white text-center flex items-center justify-center  absolute top-1  h-8 w-8 rounded-full bg-indigo-500 left-0 z-40 ">
              <FaQuoteRight />
            </div>
          </div>
          <ImageAvator
            url={image}
            alt={name}
            controlClass="w-32 h-32 absolute"
          />
        </div>
        <div className="text-xl text-gray-800 tracking-wide mt-2 capitalize">
          {name}
        </div>
        <div className="text-xs text-sky-600 tracking-normal my-1 uppercase">
          {job}
        </div>
        <div className="text-base text-gray-600 mx-10 my-2 indent-8">
          {text}
        </div>
        <div className="flex flex-raw justify-between gap-16 mt-4">
          <FaChevronLeft onClick={prevPeron} />
          <FaChevronRight onClick={nextPeron} />
        </div>
        <BaseButton
          name="Surprize Me"
          callback={randomPerson}
          controlClass="mt-3 mb-6"
        />
      </BaseForm>
    </BaseContainer>
  );
}

export default App;
