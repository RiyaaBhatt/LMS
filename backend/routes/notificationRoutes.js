const express = require('express');
const router = express.Router();
const { Notification } = require('../models/Notification');

// POST /api/notifications - Create a new notification
router.post('/', async (req, res)=> {
    const notificationData = req.body;
    try {
      const newNotification = await Notification.create(notificationData);

      // Send email notification
      await sendEmailNotification(newNotification);

      res.status(201).json(newNotification);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

// GET /api/notifications/user/:user_id - Get notifications by user_id
router.get('/user/:user_id', async (req, res)=> {
    const { user_id } = req.params;
    try {
      const notifications = await Notification.findAll({
        where: { user_id },
      });
      res.json(notifications);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
