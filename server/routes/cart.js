const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Menu = require('../models/Menu');

// POST /api/cart - Process cart checkout
router.post('/', async (req, res) => {
  try {
    const { items } = req.body;

    // Validate request
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Cart items are required' });
    }

    // Validate each item
    for (const item of items) {
      if (!item.menuItemId || !item.name || !item.qty || !item.price) {
        return res.status(400).json({ message: 'Invalid item data' });
      }
      
      if (item.qty <= 0) {
        return res.status(400).json({ message: 'Quantity must be positive' });
      }
      
      if (item.price < 0) {
        return res.status(400).json({ message: 'Price cannot be negative' });
      }
    }

    // Calculate total amount server-side
    const totalAmount = items.reduce((total, item) => {
      return total + (item.price * item.qty);
    }, 0);

    // Create new order
    const order = new Order({
      items,
      totalAmount
    });

    const savedOrder = await order.save();

    res.status(201).json({
      message: 'Order placed successfully!',
      order: savedOrder
    });

  } catch (error) {
    console.error('Error processing cart:', error);
    res.status(500).json({ message: 'Error processing order' });
  }
});

module.exports = router;
