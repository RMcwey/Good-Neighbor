const router = require('express').Router();
const { Movie } = require('../../models');
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


router.put('/:id', async (req, res) => {
  try {
    const editIsAvailable = await Movie.update(
      {is_available: req.body.is_available},
      {where: req.params.id}
    )

    res.status(200).json(editIsAvailable);
    res.json(editIsAvailable);
    console.log("successfully edited");
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
