import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import BookList from './Book_search';
import '../Assests/css/search.css'
import '../data/book.js'
import Header from './Header.js';
const books = [
  { _id: 1, title: 'Book One', author: 'Author One' },
  { _id: 2, title: 'Book Two', author: 'Author Two' },
  { _id: 3, title: 'Book Three', author: 'Author Three' },
  { _id: 4, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
  { _id: 5, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { _id: 6, title: 'You Don\'t Know JS', author: 'Kyle Simpson' },
  { _id: 7, title: 'JavaScript: The Definitive Guide', author: 'David Flanagan' },
  { _id: 8, title: 'Clean Code', author: 'Robert C. Martin' },
  { _id: 9, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
  { _id: 10, title: 'Design Patterns', author: 'Erich Gamma' },
  { _id: 11, title: 'Refactoring', author: 'Martin Fowler' },
  { _id: 12, title: 'Code Complete', author: 'Steve McConnell' },
  { _id: 13, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen' },
  { _id: 14, title: 'The Mythical Man-Month', author: 'Frederick P. Brooks Jr.' },
  { _id: 15, title: 'Effective Java', author: 'Joshua Bloch' },
  { _id: 16, title: 'The Art of Computer Programming', author: 'Donald Knuth' },
  { _id: 17, title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell' },
  { _id: 18, title: 'Head First Design Patterns', author: 'Eric Freeman' },
  { _id: 19, title: 'Algorithms', author: 'Robert Sedgewick' },
  { _id: 20, title: 'Python Crash Course', author: 'Eric Matthes' },
  { _id: 21, title: 'Deep Learning', author: 'Ian Goodfellow' },
  { _id: 22, title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell' },
  { _id: 23, title: 'The Clean Coder', author: 'Robert C. Martin' },
  { _id: 24, title: 'Structure and Interpretation of Computer Programs', author: 'Harold Abelson' },
  { _id: 25, title: 'The Elements of Statistical Learning', author: 'Trevor Hastie' }
];
const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showDefaultSections, setShowDefaultSections] = useState(true);
  const [query, setQuery] = useState('');

  const handleSearch = (results, searchQuery) => {
    setSearchResults(results);
    setQuery(searchQuery);
    setShowDefaultSections(false);
  };

  const handleGoBack = () => {
    setSearchResults([]);
    setShowDefaultSections(true);
  };

  return (
    <div className="home">
        <Header/>
      <SearchBar query={query} setResults={handleSearch} />
      {showDefaultSections ? (
        <SearchResults results={books} handleGoBack={handleGoBack}/>
      ) : (
        <SearchResults results={searchResults} handleGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default Home;
