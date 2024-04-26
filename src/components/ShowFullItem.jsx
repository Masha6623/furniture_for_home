const ShowFullItem = ({ item, addToOrder, onShowItem, setVisibleFullItem }) => {
  return (
    <div className="full-item" onClick={() => setVisibleFullItem(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <img src={"./img/" + item.img} onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className="add-to-cart" onClick={() => addToOrder(item)}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
