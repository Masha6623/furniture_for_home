import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import { items } from "./utils/furniture";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const [stateOrders, setStateOrders] = useState({ orders: [] });
  const [stateCurrentItems, setStateCurrentItems] = useState({ currentItems: [...items] });
  const [visibleFullItem, setVisibleFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  function addToOrder (item) {
    let isInArray = false;
    stateOrders.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setStateOrders({ ...stateOrders, orders: [...stateOrders.orders, item] });
    }
  };

  function deleteOrder (id) {
    setStateOrders({ ...stateOrders, orders: stateOrders.orders.filter(el => el.id !== id)})
  };

  function onShowItem(item) {
    setFullItem(item);
    setVisibleFullItem(!visibleFullItem)
  }

  function chooseCategory (category) {
    if(category === 'all') {
      console.log()
      setStateCurrentItems({ ...stateCurrentItems,
        currentItems: items
      })
      return;
    }

    setStateCurrentItems({ ...stateCurrentItems,
      currentItems: items.filter(el => el.category === category)
    })
  }

  useEffect(() => {
  }, [stateOrders]);

  return (
    <div className="wrapper">
      <Header orders={stateOrders.orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items onShowItem={onShowItem} stateCurrentItems={stateCurrentItems.currentItems} addToOrder={addToOrder} />
      {visibleFullItem && <ShowFullItem setVisibleFullItem={setVisibleFullItem} item={fullItem} addToOrder={addToOrder} onShowItem={onShowItem}/>}
      <Footer />
    </div>
  );
}

export default App;
