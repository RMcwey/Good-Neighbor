const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const movieRoutes = require('./movieRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/movies', movieRoutes);

module.exports = router;
