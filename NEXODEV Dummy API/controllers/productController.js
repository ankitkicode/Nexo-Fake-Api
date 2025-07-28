const Product = require('../models/Product');

// GET /api/products?category=mobile&minPrice=500&maxPrice=1500&search=phone&inStock=true&sort=price
exports.getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, search, inStock, sort } = req.query;

    const query = {};

    if (category) query.category = category;
    if (inStock !== undefined) query.inStock = inStock === 'true';

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    let sortBy = {};
    if (sort === 'price') sortBy.price = 1;
    if (sort === 'rating') sortBy.rating = -1;

    const products = await Product.find(query).sort(sortBy);

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Invalid product ID', error: error.message });
  }
};
