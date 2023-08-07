import BaseForm from "./components/forms/baseForm";
import CancelButton from "./components/button/cancelButton";
import ImageCut from "./components/img/imageCut";
import { useState } from "react";
const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [seeMore, setIsSeeMore] = useState(false);
  return (
    <div className="h-full w-full ">
      <BaseForm>
        <ImageCut src={image} alt={name} />
        <span className="w-20  h-5 tracking-wide absolute top-0 right-0 bg-green-500 text-center  text-sm text-white">
          $ {price}
        </span>
        <div className="flex flex-col py-2 gap-2 justify-center items-center mx-5">
          <div className="text-gray-800 text-md ">{name}</div>
          <p className="text-gray-600 text-sm mb-16">
            {!seeMore ? info.substring(0, 200) + "..." : info}
            <button
              className="text-sky-400"
              onClick={() => setIsSeeMore(!seeMore)}
            >
              {!seeMore ? "Read More" : "Show Less"}
            </button>
          </p>
        </div>
        <CancelButton name={"not interested"} onClick={() => removeTour(id)} />
      </BaseForm>
    </div>
  );
};
export default Tour;
