// routes/searchHistoryRoutes.js

const express = require('express');
const router = express.Router();
const { SearchHistory } = require('../models/SearchHistory');
// Routes for /api/search-history
router.get('/', async (req, res)=> {
    try {
      const searchHistories = await SearchHistory.findAll();
      res.json(searchHistories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    try {
      const searchHistory = await SearchHistory.findByPk(id);
      if (!searchHistory) {
        return res.status(404).json({ error: 'Search history not found' });
      }
      res.json(searchHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/', async (req, res)=> {
    const searchHistoryData = req.body;
    try {
      const newSearchHistory = await SearchHistory.create(searchHistoryData);
      res.status(201).json(newSearchHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.put('/:id', async (req, res)=> {
    const { id } = req.params;
    const searchHistoryData = req.body;
    try {
      const searchHistory = await SearchHistory.findByPk(id);
      if (!searchHistory) {
        return res.status(404).json({ error: 'Search history not found' });
      }
      await searchHistory.update(searchHistoryData);
      res.json(searchHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const searchHistory = await SearchHistory.findByPk(id);
      if (!searchHistory) {
        return res.status(404).json({ error: 'Search history not found' });
      }
      await searchHistory.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
