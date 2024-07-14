import React, { useState, useEffect } from 'react';
import books from '../data/book';

const SearchBar = ({ query, setResults }) => {
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    setLocalQuery(query); 
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(localQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(localQuery.toLowerCase())
    );
    setResults(filteredBooks, localQuery);
  };

  const handleInputChange = (e) => {
    setLocalQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={localQuery}
          onChange={handleInputChange}
          placeholder="Search the books available in library"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
