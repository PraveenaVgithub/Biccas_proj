import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}   
       style={{
          padding: '7px',
          fontSize: 16,
          border: '1px solid #ccc',
          borderRadius: '10px',
        }}/>
    </>
  );
};

export default SearchBar;