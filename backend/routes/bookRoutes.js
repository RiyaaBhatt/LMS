// routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const Book = require('../models/Book')

// Routes for /api/books
router.get('/', async (req, res)=> {
  console.log(Object.getOwnPropertyNames(Book));
    try {
      const books = await Book.findAll();
      res.json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' }) 
    }
  },);
router.get('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/', async (req, res)=> {
    const bookData = req.body;
    try {
      const newBook = await Book.create(bookData);
      res.status(201).json(newBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.put('/:id', async (req, res)=> {
    const { id } = req.params;
    const bookData = req.body;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      await book.update(bookData);
      res.json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      await book.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
