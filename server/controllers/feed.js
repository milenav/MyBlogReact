const Post = require('../models/Post');

module.exports = {

  getPosts: (req, res) => {
    Post.find()
      .then((posts) => {
        res.status(200)
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
        .json({ message: 'Post created successfully!', post })
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
  },
  getPostById: (req, res) => {
    const id = req.params.id;

    Post.findById(id)
      .then((post) => {
        res.status(200)
          .json({ message: 'Post fetched successfully..', post })
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }

        next(error);
      });
  },
  editPost : (req, res) => {
    const id = req.params.id;

    Post.findById(id)
    .then((post) => {
      post.title = req.body.title;
      post.subtitle = req.body.subtitle;
      post.content = req.body.content;
      post.image = req.body.image;

      post.save()
      then(() => {
        res.status(200)
        .json({ message: 'Post edited successfully.', post})
      })
    })
    .catch((error) => {
      res.status(500)
      .json({message: 'Something went wrong.', error})
    });
  },
  deletePost: (req, res) => {
    const id = req.params.id;

    Post.findById(id)
    .then((post) => {
      res.status(200)
      .json({ message: 'Poste deleted siccessfully.', })
    })
    .catch((error) => {
      res.status(500)
      .json({ message: 'Semething went wrong.', error })
    });
  }
}