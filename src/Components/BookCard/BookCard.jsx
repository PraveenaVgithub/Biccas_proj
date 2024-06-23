import React from 'react';
import './bookcard.css';

const BookCard = ({ book, title, author, description, book_image, handleClick }) => {
  const price = 50;

  return (
    <div className="card bc-whole" style={{ width: '16rem' }}>
      <img src={book_image} className="card-img-top" alt="Book cover" />
      <div className="desc">
        <p className="card-text">{description}</p>
      </div>
      <div className="card-body bc-body ">
        <h5 className="card-title bc-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">- {author}</h6>
        <h5 className='card-subtitle '>${price}</h5>
      </div>
      <button className="btn bc-butt mt-1" onClick={() => handleClick(book)}>Add to Cart 🛒</button>
    </div>
  );
};

export default BookCard;
