// routes/auditLogRoutes.js

const express = require('express');
const router = express.Router();
const { AuditLog } = require('../models/AuditLog');

router.get('/', async (req, res)=> {
    try {
      const auditLogs = await AuditLog.findAll();
      res.json(auditLogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    try {
      const auditLog = await AuditLog.findByPk(id);
      if (!auditLog) {
        return res.status(404).json({ error: 'Audit log not found' });
      }
      res.json(auditLog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.post('/', async (req, res) =>{
    const auditLogData = req.body;
    try {
      const newAuditLog = await AuditLog.create(auditLogData);
      res.status(201).json(newAuditLog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.put('/:id', async (req, res)=> {
    const { id } = req.params;
    const auditLogData = req.body;
    try {
      const auditLog = await AuditLog.findByPk(id);
      if (!auditLog) {
        return res.status(404).json({ error: 'Audit log not found' });
      }
      await auditLog.update(auditLogData);
      res.json(auditLog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);
router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    try {
      const auditLog = await AuditLog.findByPk(id);
      if (!auditLog) {
        return res.status(404).json({ error: 'Audit log not found' });
      }
      await auditLog.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },);

module.exports = router;
