const router = require('express').Router();
const { Movie, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    res.render('landingpage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/theshelf', async (req, res) => {
  try {
    // Get all movies and JOIN with user data
    const MovieData = await Movie.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const movies = MovieData.map((movies) => movies.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      movies,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/about', async (req, res) => {
  try {
    
    res.render('aboutus', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name', 'email', 'unit_number', 'mobile_number'],
        },
      ],
    });

    const movie = movieData.get({ plain: true });

    res.render('movie', {
      ...movie,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Movie }],
    });

    const user = userData.get({ plain: true });

    const borrowedMovieData = await Movie.findAll({
      attributes: ['movie_id', 'movie_name', 'current_holder'],
      where: {
        current_holder: req.session.username
      }
    }).catch((err) => {
      res.json(err);
    });
      const borrowedMovies = borrowedMovieData.map((data) => data.get({ plain: true }));

    console.log("Data for 'user':")
    console.log(user);
    console.log("Data for 'borrowedMovies':");
    console.log(borrowedMovies);

    res.render('profile', {
      ...user,
      borrowedMovies,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
