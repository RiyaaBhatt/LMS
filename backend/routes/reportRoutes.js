// routes/reportRoutes.js

const express = require('express');
const router = express.Router();
const { Report } = require('../models/Report');
// Routes for /api/reports
router.get('/', async (req, res)=> {
    try {
      const reports = await Report.findAll();
      res.json(reports);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.get('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const report = await Report.findByPk(id);
      if (!report) {
        return res.status(404).json({ error: 'Report not found' });
      }
      res.json(report);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/', async (req, res)=> {
    const reportData = req.body;
    try {
      const newReport = await Report.create(reportData);
      res.status(201).json(newReport);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.put('/:id', async (req, res)=> {
    const { id } = req.params;
    const reportData = req.body;
    try {
      const report = await Report.findByPk(id);
      if (!report) {
        return res.status(404).json({ error: 'Report not found' });
      }
      await report.update(reportData);
      res.json(report);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const report = await Report.findByPk(id);
      if (!report) {
        return res.status(404).json({ error: 'Report not found' });
      }
      await report.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
    