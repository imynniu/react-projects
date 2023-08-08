import BaseGridContainer from "./components/container/grid/baseGridContainer";
import Item from "./Item";
const MenuItems = ({ menuItems }) => {
  return (
    <BaseGridContainer>
      {menuItems.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </BaseGridContainer>
  );
};
export default MenuItems;
