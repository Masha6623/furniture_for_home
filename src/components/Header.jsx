import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const Header = ({ orders, onDelete }) => {
  let [cartOpen, setCartOpen] = useState(false);
  let summa = 0;
  orders.forEach(el => summa += Number.parseFloat(el.price));

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length ? (
              <div>
                {orders.map((el) => (
                  <Order key={el.id} item={el} onDelete={onDelete} />
                ))}
                <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
              </div>
            ) : (
              <div className="empty">
                <h2>Товаров нет</h2>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
