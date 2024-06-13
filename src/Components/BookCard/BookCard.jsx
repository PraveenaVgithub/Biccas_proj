import React from 'react'
import './bookcard.css';

const BookCard = ({ title, author, description, book_image }) => {
    return (
        <div className="card bc-whole" style={{ width: '16rem', position: 'relative' }}>
          <img src={book_image} className="card-img-top" alt="Book cover" />
          <div className="card-body bc-body">
            <h5 className="card-title bc-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">- {author}</h6>
            <div className="desc">
              <p className="card-text">{description}</p>
            </div>
 
          </div>
          <button className="btn bc-butt mt-1">Add to Cart 🛒</button>
        </div>
      );
    };
  export default BookCard;