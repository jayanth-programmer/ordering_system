const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// GET /api/orders - Get all orders (ADMIN ONLY - requires authentication)
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate('items.menuItemId', 'name imageURL');
    
    res.json({
      message: 'Orders retrieved successfully',
      orders,
      totalOrders: orders.length
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// GET /api/orders/:id - Get specific order details (ADMIN ONLY)
router.get('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.menuItemId', 'name imageURL');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    res.json({
      message: 'Order retrieved successfully',
      order
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Error fetching order' });
  }
});

module.exports = router;
