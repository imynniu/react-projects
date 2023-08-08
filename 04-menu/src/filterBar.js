import BaseButton from "./components/button/BaseButton";
const FilterBar = ({ item, fillterCategories }) => {
  console.log(item);
  return (
    <BaseButton
      name={item}
      controlClass="bg-yellow-500 hover:bg-yellow-600 "
      callback={fillterCategories}
    ></BaseButton>
  );
};
export default FilterBar;
