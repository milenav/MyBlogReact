const Post = require('../models/Post');

module.exports = {
  getPosts: (req, res) => {
    Post.find()
      .then((posts) => {
        res
          .status(200)
          .json({ message: 'Fetched posts successfully.', posts });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  createPost: (req, res) => {
    const postObj = req.body;
    Post.create(postObj)
    .then((post) => {
      res.status(200)
        .json({
          message: 'Post created successfully!',
          post
        })
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
  }
}