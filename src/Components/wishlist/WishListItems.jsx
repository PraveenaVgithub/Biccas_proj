import React from 'react';
import './wishitem.css'; 

const WishListItems = ({ wish, size, setWishShow, setWishes }) => {
  const defprice=50;
  const handleRemove = (index) => {
    const newWish = [...wish];
    newWish.splice(index, 1);
    setWishes(newWish);
  };
  if (!wish || size === 0) {
    return (
      <div className="centerr">
        <h2>Your WishList is empty</h2>
        <button  onClick={() => setWishShow(false)} >Back to Shop</button>
      </div>
    );
  }

  return (
    <div className='wishlist-whole'>
      <button onClick={() => setWishShow(false)} className='mb-3 wishlist-back-button'>Back to Shop</button>
      <div className='wishlist-items-container'>
      
        {wish.map((item, index) => (
          <div className='col-12 mb-3' key={index.primary_isbn13}>
          <div className='wishlist-item-row' key={index}>
            <div className='wishlist-item'>
              <img src={item.book_image} alt={item.title} className='wishlist-item-image' />
              <div className='wishlist-item-details'>
                <h5>{item.title}</h5>
                <div className='wishlist-item-actions'>
                <span>${defprice}</span>
                  <button className='wishlist-button remove' onClick={() => handleRemove(index)}>Remove</button>
                  <button className='wishlist-button buy'>Buy</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default WishListItems;
