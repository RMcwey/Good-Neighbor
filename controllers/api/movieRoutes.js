const router = require('express').Router();
const { Movie, User } = require('../../models');
const { update } = require('../../models/User');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newMovie = await Movie.create({
      ...req.body,
      movie_contributor: req.session.user_id,
    });

    res.status(200).json(newMovie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
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
    res.status(200).json(movies);
    // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   movies, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});


// possibly needs to be removed
router.get('/:movie_id', async (req, res) => {
  try {
    const oneTag = await Movie.findByPk(req.params.movie_id);
    // if (!oneTag){
    //   res.status(404).json({ message: 'No tag found with this id' });
    //   return;
    // }

    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:movie_id', async (req, res) => {
  try {
    const updateTag = await Movie.update(req.body, {
      where: {
        movie_id: req.params.movie_id,
      },
    }
  )
    res.status(200).json({ message: "successfully edited" });
  } catch (err) {
    res.status(400).json(err);
  }
});



router.delete('/:id', withAuth, async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        movie_id: req.params.id,
        movie_contributor: req.session.user_id,
      },
    });

    if (!movieData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
