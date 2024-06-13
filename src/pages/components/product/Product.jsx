import React from 'react'
import Navbar from '../Navbar/Navbar'
import BookCard from '../../../Components/BookCard/BookCard';
import { useEffect,useState } from 'react';

const Product = () => {
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
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <div className="row gy-4 g-5 row-cols-1 row-cols-sm-2 row-cols-md-4">
          {books.map((book) => (
            <div className="col" key={book.primary_isbn13}>
              <BookCard
                book_image={book.book_image}
                title={book.title}
                author={book.author}
                description={book.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

