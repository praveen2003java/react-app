import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setSelectedItem(null); // Optionally hide the detail
    }, 3000);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            onClick={() => setSelectedItem(menuItem)}
          />
        ))}
      </div>

      {selectedItem && (
        <div className="itemDetails">
          <h2>{selectedItem.name}</h2>
          <img className="detailImage" src={selectedItem.image} alt={selectedItem.name} />
          <p>Price: ₹{selectedItem.price}</p>
          <button className="orderButton" onClick={handleOrder}>Add Order</button>
          {orderPlaced && <p className="order-success">Your order is placed!</p>}
        </div>
      )}
    </div>
  );
}

export default Menu;
