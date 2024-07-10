import React, { useState, useEffect, Suspense } from 'react';
// import BookCard from '../../../Components/BookCard/BookCard';
// import SearchBar from '../../../Components/searchFilter/SearchBar';
const BookCard = React.lazy(() => import('../../../Components/BookCard/BookCard'));
const SearchBar = React.lazy(() => import('../../../Components/searchFilter/SearchBar'));
const ShopData = ({ handleClick, handleWish }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);  // Set loading to true at the beginning of the fetch
      try {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CQzVQIGKmMZAGbatGE3GQ32okJIlt2ro');
        const data = await response.json();
        setBooks(data.results.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);  // Set loading to false after data is fetched
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredBooks = books.filter((book) => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    return title.includes(searchTerm.toLowerCase()) || author.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <Suspense fallback={<div>Loading search bar...</div>}>
          <SearchBar onSearch={handleSearch} />
        </Suspense>
      </div>
      {loading ? (
        <h2>Loading...</h2> // Show loading message while fetching data
      ) : filteredBooks.length === 0 ? (
        <h2>OOPS ... Unavailable Search</h2>
      ) : (
        <div className="row gy-4 g-5 row-cols-1 row-cols-sm-2 row-cols-md-4 text-center">
          {filteredBooks.map((book) => (
            <div className="col" key={book.primary_isbn13}>
              <Suspense fallback={<div>📖</div>}>
                <BookCard
                  book={book}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  book_image={book.book_image}
                  handleClick={handleClick}
                  handleWish={handleWish}
                />
              </Suspense>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopData;