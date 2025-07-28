const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const { search, location, sort, limit } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { username: { $regex: search, $options: 'i' } }
      ];
    }

    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    let sortBy = {};
    if (sort === 'name') sortBy.name = 1;
    if (sort === 'username') sortBy.username = 1;

    const users = await User.find(query)
      .sort(sortBy)
      .limit(limit ? parseInt(limit) : 0);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/users/:id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Invalid user ID', error: error.message });
  }
};