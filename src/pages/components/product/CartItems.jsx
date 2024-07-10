import React, { useState, useEffect } from 'react';
import './cartitems.css';

const CartItems = ({ cart, size, setShow, setCart }) => {
  let defprice = 50;
  let initialquant = 1;
  const [price, setPrice] = useState(0);
  const [quantities, setQuantities] = useState({}); 

  useEffect(() => {
    cart.forEach((item) => {
      setQuantities((prevQuantities) => ({...prevQuantities, [item.primary_isbn13]: initialquant }));
    });
  }, [cart,initialquant]);

  const handlePrice = () => {
    let tot = 0;
    cart.forEach((item) => {
      tot += defprice * quantities[item.primary_isbn13];
    });
    setPrice(tot);
  };

  useEffect(() => {
    handlePrice();
  });

  const removeItem = (isbn) => {
    const updatedCart = cart.filter((item) => item.primary_isbn13!== isbn);
    setCart(updatedCart);
  };

  const handleBackClick = () => {
    setShow(false);
  };

  const handleQuantityChange = (id, addorsub1) => {
    setQuantities((prevQuantities) => ({...prevQuantities, [id]: prevQuantities[id] + addorsub1 }));
    handlePrice();
  };

  // console.log('Cart in CartItems.jsx:', cart);
  if (!cart || size === 0) {
    return (
      <div className="centerr">
        <h2>Your cart is empty</h2>
        <button  onClick={handleBackClick} >Back to Shop</button>
      </div>
    );
  }

  return (
    <>
      <div className='cartitem-whole'>
        <button onClick={handleBackClick} className='mb-3 bbc'>Back to Shop</button>
        <div className='eachrow'>
          {cart.map((item) => (
            <div className='col-12 mb-3' key={item.primary_isbn13}>
              <div className='cart-item'>
                <img src={item.book_image} alt={item.title} className='cart-item-image' />
                <div className='cart-item-details'>
                  <h5>{item.title}</h5>
                </div>
                <div className='quantity-controls me-3'>
                  {quantities[item.primary_isbn13] > 1? (
                    <button onClick={() => handleQuantityChange(item.primary_isbn13, -1)}>-</button>
                  ) : (
                    <span />
                  )}
                  <span>{quantities[item.primary_isbn13]}</span>
                  <button onClick={() => handleQuantityChange(item.primary_isbn13, 1)}>+</button>
                </div>
                <div className='remove-button ms-1'>
                  <span>${defprice}</span>
                  <button onClick={() => removeItem(item.primary_isbn13)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='totprice'>
        <span>Total Price of your Cart</span>
        <span>$ {price}</span>
      </div>
    </>
  );
};

export default CartItems;