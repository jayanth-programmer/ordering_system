const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// GET /api/menu - Get all menu items
router.get('/', async (req, res) => {
  try {
    // Fetch all menu items without sorting to avoid errors
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ message: 'Error fetching menu items' });
  }
});

module.exports = router;
