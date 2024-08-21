// const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => res.send('Wrong route!'));

// module.exports = router;

const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

// Add the API routes here
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// Default route for wrong paths
router.use((req, res) => res.status(404).send('Wrong route!'));

module.exports = router;