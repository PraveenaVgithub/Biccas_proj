import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Cart from '../../../Components/Cart/Cart';
import ShopData from './ShopData';
import CartItems from './CartItems';
import WishList from '../../../Components/wishlist/WishList';
import WishListItems from '../../../Components/wishlist/WishListItems';

const Product = () => {
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [cart, setCart] = useState([]);
  const [wish, setWishes] = useState([]);
  
  const handleClick = (book) => {
    const isBookInCart = cart.find((item) => item.primary_isbn13 === book.primary_isbn13);

    if (isBookInCart) {
      alert('This book is already added to the cart.');
    } else {
      setCart([...cart, book]);
    }
  };

  const handleWish = (book, isClick) => {
    const isBookInWishList = wish.find((item) => item.primary_isbn13 === book.primary_isbn13);
    if (isClick) {
      // Remove from wishlist
      const newWish = wish.filter((item) => item.primary_isbn13 !== book.primary_isbn13);
      setWishes(newWish);
    } else {
      // Add to wishlist if not already added
      if (isBookInWishList) {
        alert('This book is already in the wishlist.');
       
      } else {
        setWishes([...wish, book]);
      }
    }
  };

  const handleWishListToggle = () => {
    setShowWishlist((prev) => !prev);
  };

  const handleCartToggle = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className='d-flex justify-content-end mt-2'>
        <WishList size={wish.length} onToggle={handleWishListToggle} />
        <Cart size={cart.length} setShow={handleCartToggle} />
      </div>
      <div>
        {showWishlist ? (
          <WishListItems 
            wish={wish} 
            size={wish.length} 
            setWishShow={setShowWishlist} 
            setWishes={setWishes} 
          />
        ) : showCart ? (
          <CartItems 
            cart={cart} 
            size={cart.length} 
            setShow={setShowCart} 
            setCart={setCart} 
          />
        ) : (
          <ShopData handleClick={handleClick} handleWish={handleWish} />
        )}
      </div>
    </>
  );
};

export default Product;
