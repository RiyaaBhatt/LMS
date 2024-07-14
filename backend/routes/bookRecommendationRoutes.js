// routes/bookRecommendationRoutes.js

const express = require('express');
const router = express.Router();
const { BookRecommendation } = require('../models/BookRecommendation');
// Routes for /api/book-recommendations
router.get('/', async (req, res)=> {
    try {
      const bookRecommendations = await BookRecommendation.findAll();
      res.json(bookRecommendations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.get('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const bookRecommendation = await BookRecommendation.findByPk(id);
      if (!bookRecommendation) {
        return res.status(404).json({ error: 'Book recommendation not found' });
      }
      res.json(bookRecommendation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/', async (req, res)=> {
    const bookRecommendationData = req.body;
    try {
      const newBookRecommendation = await BookRecommendation.create(bookRecommendationData);
      res.status(201).json(newBookRecommendation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.put('/:id', async (req, res)=> {
    const { id } = req.params;
    const bookRecommendationData = req.body;
    try {
      const bookRecommendation = await BookRecommendation.findByPk(id);
      if (!bookRecommendation) {
        return res.status(404).json({ error: 'Book recommendation not found' });
      }
      await bookRecommendation.update(bookRecommendationData);
      res.json(bookRecommendation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const bookRecommendation = await BookRecommendation.findByPk(id);
      if (!bookRecommendation) {
        return res.status(404).json({ error: 'Book recommendation not found' });
      }
      await bookRecommendation.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
