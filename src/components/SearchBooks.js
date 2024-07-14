
import React, { useState } from 'react';
import axios from 'axios';
import '../Assests/css/search.css';

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/userBooks`, {
        params: { query },
      });
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  return (
    <div className="search-books">
      <input
        type="text"
        placeholder="Search Books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>

      <div className="search-results">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.thumbnail} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;


