// BorrowedBookList.js
import React, { useEffect, useState } from 'react';
import { Table, Container, Alert, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

const BorrowedBookList = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('borrow_date');

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/borrowed-books');
        let sortedData = response.data;

        switch (sortOption) {
          case 'borrow_date':
            sortedData = sortedData.sort((a, b) => new Date(a.borrow_date) - new Date(b.borrow_date));
            break;
          case 'due_date':
            sortedData = sortedData.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
            break;
          case 'book_name':
            sortedData = sortedData.sort((a, b) => a.book_name.localeCompare(b.book_name));
            break;
          default:
            break;
        }

        setBorrowedBooks(sortedData);
      } catch (error) {
        setError('Error fetching borrowed books');
      } finally {
        setLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, [sortOption]);

  const handleSelect = (eventKey) => {
    setSortOption(eventKey);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Borrowed Books List</h2>
      <DropdownButton
        id="dropdown-basic-button"
        title={`Sort by: ${sortOption.replace('_', ' ')}`}
        className="mb-3"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="borrow_date">Borrow Date</Dropdown.Item> <br />
        <Dropdown.Item eventKey="due_date">Due Date</Dropdown.Item><br />
        <Dropdown.Item eventKey="book_name">Book Name</Dropdown.Item><br />
      </DropdownButton>
      <br /><br /> <br />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : borrowedBooks.length === 0 ? (
        <Alert variant="info" className="text-center">
          No borrowed books found.
        </Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Borrow Date</th>
              <th>Due Date</th>
              <th>Return Date</th>
              <th>Late Fee</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((borrowedBook) => (
              <tr key={`${borrowedBook.user_id}-${borrowedBook.book_id}`}>
                <td>{borrowedBook.user_id}</td>
                <td>{borrowedBook.book_id}</td>
                <td>{borrowedBook.book_name}</td>
                <td>{new Date(borrowedBook.borrow_date).toLocaleDateString()}</td>
                <td>{new Date(borrowedBook.due_date).toLocaleDateString()}</td>
                <td>
                  {borrowedBook.return_date
                    ? new Date(borrowedBook.return_date).toLocaleDateString()
                    : 'Not Returned'}
                </td>
                <td>{borrowedBook.late_fee ? `$${borrowedBook.late_fee.toFixed(2)}` : 'No Fee'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default BorrowedBookList;