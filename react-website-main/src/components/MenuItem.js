import React from "react";

function MenuItem({ image, name, price, onClick }) {
  return (
    <div className="menuItem" onClick={onClick} style={{ cursor: "pointer" }}>
      <div style={{ backgroundImage: `url(${image})`, height: "200px", backgroundSize: "cover", borderRadius: "8px" }} />
      <h1>{name}</h1>
      <p>₹{price}</p>
    </div>
  );
}

export default MenuItem;
