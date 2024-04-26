const Item = ({item, addToOrder, onShowItem}) => {

    return ( 
        <div className="item">
           <img src={"./img/" + item.img} onClick={() => onShowItem(item)}/>
           <h2>{item.title}</h2>
           <p>{item.desc}</p>
           <b>{item.price}$</b>
           <div className="add-to-cart" onClick={() => addToOrder(item)}>+</div>
        </div>
     );
}
 
export default Item;