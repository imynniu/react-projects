import { useState } from "react";
import "./App.css";
import menu from "./data";
import BaseContainer from "./components/container/baseContainer";
import BaseTitle from "./components/Title/baseTitle";
import BaseLine from "./components/Line/baseLine";
import MenuItems from "./menuItems";
import Categories from "./categories";
function App() {
  const [menuItems, setMenusItems] = useState(menu);
  const [categories, setCategories] = useState([
    "All",
    ...new Set(menu.map((item) => item.category)),
  ]);

  const fillterCategories = (name) => {
    if (name === "All") {
      setMenusItems(menu);
      return;
    } else {
      const newMenu = menu.filter((item) => item.category === name);
      setMenusItems(newMenu);
    }
  };

  return (
    <BaseContainer>
      <BaseTitle name="Menu" />
      <BaseLine />
      <Categories
        categories={categories}
        fillterCategories={fillterCategories}
      />
      <MenuItems menuItems={menuItems} />
    </BaseContainer>
  );
}

export default App;
