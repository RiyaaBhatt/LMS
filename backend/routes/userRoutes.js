// routes/userRoutes.js (Example for Users table)

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const User = require('../models/User');
// Routes for /api/users
router.get('/', async (req, res)=> {
    console.log(Object.getOwnPropertyNames(User));
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error', message: error});
    }
  },);
// router.get('/', UserController.getAll);
router.get('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/', async (req, res)=> {
    const userData = req.body;
    try {
      console.log(userData)
      const newUser = await User.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error',message:error  });
    }
  },);
router.put('/:id', async (req, res)=> {
    const { id } = req.params;
    const userData = req.body;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.update(userData);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
