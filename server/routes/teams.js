
const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all teams
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM teams ORDER BY name');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get team by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM teams WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new team
router.post('/', async (req, res) => {
  try {
    const { name, founded, stadium, coach } = req.body;
    const [result] = await db.execute(
      'INSERT INTO teams (name, founded, stadium, coach) VALUES (?, ?, ?, ?)',
      [name, founded, stadium, coach]
    );
    res.status(201).json({ id: result.insertId, message: 'Team created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update team
router.put('/:id', async (req, res) => {
  try {
    const { name, founded, stadium, coach, wins, draws, losses } = req.body;
    await db.execute(
      'UPDATE teams SET name = ?, founded = ?, stadium = ?, coach = ?, wins = ?, draws = ?, losses = ? WHERE id = ?',
      [name, founded, stadium, coach, wins, draws, losses, req.params.id]
    );
    res.json({ message: 'Team updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete team
router.delete('/:id', async (req, res) => {
  try {
    await db.execute('DELETE FROM teams WHERE id = ?', [req.params.id]);
    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
