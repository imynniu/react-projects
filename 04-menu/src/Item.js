import ImageCut from "./components/img/imageCut";
import BaseForm from "./components/forms/baseForm";
import MoneyNum from "./components/number/moneyNum";
const Item = ({ img, title, price, desc }) => {
  return (
    <BaseForm>
      <ImageCut src={img} alt={title} />
      <div className="flex flex-col w-full  px-6 py-10">
        <div className="w-full  flex flex-raw justify-between items-center mt-2 px-1 mb-5">
          <div className="text-2xl text-gray-800 capitalize tracking-wide">
            {title}
          </div>
          <div className="text-base bg-yellow-500 text-white px-2 rounded">
            <MoneyNum price={price} />
          </div>
        </div>
        <div className="text-gray-600 tracking-tight indent-8 mx-2">{desc}</div>
      </div>
    </BaseForm>
  );
};
export default Item;
