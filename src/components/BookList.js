// import React from 'react';
import book_img from '../Assests/images/book.png'




import React from 'react';
import '../Assests/css/BookList.css';

function BookList() {
  return (
    <div className="book-list">
      <h2>My Books</h2>
      <div className="book">
        <img src={book_img} alt="Book Cover" />
        <div className="book-info">
          <h3>Book Title</h3>
          <p>Author, Year</p>
          <p>Short description of the book...</p>
          <button className="return-button">Return</button>
        </div>
      </div>
    </div>
  );
}

export default BookList;
