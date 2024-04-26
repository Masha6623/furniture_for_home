import Item from "./Item";

const Items = ({addToOrder, stateCurrentItems, onShowItem}) => {
  return (
    <main>
      {stateCurrentItems.map((el) => (
        <Item onShowItem={onShowItem} key={el.img} item={el} addToOrder={addToOrder} />
      ))}
    </main>
  );
};

export default Items;
