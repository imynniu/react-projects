import FilterBar from "./filterBar";
const Categories = ({ categories, fillterCategories }) => {
  return (
    <div className="flex flex-row  w-full justify-center gap-12 mt-6">
      {categories.map((item) => (
        <FilterBar
          key={item}
          item={item}
          fillterCategories={fillterCategories}
        />
      ))}
    </div>
  );
};
export default Categories;
