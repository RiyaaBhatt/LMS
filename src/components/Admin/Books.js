// AddBookForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Books = () => {
  const [book, setBook] = useState({
    isbn: '',
    imageLink: '',
    title: '',
    author: '',
    publisher: '',
    year: '',
    genre: '',
    quantity: '',
    available_quantity: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/books', book, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setMessage('Book added successfully!');
        setBook({
          isbn: '',
          imageLink: '',
          title: '',
          author: '',
          publisher: '',
          year: '',
          genre: '',
          quantity: '',
          available_quantity: ''
        });
      } else {
        setMessage('Error: ${response.data.error}');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      setMessage('Error adding book');
    }
  };

  return (
    
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="8">
          <h2 className="text-center mb-4">Add a New Book</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="isbn">
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type="text"
                name="isbn"
                value={book.isbn}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="imageLink">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                type="text"
                name="imageLink"
                value={book.imageLink}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="publisher">
              <Form.Label>Publisher</Form.Label>
              <Form.Control
                type="text"
                name="publisher"
                value={book.publisher}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={book.year}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                value={book.genre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={book.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="available_quantity">
              <Form.Label>Available Quantity</Form.Label>
              <Form.Control
                type="number"
                name="available_quantity"
                value={book.available_quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Add Book
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Books;