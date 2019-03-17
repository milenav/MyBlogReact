const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/posts', feedController.getPosts);
router.post('/post/create', feedController.createPost);
router.get('/post/:id'), isAuth, feedController.getPostById;



module.exports = router;