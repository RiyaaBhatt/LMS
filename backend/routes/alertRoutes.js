// routes/alertRoutes.js

const express = require('express');
const router = express.Router();
const { Alert } = require('../models/Alert');
// Routes for /api/alerts
router.get('/',async (req, res)=> {
    try {
      const alerts = await Alert.findAll();
      res.json(alerts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    try {
      const alert = await Alert.findByPk(id);
      if (!alert) {
        return res.status(404).json({ error: 'Alert not found' });
      }
      res.json(alert);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/',  async (req, res) =>{
    const alertData = req.body;
    try {
      const newAlert = await Alert.create(alertData);
      res.status(201).json(newAlert);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.put('/:id', async (req, res)=> {
  const { id } = req.params;
  const alertData = req.body;
  try {
    const alert = await Alert.findByPk(id);
    if (!alert) {
      return res.status(404).json({ error: 'Alert not found' });
    }
    await alert.update(alertData);
    res.json(alert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const alert = await Alert.findByPk(id);
    if (!alert) {
      return res.status(404).json({ error: 'Alert not found' });
    }
    await alert.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);

module.exports = router;
