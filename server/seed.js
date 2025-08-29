const mongoose = require('mongoose');
const Menu = require('./models/Menu');

const MONGODB_URI = "mongodb+srv://admin:90103@jaaynthcluster.xapbpra.mongodb.net/ordering_system?retryWrites=true&w=majority";

const sampleMenuItems = [
  { name: 'Margherita Pizza', price: 249, rating: 4.5, imageURL: '9.jpg', description: 'Classic Italian pizza with fresh mozzarella and basil' },
  { name: 'Paneer Butter Masala', price: 199, rating: 4.6, imageURL: '11.jpg', description: 'Creamy and rich paneer curry in aromatic spices' },
  { name: 'Masala Dosa', price: 120, rating: 4.4, imageURL: '10.jpg', description: 'Crispy rice crepe filled with spiced potato mixture' },
  { name: 'Chicken Biryani', price: 299, rating: 4.7, imageURL: '2.jpg', description: 'Aromatic basmati rice cooked with tender chicken and spices' },
  { name: 'Veg Biryani', price: 249, rating: 4.3, imageURL: '15.jpg', description: 'Fragrant rice dish with mixed vegetables and aromatic spices' },
  { name: 'Butter Naan', price: 40, rating: 4.2, imageURL: '1.jpg', description: 'Soft and fluffy bread brushed with butter' },
  { name: 'Tandoori Chicken', price: 349, rating: 4.6, imageURL: '14.jpg', description: 'Marinated chicken roasted in traditional tandoor oven' },
  { name: 'Idli Sambhar', price: 80, rating: 4.1, imageURL: '8.jpg', description: 'Steamed rice cakes served with lentil soup' },
  { name: 'Chole Bhature', price: 150, rating: 4.5, imageURL: '3.jpg', description: 'Spiced chickpeas with deep-fried bread' },
  { name: 'Pav Bhaji', price: 130, rating: 4.4, imageURL: '12.jpg', description: 'Mashed vegetable curry served with soft bread rolls' },
  { name: 'Rajma Chawal', price: 160, rating: 4.3, imageURL: '13.jpg', description: 'Red kidney beans curry with steamed rice' },
  { name: 'Dal Tadka', price: 140, rating: 4.2, imageURL: '5.jpg', description: 'Tempered lentils with aromatic spices' },
  { name: 'Fish Curry', price: 320, rating: 4.5, imageURL: '6.jpg', description: 'Fresh fish cooked in tangy coconut curry' },
  { name: 'Cold Coffee', price: 90, rating: 4.3, imageURL: '4.jpg', description: 'Refreshing coffee with cream and ice' },
  { name: 'Gulab Jamun', price: 70, rating: 4.7, imageURL: '7.jpg', description: 'Sweet milk solids soaked in rose-flavored syrup' }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    await Menu.deleteMany({});
    console.log('🗑️ Cleared existing menu items');

    const insertedItems = await Menu.insertMany(sampleMenuItems);
    console.log(`🍽️ Inserted ${insertedItems.length} delicious Indian dishes\n`);
    console.log('📱 Your Ordering System is now ready with:');
    console.log('   • 15 Popular Indian Dishes');
    console.log('   • Realistic Prices in INR (₹)');
    console.log('   • Local Images served from frontend public folder');
    console.log('   • Customer Ratings\n');
    console.log('🚀 Start your frontend to see the beautiful menu!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
