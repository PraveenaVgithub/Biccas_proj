import React from 'react';
import './cart.css';

const Cart = ({ size, setShow }) => {
  const handleCartClick = () => {
    setShow(false);
  };

  return (
    <div className="cart-icon" title="Cart" onClick={handleCartClick}>
      🛒
      {size > 0 && (
        <div className="cart-badge">
          {size}
        </div>
      )}
    </div>
  );
};

export default Cart;
