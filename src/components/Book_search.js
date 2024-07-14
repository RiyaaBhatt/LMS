import React from 'react';
import books from '../data/book.js';

const Book_search = ({ title }) => {
  const filteredBooks = books.filter(book =>
    title === 'New Arrivals' ? book.isNewArrival : book.isTrending
  );

  return (
    <div className="book-list">
      <h2>{title}</h2>
      <ul>
        {filteredBooks.map(book => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book_search;
