const router = require('express').Router();
const { Movie } = require('../../models');
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


router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    
    if (!movie){
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const changeAvailability = await Movie.update(req.body, {
      where: {
        movie_id: req.params.id,
      },
    }
  )
    if (!changeAvailability) {
      res.status(404).json({ message: 'No movie found with this id.' });
      return;
    }
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
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
