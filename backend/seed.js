const mongoose = require('mongoose');
const Product = require('./models/Product');

// Replace this with your MongoDB connection string if using MongoDB Atlas
const MONGO_URI = 'mongodb://localhost:27017/products';

// Sample product data
const products = [
    { name: 'Product 1', price: 29.99, description: 'High-quality product 1' },
    { name: 'Product 2', price: 19.99, description: 'Affordable product 2' },
    { name: 'Product 3', price: 39.99, description: 'Premium product 3' },
    { name: 'Product 4', price: 49.99, description: 'Luxury product 4' },
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Clear existing products
        await Product.deleteMany({});

        // Insert new products
        await Product.insertMany(products);

        console.log('Database seeded with products!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
}

seedDatabase();
