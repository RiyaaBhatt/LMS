import React from 'react';

const SearchResults = ({ results, handleGoBack }) => {
  return (
    <div className="search-results">
      {/* <h2>Search Results</h2> */}
      {results.length > 0 ? (
        <ul>
          {results.map(book => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SearchResults;
