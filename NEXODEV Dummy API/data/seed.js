const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Product = require('../models/Product');
const User = require('../models/User');
const Post = require('../models/Post');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

// Load JSON data
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'files/products.json'), 'utf-8')
);
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'files/users.json'), 'utf-8')
);
const posts = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'files/posts.json'), 'utf-8')
);

const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Post.deleteMany();

    await Product.insertMany(products);
    await User.insertMany(users);
    await Post.insertMany(posts);

    console.log('✅ All data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

seedData();
