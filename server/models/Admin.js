const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'super_admin'],
    default: 'admin'
  }
}, {
  timestamps: true
});

// Method to compare password
adminSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.passwordHash);
};

// Static method to hash password
adminSchema.statics.hashPassword = async function(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

module.exports = mongoose.model('Admin', adminSchema);
