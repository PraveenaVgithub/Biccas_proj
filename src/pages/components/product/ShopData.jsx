import React, { useState, useEffect } from 'react';
import BookCard from '../../../Components/BookCard/BookCard';

const ShopData = ({ handleClick }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CQzVQIGKmMZAGbatGE3GQ32okJIlt2ro');
        const data = await response.json();
        setBooks(data.results.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="row gy-4 g-5 row-cols-1 row-cols-sm-2 row-cols-md-4">
        {books.map((book) => (
          <div className="col" key={book.primary_isbn13}>
            <BookCard
              book={book}
              title={book.title}
              author={book.author}
              description={book.description}
              book_image={book.book_image}
              handleClick={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopData;
