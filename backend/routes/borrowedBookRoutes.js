// routes/borrowedBookRoutes.js

const express = require('express');
const router = express.Router();

const { BorrowedBook } = require('../models/BorrowedBook');
// Routes for /api/borrowed-books
router.get('/', async (req, res)=> {
    try {
      const borrowedBooks = await BorrowedBook.findAll();
      res.json(borrowedBooks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.get('/:id',async (req, res)=> {
    const { id } = req.params;
    try {
      const borrowedBook = await BorrowedBook.findByPk(id);
      if (!borrowedBook) {
        return res.status(404).json({ error: 'Borrowed book not found' });
      }
      res.json(borrowedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/', async (req, res)=> {
    const borrowedBookData = req.body;
    try {
      const newBorrowedBook = await BorrowedBook.create(borrowedBookData);
      res.status(201).json(newBorrowedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.put('/:id', async (req, res)=> {
    const { id } = req.params;
    const borrowedBookData = req.body;
    try {
      const borrowedBook = await BorrowedBook.findByPk(id);
      if (!borrowedBook) {
        return res.status(404).json({ error: 'Borrowed book not found' });
      }
      await borrowedBook.update(borrowedBookData);
      res.json(borrowedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const borrowedBook = await BorrowedBook.findByPk(id);
      if (!borrowedBook) {
        return res.status(404).json({ error: 'Borrowed book not found' });
      }
      await borrowedBook.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
