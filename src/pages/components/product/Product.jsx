import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Cart from '../../../Components/Cart/Cart';
import ShopData from './ShopData';
import CartItems from './CartItems';

const Product = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (book) => {
    const isBookInCart = cart.find((item) => item.primary_isbn13 === book.primary_isbn13);

    if (isBookInCart) {
      alert('This book is already added to the cart.');
    } else {
      setCart([...cart, book]);
    }
  };

 

  return (
    <>
      <Navbar />     
      <Cart size={cart.length} setShow={setShow} />
      <div>{show ? <ShopData handleClick={handleClick} /> : <CartItems cart={cart} size={cart.length} setShow={setShow} setCart={setCart}/>}</div>
 
    </>
  );
};

export default Product;
