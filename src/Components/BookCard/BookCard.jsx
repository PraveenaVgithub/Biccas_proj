import React, { useState } from 'react';
import './bookcard.css';
import Heart from "react-animated-heart";

const BookCard = ({ book, title, author, description, book_image, handleClick, handleWish }) => {
  const [isClick, setClick] = useState(false);
  
  const handleWishClick = () => {
    setClick(!isClick);
    handleWish(book, isClick); // Calling the handleWish prop 
  };

  return (
    <div className="card bc-whole">
      <img src={book_image} className="card-img-top" alt="Book cover" style={{ maxHeight: '17rem' }} />
      <div className="desc">
        <p className="card-text">{description}</p>
      </div>
      <div className="card-body bc-body">
        <h5 className="card-title bc-title mt-2">{title}</h5>
        <h6 className="card-subtitle bc-author text-body-secondary mb-2">- {author}</h6>
        <h5 className="card-subtitle bc-price">$50</h5>
        <div className="d-flex justify-content-evenly">
          <button className="btn bc-butt mt-4" onClick={() => handleClick(book)}>Add to Cart 🛒</button>
          <Heart isClick={isClick} onClick={handleWishClick} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
