// const router = require('express').Router();
// const {
//   getThoughts,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought,
//   addReaction,
//   removeReaction,
// } = require('../../controllers/thoughtController');

// router.route('/').get(getThoughts).post(createThought);

// router.route('/:thoughtId')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

// router.route('/:thoughtId/reactions')
//   .post(addReaction)
//   .delete(removeReaction);

// module.exports = router;

const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// Route for /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// Route for /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Route for /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// Route for /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;