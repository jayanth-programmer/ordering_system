const mongoose = require('mongoose');
const Admin = require('./models/Admin');

// ========================================
// 🔧 UPDATE MONGODB CONNECTION HERE
// ========================================
// Replace the connection string below with your MongoDB details
const MONGODB_URI = 'mongodb+srv://admin:90103@jaaynthcluster.xapbpra.mongodb.net/ordering_system';

// ========================================
// 🔧 UPDATE ADMIN CREDENTIALS HERE
// ========================================
// Change these values to your preferred admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123'; // Change this password!
const ADMIN_ROLE = 'admin';

async function seedAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: ADMIN_USERNAME });
    if (existingAdmin) {
      console.log('⚠️  Admin user already exists');
      console.log('Username:', existingAdmin.username);
      console.log('Role:', existingAdmin.role);
      console.log('Created:', existingAdmin.createdAt);
      process.exit(0);
    }

    // Hash password
    const passwordHash = await Admin.hashPassword(ADMIN_PASSWORD);
    
    // Create admin user
    const admin = new Admin({
      username: ADMIN_USERNAME,
      passwordHash: passwordHash,
      role: ADMIN_ROLE
    });

    await admin.save();
    
    console.log('✅ Admin user created successfully!');
    console.log('Username:', ADMIN_USERNAME);
    console.log('Password:', ADMIN_PASSWORD);
    console.log('Role:', ADMIN_ROLE);
    console.log('');
    console.log('🔐 You can now login at: POST /api/admin/login');
    console.log('📊 Access orders at: GET /api/orders (with auth token)');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    process.exit(1);
  }
}

// Run the seed function
seedAdmin();
