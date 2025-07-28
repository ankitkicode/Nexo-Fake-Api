const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  try {
    const { search, author, tags, sort, limit } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    if (author) {
      query.author = { $regex: author, $options: 'i' }; // Later can switch to ObjectId
    }

    if (tags) {
      const tagList = tags.split(','); // e.g., ?tags=javascript,react
      query.tags = { $in: tagList };
    }

    let sortBy = {};
    if (sort === 'likes') sortBy.likes = -1;
    if (sort === 'recent') sortBy.createdAt = -1;

    const posts = await Post.find(query)
      .sort(sortBy)
      .limit(limit ? parseInt(limit) : 0);

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/posts/:id
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Invalid post ID', error: error.message });
  }
};
