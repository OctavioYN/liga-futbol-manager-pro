
const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all referees
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM referees ORDER BY name');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new referee
router.post('/', async (req, res) => {
  try {
    const { name, license, experience, phone, email, category } = req.body;
    const [result] = await db.execute(
      'INSERT INTO referees (name, license, experience, phone, email, category) VALUES (?, ?, ?, ?, ?, ?)',
      [name, license, experience, phone, email, category]
    );
    res.status(201).json({ id: result.insertId, message: 'Referee created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update referee
router.put('/:id', async (req, res) => {
  try {
    const { name, license, experience, phone, email, category, matches_officiated } = req.body;
    await db.execute(
      'UPDATE referees SET name = ?, license = ?, experience = ?, phone = ?, email = ?, category = ?, matches_officiated = ? WHERE id = ?',
      [name, license, experience, phone, email, category, matches_officiated, req.params.id]
    );
    res.json({ message: 'Referee updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete referee
router.delete('/:id', async (req, res) => {
  try {
    await db.execute('DELETE FROM referees WHERE id = ?', [req.params.id]);
    res.json({ message: 'Referee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
